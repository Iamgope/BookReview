import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  refreshToken: null,
  account: null,
  // isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(state, action) {
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
      // state.isAuthenticated = true;
    },
    setAccount(state, action) {
      state.account = action.payload;
    },
    logout(state, action) {
      state.account = null;
      state.refreshToken = null;
      state.token = null;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
