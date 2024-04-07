import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./ImageSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    image: imageReducer,
    user: userReducer,
  },
});