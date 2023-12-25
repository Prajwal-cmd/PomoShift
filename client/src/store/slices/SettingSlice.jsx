import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingbtn: true,
  play: true,
  time: 1500,
  workTime: 1500,
  restTime: 300,
  work: true,
  iteration: 1,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setPlay(state, action) {
      return {
        ...state,
        play: action.payload,
      };
    },
    setSettingBtn(state, action) {
      return {
        ...state,
        settingbtn: action.payload,
      };
    },
    setTime(state, action) {
      return {
        ...state,
        time: action.payload,
      };
    },
    setWorkTime(state, action) {
      return {
        ...state,
        workTime: action.payload,
      };
    },
    setRestTime(state, action) {
      return {
        ...state,
        restTime: action.payload,
      };
    },
    setWork(state, action) {
      return {
        ...state,
        work: action.payload,
      };
    },
    setIteration(state, action) {
      return {
        ...state,
        iteration: action.payload,
      };
    },
  },
});

export default settingSlice.reducer;
export const {
  setPlay,
  setSettingBtn,
  setTime,
  setWorkTime,
  setRestTime,
  setWork,
  setIteration,
} = settingSlice.actions;
