"use client";

import React, { useEffect, useState } from "react";
import { Pie, Legend, PieChart } from "recharts";

const PieChartProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const data = [
    { name: "Basic Tees", value: 400, fill: "#0088FE" },
    { name: "Short Pants", value: 300, fill: "#00C49F" },
    { name: "Hoodies", value: 200, fill: "#FFBB28" },
  ];

  const renderColorfulLegendText = (value, entry) => {
    return (
      <span
        style={{
          color: "#596579",
          fontWeight: 500,
          padding: "10px",
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="pb-4 lg:w-[350px] md:w-full h-[200px] rounded-md bg-white shadow-md">
      <div className="py-4 px-4 flex justify-between items-center text-black">
        <p className="font-bold">Top Products</p>
        <p className="text-xs text-gray-400">May-June 2021</p>
      </div>
      <div>
        <PieChart width={500} height={150}>
          <Pie
            data={data}
            cx={100}
            cy={60}
            innerRadius={50}
            outerRadius={65}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          ></Pie>
          <Legend
            height={0}
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            iconSize={10}
            padding={1}
            formatter={renderColorfulLegendText}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartProduct;
