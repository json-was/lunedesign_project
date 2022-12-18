import { createSlice } from "@reduxjs/toolkit";

export const productoActivoSlice = createSlice({
  name: "productoActivo",
  initialState: {
    id: null,
    title: null,
    description: null,
    precio: null,
    imagen: null,
    isLoading: false,
  },

  reducers: {
    setActiveProduct: (state, { payload }) => {
      state.id = payload.id;
      state.title = payload.title;
      state.description = payload.description;
      state.precio = payload.precio;
      state.imagen = payload.imagen;
    },
    clearActiveProduct: (state) => {
      state.id = null;
      state.title = null;
      state.description = null;
      state.precio = null;
      state.imagen = null;
      state.isLoading = false;
    },
    setImagenNewProduct: (state, { payload }) => {
      state.imagen = payload;
    },
    setNewProduct: (state, { payload }) => {
      state.id = payload.id;
      state.title = payload.title;
      state.description = payload.description;
      state.precio = payload.precio;
    },
    isLoadingImage: (state) => {
      state.isLoading = true;
    },
    isNotLoadingImage: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setActiveProduct,
  clearActiveProduct,
  setImagenNewProduct,
  setNewProduct,
  isLoadingImage,
  isNotLoadingImage,
} = productoActivoSlice.actions;
