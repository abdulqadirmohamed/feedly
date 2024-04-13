import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(req: Request){
    try {
        const body = await req.json()
        const {email, name, password} =  body;

        if(!email || !password){
            return NextResponse.json({message: "email and password are required"}, {status:500})
        }
        const userAlreadyExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if(userAlreadyExist?.id){
            return NextResponse.json({message: "User already exist"}, {status:500})
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                hashedPassword: hashedPassword
            }
        });
        return NextResponse.json(newUser, {status:200})
    } catch (error:any) {
        console.log("Register error"+error)
        return NextResponse.json(error,{status: 500})
    }
}