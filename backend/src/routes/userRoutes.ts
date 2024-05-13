import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { stringBufferToString } from "hono/utils/html";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

// get all images
userRouter.get('/all', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const res = await prisma.images.findMany({
            select: {
                id: true,
                title: true,
                link: true,
                width: true,
                height: true,
                size: true
            }
        });
        c.status(200);
        return c.json({ res });
    } catch (err) {
        c.status(500);
        return c.json({ message: "error while fetching images!" })
    }

});

userRouter.get('/image/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const id = c.req.param('id');

    try {
        const res = await prisma.images.findFirst({
            where: {
                id: id
            }
        });
        c.status(200);
        return c.json({ res });
    } catch (err) {
        c.status(500);
        return c.json({ message: "error while fetching image!" })
    }

});

export { userRouter }