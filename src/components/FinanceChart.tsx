"use client";

import React from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Mar",
    income: 4200,
    expense: 2200,
  },
  {
    name: "Apr",
    income: 4000,
    expense: 2400,
  },
  {
    name: "May",
    income: 2990,
    expense: 2200,
  },
  {
    name: "Jun",
    income: 2000,
    expense: 2400,
  },
  {
    name: "Jul",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Aug",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Sep",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Oct",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Nov",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceChart() {
  return (
    <div className="FinanceChart bg-white rounded-lg p-4 h-full ">
      <div className="flex justify-between items-center">
        <h1 className=" text-lg font-semibold">FinanceChart</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className=" cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#CFEEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
