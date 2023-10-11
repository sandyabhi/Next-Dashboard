import React from "react";
import { AiOutlineWallet } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-52 h-full text-black bg-white rounded-2xl shadow-md p-3">
      <div className="flex flex-col">
        <AiOutlineWallet
          className="bg-green-400 p-1 w-8 h-8 rounded-full text-white"
          size={24}
        />
      </div>
      <div className="pt-1">
        <div className="text-xs">Total Revenues</div>
        <div className="flex flex-row justify-between pt-1">
          <span className="text-md font-bold">$2,129,430</span>
          <span className="text-xs font-medium p-1 bg-green-100 rounded-xl text-green-500">
            +2.5%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
