import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

// middleware for caching images
userRouter.use('/*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=31536000');
    await next();
})

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
                size: true,
                format: true,
                tags: true
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

userRouter.get('/images/:tag', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const tag = c.req.param("tag");

    try {
        const res = await prisma.images.findMany({
            select: {
                title: true,
                link: true,
                tags: true,
                width: true,
                height: true,
            },
            where: {
                tags: tag
            }
        })

        c.status(200);
        return c.json({ res });
    } catch (error) {
        console.error('error while fetching specific tag ' + error);
        c.status(500);
        return c.json({ message: "error while fetching tag images!" });
    } finally {
        await prisma.$disconnect();
    }

})

userRouter.get('/all/3/tags', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    // try {
    //     const allImages = await prisma.images.findMany();

    //     const allTags = allImages.reduce((acc: any, curr: any) => {
    //         const tagsArray = curr.tags.split(',').map((tag: any) => tag.trim());
    //         return [...acc, ...tagsArray];
    //     }, []);

    //     const tagCounts = allTags.reduce((acc, curr) => {
    //         acc[curr] = (acc[curr] || 0) + 1;
    //         return acc;
    //     }, {});

    //     const tagsWithTwoImages = Object.keys(tagCounts).filter(tag => tagCounts[tag] >= 2);

    //     const resp = await Promise.all(tagsWithTwoImages.map(async tag => {
    //         const images = await prisma.images.findMany({
    //             select: {
    //                 id: true,
    //                 title: true,
    //                 link: true,
    //                 tags: true,
    //             },
    //             where: {
    //                 tags: {
    //                     contains: tag
    //                 },
    //             }
    //         });
    //         return { tag, images };
    //     }));

    //     c.status(200);
    //     return c.json(resp);

    // } catch (error) {
    //     console.error('Error while fetching:', error);
    //     c.status(500);
    //     c.json({ message: "Error while fetching!!" });
    // } finally {
    //     await prisma.$disconnect();
    // }

    try {
        // Fetch all images and their tags
        const allImages = await prisma.images.findMany({
            select: {
                id: true,
                title: true,
                link: true,
                tags: true,
            },
        });

        // Use a single loop to process tags and count their occurrences
        const tagCounts: { [key: string]: number } = {};
        const tagImageMap: { [key: string]: any[] } = {};

        allImages.forEach(image => {
            const tagsArray = image.tags.split(',').map(tag => tag.trim());
            tagsArray.forEach(tag => {
                if (tagCounts[tag]) {
                    tagCounts[tag]++;
                    tagImageMap[tag].push(image);
                } else {
                    tagCounts[tag] = 1;
                    tagImageMap[tag] = [image];
                }
            });
        });

        // Filter tags that appear in at least two images
        const tagsWithTwoImages = Object.keys(tagCounts).filter(tag => tagCounts[tag] >= 2);

        // Construct the response based on filtered tags
        const resp = tagsWithTwoImages.map(tag => ({
            tag,
            images: tagImageMap[tag]
        }));

        c.status(200);
        return c.json(resp);

    } catch (error) {
        console.error('Error while fetching:', error);
        c.status(500);
        return c.json({ message: "Error while fetching!!" });
    } finally {
        await prisma.$disconnect();
    }

})

export { userRouter }