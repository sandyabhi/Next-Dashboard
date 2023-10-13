"use client";

import React, { useState } from "react";
import {
  AiOutlinePieChart,
  AiOutlineCalendar,
  AiOutlineSetting,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GiHamburgerMenu
        className="md:flex sm:flex text-blue-500 rounded-full lg:invisible"
        onClick={() => setIsOpen(!isOpen)}
        size={24}
      />
      <div
        className={`bg-blue-500 pl-4 pr-2  flex-col h-screen rounded-lg overflow-y-auto
    ${
      isOpen
        ? `z-50 fixed flex sm:flex md:flex`
        : "w-1/5 md:hidden hidden lg:flex"
    }
    `}
      >
        <AiOutlineCloseCircle
          onClick={() => setIsOpen(!isOpen)}
          className={`text-white fixed left-4 top-4 lg:invisible md:flex sm:flex`}
          size={24}
        />
        <div className="flex flex-row">
          <span className="py-8 text-4xl font-bold cursor-pointer">Board.</span>
        </div>
        <div className={`flex flex-col justify-between h-full`}>
          <div>
            <p className="py-4 text-lg cursor-pointer flex flex-row gap-2 items-center">
              <AiOutlinePieChart />
              Dashboard
            </p>
            <p className="py-4 text-lg cursor-pointer flex flex-row gap-2 items-center">
              <BsTags />
              Transactions
            </p>
            <p className="py-4 text-lg cursor-pointer flex flex-row gap-2 items-center">
              <AiOutlineCalendar />
              Schedules
            </p>
            <p className="py-4 text-lg cursor-pointer flex flex-row gap-2 items-center">
              <FaRegUserCircle />
              Users
            </p>
            <p className="py-4 text-lg cursor-pointer flex flex-row gap-2 items-center">
              <AiOutlineSetting />
              Settings
            </p>
          </div>
          <div>
            <p className="py-2 text-xs cursor-pointer">Help</p>
            <p className="py-2 text-xs cursor-pointer">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
