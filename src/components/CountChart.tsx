"use client";

import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Toltal",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3E8FA",
  },
];

export default function CountChart() {
    return (
  <div className="CountChart bg-white rounded-xl w-full h-full p-4">
    {/* TITLE */}
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Students</h1>
      <Image src="/moreDark.png" alt="" width={20} height={20} className="  cursor-pointer" />
    </div>
    {/* CHART */}
    <div className="w-full h-[75%] relative">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src='/maleFemale.png' alt="" width={50} height={50} className=" absolute top-[45%] left-1/2 -translate-x-1/2 -tanslate-y-1/2"  />
    </div>

    {/* BOTTOM */}
    <div className="flex justify-center gap-16">
      <div className="flex flex-col gap-1">
        <div className="w-5 h-5 bg-talaSky rounded-full"></div>
        <h1 className="font-bold"> 1,234</h1>
        <h2 className=" text-xs text-gray-300">Boys (55%)</h2>
      </div>
      <div className="flex flex-col gap-1">
        <div className="w-5 h-5 bg-talaYellow rounded-full"></div>
        <h1 className="font-bold"> 1,234</h1>
        <h2 className=" text-xs text-gray-300">Girls (45%)</h2>
      </div>
    </div>
  </div>
    );
}