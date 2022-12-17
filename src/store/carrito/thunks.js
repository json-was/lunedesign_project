// import {
//   arrayUnion,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore/lite";
// import { FirebaseDB } from "../../firebase/config";
// import { clearActiveProduct } from "../productos/productoActivoSlice";

// // *************************************************
// // EMPEZAR CREACION DE UN NUEVO PRODUCTO
// // *************************************************

// export const addCarrito = () => {
//   return async (dispatch, getState) => {
//     const { id,imagen, title, precio, description } = getState().productoActivo;
//     const { uid } = getState().auth;

//     const productCart = {
//       id,
//       title,
//       precio,
//       description,
//       imagen,
//     };
    
//     const newDoc = doc(FirebaseDB, `users/${uid}`);
//     // setDoc(newDoc, newItem);
//     await updateDoc(newDoc, {
//       productCart: arrayUnion(productCart),
//     });
//   };
// };

// // *************************************************
// // SUBIDA DE IMAGENES A CLOUDINARY
// // *************************************************

// export const deleteProductById = () => {
//   return async (dispatch, getState) => {
//     const { id } = getState().productoActivo;
//     await deleteDoc(doc(FirebaseDB, `productos/${id}`));
//     dispatch(clearActiveProduct());
//     location.reload()
//   };
// };
