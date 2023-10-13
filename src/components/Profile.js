"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profile = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  const session = useSession();

  const User = {
    name: session?.data?.user.name,
    email: session?.data?.user.email,
    img: session?.data?.user.image,
  };

  function handleSignout() {
    signOut();

    router.push("/");
  }

  return (
    <>
      <div className="bg-slate-400 rounded-[50%] relative">
        <img
          onClick={() => {
            console.log(visible);
            setVisible(!visible);
          }}
          alt="img"
          className="w-10 rounded-[50%]"
          src={User.img}
        />
      </div>
      {visible && (
        <div className="absolute ml-4 mt-24 z-50 py-2 w-16 text-sm text-black bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
          <div className="hover:bg-slate-100 px-3 w-full ">
            <Link href="/">Home</Link>
          </div>
          <div
            onClick={() => handleSignout()}
            className="hover:bg-slate-100 px-3 w-full cursor-pointer"
          >
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
