"use client";

const Card = ({ title, value, percent, icon }) => {
  return (
    <div className="w-60 h-full text-black bg-white rounded-2xl shadow-md p-3">
      <div className="flex flex-col">{icon}</div>
      <div className="pt-1">
        <div className="text-xs">Total {title}</div>
        <div className="flex flex-row justify-between pt-1">
          <span className="text-md font-bold">{value}</span>
          <span className="text-xs font-medium p-1 bg-green-100 rounded-xl text-green-500">
            +{percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
