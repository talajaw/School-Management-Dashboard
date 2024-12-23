import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import { GoSortDesc, GoPlus } from "react-icons/go";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import FormModal from "@/components/FormModal";

type Student= {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell ",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell ",
  },

  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell " },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell ",
  },
  { header: "Actions", accessor: "action" },
];

export default function StudentsListPage() {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b  border-gray-200 even:bg-slate-50 text-sm hover:bg-talaPurpleLight"
    >
      <td className=" flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className=" font-semibold">{item.name}</h3>
          <p className=" text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>

      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-talaSky">
              <FaRegEye className=" text-gray-100" />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 items-center justify-center  rounded-full bg-talaPurple">
            //   <FaTrashAlt className="text-gray-100 mx-auto " />
            // </button>
            <FormModal table="student" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="TeachersListPage bg-white p-4 rounded-md m-4 mt-0 flex-1 ">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">ALL Students</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-between gap-3 ">
            <button className="w-8 h-8 p-2 bg-talaYellow rounded-full hover:opacity-90">
              <VscSettings />
            </button>
            <button className="w-8 h-8 p-2 bg-talaYellow rounded-full hover:opacity-90">
              <GoSortDesc />
            </button>
            {role === "admin" && (
            //   <button className="w-8 h-8 p-2 bg-talaYellow rounded-full hover:opacity-90">
            //     <GoPlus />
            //   </button>
            <FormModal table="student"  type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <div className="flex items-center justify-between p-4 text-gray-500">
        <Pagination />
      </div>
    </div>
  );
}
