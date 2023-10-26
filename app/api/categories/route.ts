import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const res = await prisma.category.findMany()
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}