import { createSlice } from "@reduxjs/toolkit";
import { authLoginAction, registerAction } from "../services/auth.services";

const initialState = {
  loading: false,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLoginAction.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(authLoginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      }),
      builder.addCase(authLoginAction.rejected, (state) => {
        state.loading = false;
      }),
      builder.addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      }),
      builder.addCase(registerAction.rejected, (state) => {
        state.loading = false;
      }),
      builder.addCase(registerAction.pending, (state) => {
        state.loading = true;
      })
  },
});

export default authSlice.reducer;
