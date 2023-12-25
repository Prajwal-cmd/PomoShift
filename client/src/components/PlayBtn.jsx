import React from "react";
import { useDispatch } from "react-redux";
import { setPlay } from "../store/slices/SettingSlice";

function PlayBtn() {
  const dispatch = useDispatch()
  const setPlaybtn=()=>{
    dispatch(setPlay(false))
  }

  return (
    <button  className=" w-20 flex justify-center items-center "
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
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
        />
      </svg>
    </button>
  );
}

export default PlayBtn;
