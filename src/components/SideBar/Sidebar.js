"use client";

import React from "react";
import {
  AiOutlinePieChart,
  AiOutlineCalendar,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-blue-500 pl-4 pr-2 flex flex-col w-1/5 h-screen rounded-2xl">
      <p className="py-8 text-4xl font-bold cursor-pointer">Board.</p>
      <div className="flex flex-col justify-between h-full">
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
  );
};

export default Sidebar;
