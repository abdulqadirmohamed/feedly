
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Login from "./_components/Login";

const page = async () => {
    const session = await getServerSession(authOptions)

    if(session){
        redirect('/')
    }
  return <Login />;
};

export default page;
