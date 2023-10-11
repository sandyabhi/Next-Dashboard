import React from "react";
import Card from "./Card";
import Activity from "./Activity";

const Main = () => {
  return (
    <div className="fixed w-3/4 bg-blue-200 z-1 shadow-sm pt-24 px-2">
      {/* Cards */}
      <div className="flex flex-row gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Activities */}
      <div className="pt-6">
        <Activity />
      </div>
    </div>
  );
};

export default Main;
