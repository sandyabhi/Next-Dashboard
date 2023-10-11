"use client";

import Main from "@/components/Charts/Main";
import Navbar from "@/components/NavBar/Navbar";
import Sidebar from "@/components/SideBar/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-row">
      <div className="w-1/4 h-screen bg-blue-500 rounded-[15px]">
        <Sidebar />
      </div>
      <div w-full h-screen pt>
        <Navbar />
        {/* <div className="bg-sky-100 p-24"> */}
        <Main />
        {/* </div> */}
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
