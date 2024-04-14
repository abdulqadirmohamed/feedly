import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { categoryName: string } }) {
    try {
        const categoryName = params.categoryName;
        const posts = await prisma.category.findUnique({
            where: { categoryName },
            include: {
                post: { include: { author: true }, orderBy: { createdAt: "desc" } },
            },
        });
        return NextResponse.json(posts)
    } catch (error) {

    }
}