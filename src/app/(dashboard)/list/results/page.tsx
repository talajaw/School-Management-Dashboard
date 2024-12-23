import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import { GoSortDesc, GoPlus } from "react-icons/go";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, resultsData } from "@/lib/data";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import FormModal from "@/components/FormModal";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell ",
  },

  {
    header: "Date",
    accessor: "duedate",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

export default function ResultListPage() {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b  border-gray-200 even:bg-slate-50 text-sm hover:bg-talaPurpleLight"
    >
      <td className=" flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className=" flex items-center gap-4 p-4">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-talaSky">
              <FaRegEdit className=" text-gray-100" />
            </button>
          </Link> */}
          {role === "admin" && (
            <>
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
            </>

            // <button className="w-7 h-7 items-center justify-center  rounded-full bg-talaPurple">
            //   <FaTrashAlt className="text-gray-100 mx-auto " />
            // </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="TeachersListPage bg-white p-4 rounded-md m-4 mt-0 flex-1 ">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">ALL Results</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-between gap-3 ">
            <button className="p-2 bg-talaYellow rounded-full hover:opacity-90">
              <VscSettings />
            </button>
            <button className="p-2 bg-talaYellow rounded-full hover:opacity-90">
              <GoSortDesc />
            </button>
            {role === "admin" && (
              <FormModal table="result" type="create" />
              //   <button className="p-2 bg-talaYellow rounded-full hover:opacity-90">
              //     <GoPlus />
              //   </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* PAGINATION */}
      <div className="flex items-center justify-between p-4 text-gray-500">
        <Pagination />
      </div>
    </div>
  );
}
