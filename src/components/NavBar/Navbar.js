import React from "react";
import Profile from "../Profile";
import Search from "./Search";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-3/4 bg-blue-200 z-10 shadow-sm px-2">
      <div className="py-3 border-b-[1px] flex flex-row justify-between">
        <span className="text-black text-3xl font-bold pr-2">Dashboard</span>
        <div className="flex flex-row items-center justify-end lg:gap-3 md:gap-0">
          {/* <Logo />
            <Search />
            <UserMenu currentUser={currentUser} /> */}
          <Search />
          <AiOutlineBell className="text-black" size={24} />
          <Profile />
        </div>
        {/* </Container> */}
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Navbar;
