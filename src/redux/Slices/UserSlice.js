import { createAction, createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:'user',
  initialState:{value:{number:null}},
  reducers:{
    increment:(state,action)=>{
      state.value.number=action.payload
    },
    decrement:(state,action)=>{
      state=action.payload
    }
  }
})
export const {increment}=userSlice.actions;
export const {decrement}=userSlice.actions;
export default userSlice.reducer