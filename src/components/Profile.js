"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

const Profile = () => {
  const session = useSession();
  const [profile, setProfile] = useState("");

  const User = {
    name: session?.data?.user.name,
    email: session?.data?.user.email,
    img: session?.data?.user.image,
  };
  //   console.log(session);
  //   setProfile(session?.data?.user);

  return (
    <div className="bg-slate-400 rounded-[50%]">
      {/* <p>{User.name}</p>
        <p>{User.email}</p> */}
      <img alt="profile_img" className="w-10 rounded-[50%]" src={User.img} />
    </div>
  );
};

export default Profile;
