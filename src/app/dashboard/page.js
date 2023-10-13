"use client";

import Main from "@/components/Charts/Main";
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
          {/* <div className="flex flex-row bg-orange-200 w-full"></div> */}
        </div>
        {/* <div className="bg-pink-500 w-full h-full">dawd</div> */}
        <Main />
      </div>
    </div>
    // <div className="container flex flex-row p-0 m-0">
    //   <Sidebar />

    //   <div className="w-full h-full flex-grow">
    //     {/* <Navbar /> */}
    //     {/* <div className="bg-sky-100 p-24"> */}
    //     <Main />
    //     {/* </div> */}
    //   </div>
    // </div>
  );
};

export default Dashboard;
