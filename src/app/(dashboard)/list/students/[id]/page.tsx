import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdBloodtype,
  MdDateRange,
  MdEmail,
  MdLocalPhone,
} from "react-icons/md";

export default function SingleStudentpage() {
  return (
    <div className="flex p-4 gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3  ">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto">
          {/* USER INFO CARD */}
          <div className="bg-talaSky py-6 px-4 items-center mx-auto  rounded-md flex-col  flex- flex gap-4 h-auto">
            <div className="w-full lg:w-[50%]  ">
              <Image
                src="https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover flex  items-center mx-auto "
              />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col  justify-between gap-4 sm:h-[200px]  md:py-4  lg:py-6 ">
              <h1 className="text-xl text-center font-semibold">
                Zahraa Walni
              </h1>
              <p className=" text-sm text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex flex-wrap items-center  justify-between px-6 gap-2  text-xs font-medium ">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <MdBloodtype className="w-4 h-4" />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-[70%] flex items-center gap-2">
                  <MdDateRange className="w-4 h-4" />
                  <span>January 2025</span>
                </div>

                <div className="w-full md:w-[65%] flex items-center gap-2">
                  <MdEmail className="w-4 h-4  " />
                  <span>sandrah@hotmail.com</span>
                </div>

                <div className="w-full md:w-1/3 2xl:w-[70%] lg:w-full  flex items-center gap-2 ">
                  <MdLocalPhone className="w-4 h-4" />
                  <span>0985463258</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex flex-wrap justify-between gap-4">
            {/* CARD */}
            <div className=" bg-slate-50 p-4 rounded-md flex- gap-4 w-full md:w-[48%] lg:w-full   2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className=" ">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm  text-gray-400">Attendance</span>
              </div>
            </div>

            {/* CARD */}
            <div className=" bg-slate-50  p-4 rounded-md flex- gap-4 w-full md:w-[48%] lg:w-full  2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            {/* CARD */}
            <div className=" bg-slate-50  p-4 rounded-md flex- gap-4 w-full md:w-[48%] lg:w-full   2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-slate-50  p-4 rounded-md flex- gap-4 w-full md:w-[48%] lg:w-full  2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-slate-50 rounded-md p-4 h-[800px]">
          <h1 className="">Student's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-slate-50 rounded-md p-6 ">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link className="p-3 rounded-md  bg-talaSkyLight" href="/">
            Student's Results
            </Link>
            <Link className="p-3 rounded-md bg-talaPurpleLight " href="/">
            Student's Teachers
            </Link>
            <Link className="p-3 rounded-md bg-talaYellowLight " href="/">
            Student's Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50 " href="/">
            Student's Exams
            </Link>
            <Link className="p-3 rounded-md bg-talaSkyLight " href="/">
            Student's Assignments
            </Link>
          </div>
        </div>
        <Performance/>
        <Announcements/>
      </div>
    </div>
  );
}
