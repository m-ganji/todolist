import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { getTaskButtonSituation } from "../redux/handling";
import { useDispatch } from "react-redux";
import PopupTaskButton from "./PopupTaskButton";
import { useSelector } from "react-redux";

export default function Head() {
  const task = [];
  const [buttonTask, setButtonTask] = useState(false);
  const dispatch = useDispatch();
  dispatch(getTaskButtonSituation(buttonTask));

  const typedtask = useSelector((state) => state.handling.typedtask);

  // let todoList = [];
  // for (let i = 0; i < todoList.length; i++) {
  //   let li = document.createElement("li");
  //   li.innerText = todoList[i];
  //   todoListElement.appendChild(li);
  // }

  return (
    <div className="w-full">
      <h1 className="text-6xl font-bold">TODO LIST</h1>
      <div className="w-3/5 m-auto mt-8 flex justify-between">
        <PopupTaskButton />
        <select name="1" id="status" className="bg-gray rounded-lg px-5 py-2">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </select>
      </div>
      {task.length == 0 && (
        <div className="bg-lightgray rounded-lg w-3/5 m-auto mt-5 flex justify-center items-center flex-col p-5 gap-4">
          <div className="w-1/4 bg-gray2 rounded-lg flex justify-center">
            <div className="flex justify-center gap-2 m-1 items-center mr-3">
              <p className="m-auto">No Todos</p>
            </div>
          </div>
          {buttonTask && <PopupTaskButton />}
        </div>
      )}
      {task.length > 0 &&
        task.map((todo, index) => (
          <div
            className="bg-lightgray rounded-lg w-3/5 m-auto mt-5 flex justify-center items-center flex-col p-5 gap-4"
            key={index}
          >
            <div className="w-full bg-white rounded-lg flex justify-between">
              <div className="m-2 h-10 flex items-center ml-3">
                <input type="checkbox" />
                <div className="flex flex-col ml-3">
                  <label>{todo.title}</label>
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
        ))()}
    </div>
  );
}
