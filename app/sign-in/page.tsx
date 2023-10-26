import SignIn from "@/components/SignIn";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession(authOptions)

    if(session){
        redirect('/')
    }
  return <SignIn />;
};

export default page;
