import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setSettingBtn ,setTime,setWorkTime,setRestTime,setIteration} from "../store/slices/SettingSlice";

function InputPomo() {
  const dispatch = useDispatch()
  const workTime = useSelector((state)=>state.setting.workTime)
  const restTime = useSelector((state)=>state.setting.restTime)
  const iteration = useSelector((state)=>state.setting.iteration)


  const hideInput=(ev)=>{
    ev.preventDefault()
    dispatch(setTime(curwork*60))
    dispatch(setWorkTime(curwork*60))
    dispatch(setRestTime(currest*60))
    dispatch(setIteration(ciriteration))
    dispatch(setSettingBtn(true))
  }

  const [curwork, setCurWork] = useState(25);
  const [currest, setCurRest] = useState(5);
  const [ciriteration, setCurIteration] = useState(iteration);
  return (
    <div className=" w-1/2 md:max-w-60	 p-4 rounded-lg border border-blue-200	bg-slate-900 z-50">
      <form className="flex flex-col  gap-4 ">
        <label className='inline-block mb-1 pl-1 flex flex-col text-blue-200' >
          Work Minutes :
          <input 
            type="number"
            placeholder="Work minutes"
            value={curwork}
            onChange={(e) => setCurWork(e.target.value)}
            className="  px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200  ml-4"
          />
        </label>

        <label className='inline-block mb-1 pl-1 flex flex-col text-blue-200' >
          Rest Minutes :
          <input
            type="number"
            placeholder="Rest minutes"
            value={currest}
            onChange={(e) => setCurRest(e.target.value)}
            className=" px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ml-4"
          />
        </label>

        <label className='inline-block mb-1 pl-1 flex flex-col text-blue-200' >
         Iterations :
          <input
            type="number"
            placeholder="iterations"
            value={ciriteration}
            onChange={(e) => setCurIteration(e.target.value)}
            className=" px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ml-4"
          />
        </label>

        <button className="w-1/5 h-1/5 bg-blue-200 text-black rounded-md self-center "
        onClick={(ev)=>hideInput(ev)}
        >
            SET
        </button>
      </form>
    </div>
  );
}

export default InputPomo;
