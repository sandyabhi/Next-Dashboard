"use client";

// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Activity = () => {
  // const data = {
  //   labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  //   datasets: [
  //     {
  //       label: "Guest",
  //       data: [91, 20, 10, 200],
  //       borderRadius: 8,
  //       backgroundColor: "green",
  //       barThickness: 25,
  //     },
  //     {
  //       label: "User",
  //       data: [153, 200, 103, 240],
  //       borderRadius: 8,
  //       backgroundColor: "red",
  //       barThickness: 25,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: {
  //       position: "top",
  //       align: "end",
  //       labels: {
  //         boxWidth: 7,
  //         usePointStyle: true,
  //         pointStyle: "circle",
  //       },
  //       title: {
  //         text: "Activities",
  //         display: true,
  //         color: "#000",
  //         font: {
  //           size: 18,
  //         },
  //       },
  //     },
  //   },
  //   scales: {
  //     yAxis: {
  //       min: 0,
  //       max: 500,
  //     },
  //     xAxis: {
  //       display: false,
  //     },
  //   },
  //   elements: {
  //     bar: {
  //       // barPercentage: 0.3,
  //       // categoryPercentage: 1,
  //     },
  //   },
  // };

  const data = [
    { name: "Week 1", User: 400, Guest: 240 },
    { name: "Week 2", User: 300, Guest: 139 },
    { name: "Week 3", User: 220, Guest: 200 },
    { name: "Week 4", User: 100, Guest: 180 },
  ];
  return (
    <div className="text-black lg:w-full md:w-400px bg-white rounded-lg shadow-md p-5 overflow-x-auto">
      <div>
        <p className="font-bold">Activities</p>
        <p className="text-xs text-gray-400">May-June 2021</p>
      </div>
      <div>
        <BarChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            height={0}
            width={1200}
            iconType="circle"
            layout="horizontal"
            verticalAlign="end"
          />
          <Bar dataKey="User" fill="#8884d8" />
          <Bar dataKey="Guest" fill="#82ca9d" />
        </BarChart>
      </div>
      {/* <Bar data={data} height={100} width={500} options={options} /> */}
    </div>
  );
};

export default Activity;
