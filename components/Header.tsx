"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <div className="border-b-[1px]">
      <div className="w-[60%] mx-auto flex justify-between items-center my-6">
        <Link href={"/"} className="text-2xl font-semibold text-red-500">Feedly</Link>
        <nav className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/technology"}>Technology</Link>
          <Link href={"/sports"}>Sports</Link>
          <Link href={"/programming"}>Programming</Link>
        </nav>
        <div className="flex items-center gap-2">
        <Link href={"/create-post"}>Create Post</Link>
          <div>
            {status === "authenticated" ? (
              <div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mx-4" onClick={() => signOut()}>Logout</button>
              </div>
            ) : (
              <Link className="bg-green-700 text-white px-4 py-2 rounded-md mx-4 hover:animate-pulse" href={"/sign-in"}>Sign In</Link>
            )}
          </div>
          {status === 'authenticated' ? (
            <Image
            src={session?.user?.image || ""}
            width={30}
            height={30}
            alt="User profile"
            className="rounded-full cursor-pointer"
          />
          ): ''}
          
          <h1>{session?.user?.name}</h1>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Header;
