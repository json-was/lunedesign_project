import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@store";
import { carritoSlice } from "./carrito/carritoSlice";
import { productoActivoSlice } from "./productos/productoActivoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    productoActivo: productoActivoSlice.reducer,
    carrito: carritoSlice.reducer,
  },
});
