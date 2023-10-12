"use client";

import Main from "@/components/Charts/Main";
import Navbar from "@/components/NavBar/Navbar";
import Sidebar from "@/components/SideBar/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container flex flex-row p-0 m-0">
      <Sidebar />

      <div className="w-full h-full flex-grow">
        {/* <Navbar /> */}
        {/* <div className="bg-sky-100 p-24"> */}
        <Main />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
