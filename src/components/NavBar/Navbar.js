import React from "react";
import Profile from "../Profile";
import Search from "./Search";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-slate-100 z-10 rounded-lg shadow-sm px-2 w-full h-full">
      <div className="py-3 border-b-[1px] flex flex-row sm:justify-end md:justify-between lg:justify-between items-center">
        <span className="text-black lg:text-3xl md:text-xl hidden md:block sm:hidden font-bold pr-2">
          Dashboard
        </span>
        <div className="flex flex-row items-center justify-end lg:gap-3 md:gap-2 sm:gap-0">
          <Search />
          <AiOutlineBell className="text-black" size={24} />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
