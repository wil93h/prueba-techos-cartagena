import { configureStore } from "@reduxjs/toolkit";
import  userSliceReducer  from "./slice/user";

export default configureStore({
    reducer: {
        user: userSliceReducer
    }
})