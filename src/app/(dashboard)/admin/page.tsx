import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

export default function AdminPage() {
  return (
    <div className="AdminPage  p-2 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className=" gap-4 flex justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            {" "}
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
          
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className=" w-full h-[500px]"> <FinanceChart/></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3  flex flex-col gap-8">
      <EventCalendar/>
      <Announcements/>
      </div>
    </div>
  );
}
