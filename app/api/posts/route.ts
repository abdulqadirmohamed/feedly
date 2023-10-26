import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { title, content, featuredImage, selectedCategory } = await req.json()
    // const authorEmail = 'cajiibxaaji02@gmail.com'
    const authorEmail = 'jiraaltech@gmail.com'
    if (!title || !content) {
        return NextResponse.json({ message: 'Title and content are required.' }, { status: 500 })
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                featuredImage,
                categoryName: selectedCategory,
                authorEmail
            }
        });
        console.log("Post created");
        return NextResponse.json(newPost)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: { author: { select: { name: true } } },
            orderBy: {createdAt: "desc"}
        });
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}