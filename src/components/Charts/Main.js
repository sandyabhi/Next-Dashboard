"use client";

import React, { useState } from "react";
import Card from "./Card";
import Activity from "./Activity";
// import PieChart from "./PieChartProduct";
import PieChartProduct from "./PieChartProduct";
import AddProfile from "./AddProfile";
import AddUserModal from "../Modal/AddUserModal";
import { AiOutlineWallet, AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsTags } from "react-icons/bs";

const Main = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  return (
    <div className="bg-slate-100 rounded-lg shadow-sm pt-5 px-4 w-full pb-8">
      {/* Cards */}
      <div className="flex gap-4 flex-wrap md:justify-center md:items-center lg:justify-start">
        <Card
          title="Revenues"
          value="$2,129,430"
          percent="2.5"
          icon={
            <AiOutlineWallet className="bg-green-400 p-1 w-8 h-8 rounded-full text-white" />
          }
        />
        <Card
          title="Transactions"
          value="1,520"
          percent="1.7"
          icon={
            <BsTags className="bg-yellow-500  p-1 w-8 h-8 rounded-full text-white" />
          }
        />
        <Card
          title="Likes"
          value="9,721"
          percent="1.4"
          icon={
            <AiOutlineLike className="bg-pink-400 p-1 w-8 h-8 rounded-full text-white" />
          }
        />
        <Card
          title="Users"
          value="9,721"
          percent="4.2"
          icon={
            <FiUsers className="bg-violet-400 p-1 w-8 h-8 rounded-full text-white" />
          }
        />
      </div>

      {/* Activities */}
      <div className="pt-8 h-full">
        <div className="">
          <Activity />
        </div>
        <div className="pt-8 flex flex-wrap w-full gap-4">
          <PieChartProduct />

          <AddProfile
            visible={visible}
            setVisible={setVisible}
            setUser={setUser}
            user={user}
          />

          {visible && (
            <AddUserModal
              setVisible={setVisible}
              setUser={setUser}
              user={user}
            />
          )}
          {/* <AddProfile /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
