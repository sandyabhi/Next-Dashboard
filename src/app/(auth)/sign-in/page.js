"use client";

import { signIn } from "next-auth/react";

const page = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <button onClick={() => signIn("google")}>Login with Google</button>
      </div>
    </div>
  );
};

export default page;
