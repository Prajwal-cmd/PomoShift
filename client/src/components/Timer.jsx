import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../components/Button";
import PlayBtn from "./PlayBtn";
import PauseBtn from "./pauseBtn";
import { useSelector } from "react-redux";
import { setPlay } from "../store/slices/SettingSlice";


function Timer() {
  const isplay = useSelector((state)=>state.setting.play)
  const time = useSelector((state)=>state.setting.time)
  const work = useSelector((state)=>state.setting.work)
  const workTime = useSelector((state)=>state.setting.workTime)
  const restTime = useSelector((state)=>state.setting.restTime)

  const percentageRef = useRef(0); // Create a ref to store percentage
 let pathColorRef = useRef(`rgba(0, 167, 228, ${percentageRef.current / 100})`)
  useEffect(() => {
    if (work) {
      percentageRef.current = Math.floor((time / workTime)*100); // Update ref's value
      
      pathColorRef.current=`rgba(0, 167, 228, ${percentageRef.current / 100})`
    } else{
      percentageRef.current = Math.floor((time / restTime)*100)
      pathColorRef.current=`rgba(242, 138, 34, ${percentageRef.current / 100})`
    }
    
  }, [time, work]);

  return (
    <div className="  flex flx-row ">
      <div className=" m-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  " style={{ width: 200, height: 200 }}>
        <CircularProgressbar
         value={percentageRef.current} 
         text={`${percentageRef.current}%`} 
         styles={buildStyles({
          pathColor: pathColorRef.current
         })}
         />;
      </div>

      {!isplay ? <PauseBtn /> : <PlayBtn />}
    </div>
  );
}

export default Timer;
