import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

export default function Head() {
  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold">TODO LIST</h1>
      <div className="w-3/5 m-auto mt-8 flex justify-between">
        <button className="bg-btntask text-white px-5 py-2 rounded-lg">
          Add task
        </button>
        <select name="1" id="status" className="bg-gray rounded-lg px-5 py-2">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </select>
      </div>
      <div className="bg-lightgray rounded-lg w-3/5 m-auto mt-5 flex justify-center items-center flex-col p-5 gap-4">
        <div className="w-full bg-white rounded-lg flex justify-between">
          <div className="m-2 h-10 flex items-center ml-3">
            <input type="checkbox" />
            <div className="flex flex-col ml-3">
              <label>go to shoppping center</label>
              <label>7:09 PM, 02/08/2023</label>
            </div>
          </div>
          <div className="flex justify-center gap-2 m-1 items-center mr-3">
            <button className="w-7 h-7 bg-insidegray flex justify-center items-center rounded-sm hover:bg-gray">
              <AiTwotoneDelete color="#585858" size="17" />
            </button>
            <button className="w-7 h-7 bg-insidegray flex justify-center items-center rounded-sm">
              <CiEdit color="#585858" size="17" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
