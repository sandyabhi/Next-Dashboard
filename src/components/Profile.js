"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

const Profile = () => {
  const session = useSession();

  const User = {
    name: session?.data?.user.name,
    email: session?.data?.user.email,
    img: session?.data?.user.image,
  };

  //   console.log(session);

  return (
    <div className="bg-slate-400 rounded-[50%]">
      <img alt="profile_img" className="w-10 rounded-[50%]" src={User.img} />
    </div>
  );
};

export default Profile;
