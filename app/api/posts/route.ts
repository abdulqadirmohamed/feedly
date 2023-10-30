import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  //   if (!session) {
  //     return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  //   }
  const { title, content, featuredImage, selectedCategory } = await req.json();

  const authorEmail = session?.user?.email as string
  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required." },
      { status: 500 }
    );
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        featuredImage,
        categoryName: selectedCategory,
        authorEmail,
      },
    });
    console.log("Post created");
    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
