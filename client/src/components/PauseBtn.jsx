import React from "react";
import { useDispatch } from "react-redux";
import { setPlay } from "../store/slices/SettingSlice";

function PauseBtn() {
  const dispatch = useDispatch()
  const setPlaybtn=()=>{
    dispatch(setPlay(true))
  }

  return (
    <button className=" w-20 flex justify-center items-center "
    onClick={setPlaybtn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 dark:bg-gradient-to-r from-cyan-500 to-blue-500  dark:rounded-full hover:opacity-80  "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
}

export default PauseBtn;
