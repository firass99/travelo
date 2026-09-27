import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = { isAuth: false, email: null, role: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    deleteAuth(state) {
      state.isAuth = false;
      state.email = null;
      state.role = null;
    },
  },
});
export const { setAuth, deleteAuth } = authSlice.actions;
export default authSlice.reducer;
