import { configureStore } from "@reduxjs/toolkit";
import { authSlice, productoActivoSlice } from "@store";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    productoActivo: productoActivoSlice.reducer,
  },
});
