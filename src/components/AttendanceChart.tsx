"use client";

import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 70,
    absent: 60,
  },
  {
    name: "Tue",
    present: 90,
    absent: 75,
  },
  {
    name: "Wed",
    present: 40,
    absent: 60,
  },
  {
    name: "Thu",
    present: 70,
    absent: 60,
  },
  {
    name: "Fri",
    present: 55,
    absent: 65,
  },
];

export default function AttendanceChart() {
  return (
    <div className="AttendanceChart bg-white rounded-lg p-4 h-full ">
      <div className="flex justify-between items-center">
        <h1 className=" text-lg font-semibold">AttendanceChart</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className=" cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3E8FA"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
