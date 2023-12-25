import {configureStore} from "@reduxjs/toolkit"
import settingSlice from "./slices/SettingSlice"


const store = configureStore({
    reducer:{
        setting:settingSlice
    }
})


export default store 