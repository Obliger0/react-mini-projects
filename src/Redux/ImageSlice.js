import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: [],
  reducers: {
    setImage : (image,action)=>{
        image.push(action.payload);
        return image;
    }
  },
});

export const { setImage } = imageSlice.actions;

export default imageSlice.reducer;
