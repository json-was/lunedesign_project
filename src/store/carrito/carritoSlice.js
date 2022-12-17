// import { createSlice } from "@reduxjs/toolkit";

// export const carritoSlice = createSlice({
//   name: "carrito",
//   initialState: {
//     isPaying: "checking", // 'paying' | 'not-paying'
//     productCart: [],
//     precioTotal: 0,
//   },

//   reducers: {
//     checkingPaying: (state) => {
//       state.isPaying = "checking";
//     },
//     payingProducts: (state) => {
//       state.isPaying = "paying";
//     },
//     clearCarrito: (state) => {
//       state.isPaying = "not-paying";
//       state.productCart = null;
//     },
//     updateCarrito: (state, { payload }) => {
//       state.productCart = [...state.productCart, payload];
//     },
//     setPrecio: (state, { payload }) => {
//       state.precioTotal = payload;
//     },
//     deleteProduct: (state, { payload }) => {
//       state.productCart = state.productCart.filter(
//         (product) => product.id !== payload.id
//       );
//     },
//   },
// });

// export const {
//   payingProducts,
//   clearCarrito,
//   updateCarrito,
//   setPrecio,
//   deleteProduct,
// } = carritoSlice.actions;
