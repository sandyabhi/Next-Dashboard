"use client";

import React, { useEffect, useState } from "react";
import { Pie, Legend, PieChart } from "recharts";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products.slice(0, 3));
      setProducts(data.products.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function generateRandomColor() {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const data = products.map((prod, i) => {
    return { name: prod.title, value: prod.stock, fill: generateRandomColor() };
  });

  console.log(data);

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
    <div className="overflow-x-auto overflow-y-hidden lg:overflow-hidden md:overflow-hidden sm:overflow-x-auto pb-4 lg:w-[450px] md:w-[430px] sm:w-full h-[250px] rounded-md bg-white shadow-md">
      <div className="py-4 px-4 flex justify-between items-center text-black">
        <p className="font-bold">Top Products</p>
        <p className="text-xs text-gray-400">May-June 2021</p>
      </div>
      <div>
        <PieChart width={450} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={80}
            innerRadius={60}
            outerRadius={75}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          ></Pie>
          <Legend
            height={0}
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={10}
            padding={1}
            formatter={renderColorfulLegendText}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default TopProducts;
