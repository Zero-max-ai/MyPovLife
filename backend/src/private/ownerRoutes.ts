import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import bcrypt, { hash } from 'bcryptjs';

const privateRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        // JWT_SECRET: string
    }
}>();

privateRoutes.use('/*', async (c, next) => {
    const { name, password, email } = c.req.header();

    if (name && password && email) {
        await next();
    }
    c.status(411);
    return c.json({ message: "missing credentials" })
});

privateRoutes.post('/imgUpload', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const { name, password, email } = c.req.header();

    // checking the owner details
    try {
        const owner = await prisma.owner.findFirst({ where: { name: name, email: email } });
        if (owner && bcrypt.compareSync(password, owner.password)) {
            c.status(403);
            return c.json({ message: "unauthorized access! - something wrong" })
        }
    } catch (err) {
        c.status(403);
        return c.json({ message: "unauthorized access!" });
    }

    const body = await c.req.json();
    console.log(body);
    try {
        await prisma.images.create({
            data: {
                title: body.title,
                link: body.link,
                size: body.size,
                width: body.width,
                height: body.height,
                deviceName: body.deviceName,
                tags: body.tags
            }
        });

        c.status(201);
        return c.json({ body, message: "new image uploaded" });
    } catch (err) {
        c.status(401);
        return c.json({ message: "unauthorized access or details not proper" });
    }
})

//  -------------acconut created  -------------------

// privateRoutes.post('/signup', async (c) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL
//     }).$extends(withAccelerate());

//     const { name, email, password } = await c.req.json();

//     try {
//         const salt = bcrypt.genSaltSync(10);
//         const hashedPassword = bcrypt.hashSync(password, salt);

//         await prisma.owner.create({
//             data: {
//                 name,
//                 password: hashedPassword,
//                 email
//             }
//         })

//         // const token = sign({ name, email, password: hashedPassword }, c.env.JWT_SECRET);

//         c.status(201);
//         return c.json({ message: "new owner account created" });
//     } catch (err) {
//         console.log(err);
//         c.status(401);
//         return c.json({ message: "error while signup" })
//     }
// })

export { privateRoutes }