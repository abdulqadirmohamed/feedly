'use client'
import React from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import {signIn} from 'next-auth/react'

const SignIn = () => {
  return (
    <div className="w-[40%] mx-auto shadow text-center py-10">
      <div>
        <h1 className="text-xl font-bold">Sign In</h1>
        <p className="mb-5 text-sm">Not Registered yet</p>
        <hr />
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <button onClick={() => signIn('github')} className="flex items-center gap-3 bg-black my-2 px-4 py-2 rounded-md text-white w-fit">
          <span>
            <AiFillGithub size={20} />
          </span>
          <h3>Continue with Github</h3>
        </button>
        <button onClick={()=> signIn('google')} className="flex items-center gap-3 bg-[#DD4B39] my-2 px-4 py-2 rounded-md text-white w-fit">
          <span>
            <AiOutlineGoogle size={20} />
          </span>
          <h3>Continue with Google</h3>
        </button>
      </div>
     
    </div>
  );
};

export default SignIn;
