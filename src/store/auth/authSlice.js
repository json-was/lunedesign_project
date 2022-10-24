import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    direccion: null,
    numberPhone: null,
    errorMessage: null,
  },

  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; // checking, not-authenticated, authenticated
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.direccion = payload.direccion;
      state.numberPhone = payload.numberPhone;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // checking, not-authenticated, authenticated
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.direccion = null;
      state.numberPhone = null;
      state.errorMessage = payload?.errorMessage;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
