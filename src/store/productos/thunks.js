import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../pages/AddModifyItem/helper/fileUpload";
import { clearActiveProduct, setImagenNewProduct, setNewProduct } from "./productoActivoSlice";

// *************************************************
// CHECKING CREDENCIALES
// *************************************************

export const startNewProduct = ({ title, precio, description }) => {
  return async (dispatch, getState) => {
    // dispatch(savingNewProduct());
    const {imagen} = getState().productoActivo;
    dispatch(setNewProduct({ title, precio, description }))

    const imagenNotFound = 'https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg'

    const newProduct = {
      title: title,
      precio: precio,
      description: description,
      imagen: imagen ?? imagenNotFound,
    };

    console.log(newProduct);
    // console.log(imagen);


    const newDoc = doc(collection(FirebaseDB, `productos`));
    setDoc(newDoc, newProduct);
    // dispatch(setActiveProduct(newProduct))
    // dispatch(addNewEmptyProduct(newProduct))

  };
};

// *************************************************
// SUBIDA DE IMAGENES A CLOUDINARY
// *************************************************

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    // fileUpload(files[0]);
    const imagen = await fileUpload(files[0]);
    // const fileUploadPromises = [];
    // for (const file of files) {
    //   fileUploadPromises.push(fileUpload(file));
    // }
    // const photoUrls = await Promise.all(fileUploadPromises);
    // dispatch(setPhotosToActiveProduct(photoUrls));
    dispatch(setImagenNewProduct(imagen))
    console.log(imagen);
    // console.log(files);
  };
};

// *************************************************
// SUBIDA DE IMAGENES A CLOUDINARY
// *************************************************

export const deleteProductById = () => {
  return async (dispatch, getState) => {

    const {id} = getState().productoActivo
    await deleteDoc(doc(FirebaseDB, `productos/${id}`));
    dispatch(clearActiveProduct())
  };
};