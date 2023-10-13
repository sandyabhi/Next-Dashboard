"use client";

import {
  AiOutlinePlus,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";

const NewProfile = ({ visible, setVisible, setUser, user }) => {
  return (
    <div className="lg:w-[450px] md:w-[420px] sm:w-full h-[250px] container bg-white shadow-md rounded-md flex flex-col justify-center items-center">
      {!user.name && !user.email && !user.phone ? (
        <div className="p-5 flex flex-col cursor-pointer justify-center items-center">
          <AiOutlinePlus
            onClick={() => {
              setVisible(true);
            }}
            className="text-slate-400 cursor-pointer bg-gray-100 rounded-full"
            size={40}
          />
          <span className="text-black text-sm pt-3">Add Profile</span>
        </div>
      ) : (
        <div className="px-8 flex flex-col justify-center  text-black">
          <div className="font-bold text-2xl pb-5">{user.name}</div>
          <div className="pt-6 text-xs underline flex flex-wrap gap-6 justify-between">
            <p className="flex flex-row justify-center items-center gap-2">
              <AiOutlineWhatsApp className="text-green-500 bg-zinc-200 rounded-full" />
              {user.phone}
            </p>

            {user.instagram && (
              <p className="flex flex-row justify-center items-center gap-2">
                <AiOutlineInstagram className="text-rose-500 bg-zinc-200 rounded-full" />
                {user.instagram}
              </p>
            )}

            <p className="flex flex-row justify-center items-center gap-2">
              <AiOutlineMail className="text-violet-500 bg-zinc-200 rounded-full" />
              {user.email}
            </p>
            {user.youtube && (
              <p className="flex flex-row justify-center items-center gap-2">
                <AiOutlineYoutube className="text-red-500 bg-zinc-200 rounded-full" />
                {user.youtube}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProfile;
