import React, { useEffect, useRef, useState } from "react";
import Timer from "../components/Timer";
import SettingBtn from "../components/settingBtn";
import InputPomo from "../components/InputPomo";
import { useDispatch, useSelector } from "react-redux";
import { setIteration, setPlay, setTime,setWork } from "../store/slices/SettingSlice";

function Pomodromo() {
  const time = useSelector((state) => state.setting.time);
  const timeRef = useRef(time);

  const isplay = useSelector((state) => state.setting.play);
  const work = useSelector((state) => state.setting.work);
  const restTime = useSelector((state) => state.setting.restTime);
  const workTime = useSelector((state) => state.setting.workTime);
  const iteration = useSelector((state) => state.setting.iteration);
  const iterationRef = useRef(iteration);





  useEffect(() => {
    timeRef.current = time; // Update the value in the ref when time changes
    iterationRef.current=iteration
  }, [time]);
  useEffect(() => {
    if (!isplay && timeRef.current > 0) {
      const interval = setInterval(() => {
        dispatch(setTime(timeRef.current - 1));
      }, 1000);
      return () => clearInterval(interval);
    } else if(timeRef.current <= 0 && iteration){
      if(work){
        dispatch(setWork(false));
        dispatch(setTime(restTime))
        
      }else {
        dispatch(setWork(true));
        dispatch(setTime(workTime))
        dispatch(setIteration(iterationRef.current-1))
      }
    }
  }, [time, isplay]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  };

  const dispatch = useDispatch();
  const setPlaybtn = () => {
    dispatch(setPlay(!isplay));
  };

  const issettingbtn = useSelector((state) => state.setting.settingbtn);

  return (
    <div
      id="drill_cursor"
      className=" h-dvh w-dvw flex flex-col justify-center items-center gap-4 bg-slate-900"
    >
    {(iterationRef.current && !work )&& <div className="h-7 w-36 font-bold text-center absolute top-0 bg-white text-[#ea580c] z-50">
      <span>Iterations left : </span>{iterationRef.current}
    </div>}
      {(!work || isplay)?(<div
        className=" w-full sm:w-1/2 h-55 text-[#ea580c] font-medium text-center	text-6xl md:text-9xl z-20  border-double border-4	 	absolute top-3 "
        onClick={setPlaybtn}
      >
        {getTime(time)}
      </div>):(<div
  className="w-full h-dvh text-white font-medium text-9xl z-20 flex items-center justify-center fixed backdrop-blur-md"
        onClick={setPlaybtn}
      >
        {getTime(time)}
      </div>)}
      <Timer />
      {issettingbtn ? <SettingBtn /> : <InputPomo />}
    </div>
  );
}

export default Pomodromo;
