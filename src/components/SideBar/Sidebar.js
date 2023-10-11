"use client";

import React from "react";

const Sidebar = () => {
  return (
    <div className="pl-4 pr-2 flex flex-col w-full">
      <div className="py-8 text-4xl font-bold cursor-pointer">Board.</div>
      <div className="py-4 text-xl cursor-pointer">Dashboard</div>
      <div className="py-4 text-xl cursor-pointer">Transactions</div>
      <div className="py-4 text-xl cursor-pointer">Schedules</div>
      <div className="py-4 text-xl cursor-pointer">Users</div>
      <div className="py-4 text-xl cursor-pointer">Settings</div>
    </div>
  );
};

export default Sidebar;
