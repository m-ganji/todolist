import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { getTypedTask } from "../redux/handling";

export default function PopupTaskButton() {
  const dispatch = useDispatch();

  const taskButtonSituation = useSelector(
    (state) => state.handling.taskButtonSituation
  );

  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log("value is:", event.target.value);
    dispatch(getTypedTask(event.target.value));
  };

  return (
    <Popup
      trigger={
        <button
          className="bg-btntask text-white px-5 py-2 rounded-lg"
          onClick={() => setButtonTask(!buttonTask)}
        >
          Add task
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-lightgray p-3">
          <button className="close" onClick={close}>
            &times;
          </button>
          <h1 className="ml-1 text-black1">Add Todo</h1>
          <div className="content flex flex-col w-full">
            <label className="flex flex-col">
              <p className="mb-2 text-black2">Title</p>
              <input
                type="text"
                id="title"
                className="h-8"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              <p className="mb-2 mt-2 text-black2">Status</p>
              <select name="1" id="status" className="h-8 text-black1">
                \ <option value="incomplete">Incomplete</option>
                <option value="complete">Completed</option>
              </select>
            </label>
          </div>
          <div className="actions flex gap-3 ">
            <button
              type="submit"
              className="bg-btntask text-white p-2 rounded-sm mt-2"
              onClick={() => {
                close();
              }}
            >
              Add Task
            </button>
            <button
              className="button bg-gray p-2 rounded-sm mt-2"
              onClick={() => {
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
