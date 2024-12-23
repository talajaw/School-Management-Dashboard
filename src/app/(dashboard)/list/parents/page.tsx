import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import { GoSortDesc, GoPlus } from "react-icons/go";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, parentsData } from "@/lib/data";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import FormModal from "@/components/FormModal";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Name",
    accessor: "students",
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

export default function ParentssListPage() {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b  border-gray-200 even:bg-slate-50 text-sm hover:bg-talaPurpleLight"
    >
      <td className=" flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className=" font-semibold">{item.name}</h3>
          <p className=" text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-talaSky">
              <FaRegEdit className=" text-gray-100" />
            </button>
                  
          </Link> */}
          {role === "admin" && (
            <>
             <FormModal table="parent" type="update" data={item}/>
             <FormModal table="parent" type="delete" id={item.id}/>
            
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
        <h1 className="hidden md:block text-lg font-semibold">ALL Parents</h1>
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
            //   <button className="p-2 bg-talaYellow rounded-full hover:opacity-90">
            //     <GoPlus />
            //   </button>
            <FormModal table="parent" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <div className="flex items-center justify-between p-4 text-gray-500">
        <Pagination />
      </div>
    </div>
  );
}
