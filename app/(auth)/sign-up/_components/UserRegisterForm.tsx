'use client'
import React, { ChangeEvent, useState } from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";


const UserRegisterForm = () => {



    return (
        <div>
            <div className="w-[30%] mx-auto shadow text-center py-10 px-10">
                <div>
                    <h1 className="text-xl font-bold mb-5">Sign Up</h1>
                    {/* <p className="mb-5 text-sm">Not Registered yet</p> */}
                    <hr />
                </div>
                <div>
                    {/* <span className="text-sm text-red-600">{error}</span> */}
                </div>
                <form className="text-left">
                    <div className="my-4 flex flex-col gap-3">
                        <Label htmlFor="email">Name</Label>
                        <Input type="email" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="my-4 flex flex-col gap-3">
                        <Label htmlFor="email">Email <span className='text-red-600'>*</span></Label>
                        <Input type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="my-4 flex flex-col gap-3">
                        <Label htmlFor="password">Password <span className='text-red-600'>*</span></Label>
                        <Input type="Password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className='my-3'>
                        <Button type="submit" className="w-full bg-red-500">Register</Button>
                    </div>
                    <div className="text-center text-sm">
                        <span>Already registered? <Link href={'/sign-in'} className="underline">Sign in here</Link></span>
                    </div>
                </form>
                <div className="my-3 flex items-center gap-5">
                    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <span>or</span>
                    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div className="flex items-center justify-between gap-5 ">
                    <button onClick={() => signIn('github')} className="flex items-center gap-3 bg-black my-2 px-4 py-2 rounded-md text-white w-fit">
                        <span>
                            <AiFillGithub size={20} />
                        </span>
                        <h3>Continue with Github</h3>
                    </button>
                    <button onClick={() => signIn('google')} className="flex items-center gap-3 bg-[#DD4B39] my-2 px-4 py-2 rounded-md text-white w-fit">
                        <span>
                            <AiOutlineGoogle size={20} />
                        </span>
                        <h3>Continue with Google</h3>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UserRegisterForm

// const register = async () =>{
//     if(!email || !password){
//         setError("email and password are required")
//     }
//   try {
//     await axios.post("http://localhost:3000/api/register",{
//       email, password
//     });
//     router.push("/")
//   } catch (error) {
//     console.log(error)
//   }
// }