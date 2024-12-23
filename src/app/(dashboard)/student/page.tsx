import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

export default function StudentPage() {
  return (
    <div className="StudentPage p-2 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold text-xl">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
}
