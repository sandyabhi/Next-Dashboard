"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import {
  AiOutlineGoogle,
  AiFillApple,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="flex w-full h-full flex-row  bg-blue-100">
      <div className="lg:w-2/4 hidden md:hidden lg:flex  h-screen bg-blue-500  flex-col justify-between">
        <p className="font-bold p-4">Home</p>

        <div className="flex flex-col justify-evenly items-center h-full">
          <div className="relative text-3xl font-bold">DASH.</div>
          <div className="absolute bottom-0 gap-4 pb-4 hidden sm:hidden md:hidden lg:flex">
            <a href="https://github.com/sandyabhi/Next-Dashboard">
              <AiFillGithub size={24} />
            </a>
            <a href="https://leetcode.com/abhisandy47/">
              <AiFillTwitterCircle size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sandeep-kumar-patel47/">
              <AiFillLinkedin size={24} />
            </a>
            <a href="https://discord.com/channels/@me">
              <BsDiscord size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Auth */}
      <div className="lg:w-2/4 md:w-full sm:w-full w-full h-screen md:h-screen sm:h-screen bg-slate-200 text-black justify-center items-center flex">
        <div className="fixed top-4 flex sm:flex lg:hidden md:flex flex-col items-center justify-center">
          <p className="text-blue-600 font-bold">LOGO</p>
          <p className="text-blue-600 text-3xl font-bold py-4">DASH.</p>
        </div>
        <div className="shadow-md rounded-lg bg-sky-50 px-4 py-8">
          {/* Header */}
          <div className="w-full h-full pb-4">
            <p className="font-bold text-2xl">Sign In</p>
            <p>Sign in to your account</p>
          </div>

          {/* Account */}
          <div className="flex gap-4 justify-between">
            <span
              onClick={() => signIn("google")}
              className="hover:bg-slate-500 text-gray-500  hover:text-white flex flex-row cursor-pointer bg-white shadow-md gap-2 justify-center items-center rounded-md px-2 py-1"
            >
              <AiOutlineGoogle
                className="text-red-500 bg-gray-50 rounded-full shadow-md"
                size={24}
              />
              <p className="text-sm">Sign in with Google</p>
            </span>
            <span className="hover:bg-slate-500 text-gray-500  hover:text-white flex flex-row cursor-pointer bg-white shadow-md gap-2 justify-center items-center rounded-md px-2 py-1">
              <AiFillApple
                className="text-gray-500 bg-gray-50 rounded-full shadow-md"
                size={24}
              />
              <p className="text-sm">Sign in with Apple</p>
            </span>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 pt-10">
            <div className="flex flex-col">
              <label>Email address</label>
              <input
                className="p-2 rounded-lg"
                type="text"
                placeholder="Eg. john@xyz"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="p-2 rounded-lg"
                type="password"
                placeholder="Eg. ********"
              />
            </div>

            <p className="text-xs text-blue-600">Forgot password?</p>

            <button className="hover:bg-slate-200 hover:text-blue-600 text-white font-bold bg-blue-500 rounded-lg p-2">
              Sign In
            </button>

            <div className="text-xs flex justify-center pt-4">
              <p>Don&apos;t have an account? </p>

              <p className="text-blue-500"> Register here</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 pb-4 text-blue-600 flex lg:hidden md:flex sm:flex sm:flex-row gap-4 justify-center items-center">
          <a href="https://github.com/sandyabhi/Next-Dashboard">
            <AiFillGithub size={24} />
          </a>
          <a href="https://leetcode.com/abhisandy47/">
            <AiFillTwitterCircle size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sandeep-kumar-patel47/">
            <AiFillLinkedin size={24} />
          </a>
          <a href="https://discord.com/channels/@me">
            <BsDiscord size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
