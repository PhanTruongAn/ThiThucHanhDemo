import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import userReducer from "./userSlice";
import jobReducer from "./jobSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});

export default store;
