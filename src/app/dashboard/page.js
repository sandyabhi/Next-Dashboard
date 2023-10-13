"use client";

import Main from "@/components/Dashboard/Main";
import Navbar from "@/components/NavBar/Navbar";
import Sidebar from "@/components/SideBar/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full h-full flex-row p-4  bg-sky-50">
      <Sidebar />
      <div className="lg:pl-4 md:pl-4 sm:pl-1 w-[100%] h-screen rounded-lg overflow-y-auto">
        <div className="flex flex-row w-full">
          <Navbar />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
