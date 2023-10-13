"use client";

import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Activity = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products.slice(0, 5));
      setProducts(data.products.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const data = products.map((prod, i) => {
    return {
      name: "Week " + (i + 1),
      User: prod.stock + 300,
      Guest: prod.stock + 200,
    };
  });

  console.log(data);

  return (
    <div className="text-black lg:w-full md:w-400px bg-white rounded-lg shadow-md p-5 overflow-x-auto">
      <div>
        <p className="font-bold">Activities</p>
        <p className="text-xs text-gray-400">May-June 2021</p>
      </div>
      <div>
        <BarChart width={1000} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            height={36}
            width={0}
            align="right"
            iconType="circle"
            layout="horizontal"
            verticalAlign="top"
          />
          <Bar dataKey="User" fill="#98D89E" barSize={40} />
          <Bar dataKey="Guest" fill="#EE8484" barSize={40} />
        </BarChart>
      </div>
      {/* <Bar data={data} height={100} width={500} options={options} /> */}
    </div>
  );
};

export default Activity;
