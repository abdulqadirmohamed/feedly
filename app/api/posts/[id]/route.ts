import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id
        const post = await prisma.post.findUnique(
            {
                where: { id },
                include: {
                    author: { select: { name: true } }
                },
            })
        return NextResponse.json(post)
    } catch (error) {
        console.log(error)
    }
}