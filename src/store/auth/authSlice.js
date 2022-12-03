import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // checking, not-authenticated, authenticated
    uid: null,
    email: null,
    name: null,
    direccion: null,
    numberPhone: null,
    rol: null,
    errorMessage: null,
  },

  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; // checking, not-authenticated, authenticated
      state.uid = payload.uid;
      state.email = payload.email;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // checking, not-authenticated, authenticated
      state.uid = null;
      state.email = null;
      state.name = null;
      state.direccion = null;
      state.numberPhone = null;
      state.rol = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    setDatos: (state, { payload }) => {
      state.name = payload.name;
      state.direccion = payload.direccion;
      state.numberPhone = payload.numberPhone;
      state.rol = payload.rol;
    },
  },
});

export const { login, logout, checkingCredentials, setDatos } =
  authSlice.actions;
