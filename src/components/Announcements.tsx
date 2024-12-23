import React from "react";

export default function Announcements() {
  return (
    <div className=" Announcements bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer ">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="p-4 rounded-md bg-talaSkyLight">
          <div className=" flex items-center justify-between">
            <h2 className=" font-medium"> Lorem ipsum, dolor sit ami?</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perferendis inventore quia. Hic sit provident cumque? Autem nisi maiores nemo sed corrupti, tempora dolor, consequatur ab omnis nulla voluptatibus reprehenderit.</p>
        </div>
      </div>


      
      <div className="flex flex-col gap-4 mt-4">
        <div className="p-4 rounded-md bg-talaPurpleLight">
          <div className=" flex items-center justify-between">
            <h2 className=" font-medium"> Lorem ipsum, dolor sit ami?</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perferendis inventore quia. Hic sit provident cumque? Autem nisi maiores nemo sed corrupti, tempora dolor, consequatur ab omnis nulla voluptatibus reprehenderit.</p>
        </div>
      </div>


      
      <div className="flex flex-col gap-4 mt-4">
        <div className="p-4 rounded-md bg-talaYellowLight">
          <div className=" flex items-center justify-between">
            <h2 className=" font-medium"> Lorem ipsum, dolor sit ami?</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perferendis inventore quia. Hic sit provident cumque? Autem nisi maiores nemo sed corrupti, tempora dolor, consequatur ab omnis nulla voluptatibus reprehenderit.</p>
        </div>
      </div>


    </div>
  );
}
