import {
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../pages/AddModifyItem/helper/fileUpload";
import {
  clearActiveProduct,
  setImagenNewProduct,
  setNewProduct,
} from "./productoActivoSlice";

// *************************************************
// EMPEZAR CREACION DE UN NUEVO PRODUCTO
// *************************************************

// Aqui ingresan las variables de todos los datos que se quieren registrar del producto
// ya sea el titulo, precio, description.
export const startNewProduct = ({ title, precio, description }) => {
  return async (dispatch, getState) => {
    // const navigate = useNavigate()
    // Nos ayuda a recuperar el link de la imagen subida
    const { imagen } = getState().productoActivo;
    // Se destructura la variable data, en sus respectivas variables,
    dispatch(setNewProduct({ title, precio, description }));

    // En caso de que no suba ninguna imagen, por defecto se colocará esta
    const imagenNotFound =
      "https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg";

    // Al usar usa base de datos NoSql, tendremos que darle forma a los datos que nos ingresen, asi
    // creando un objeto para darle forma de JSON y poder registrarlo en nuestra bsae de datos NOSQL
    const newProduct = {
      title: title,
      precio: precio,
      description: description,
      imagen: imagen ?? imagenNotFound,
    };

    // Aqui mandaremos toda informacion del usuario hacia la base de datos en la ruta de los productos.
    const newDoc = doc(collection(FirebaseDB, `productos`));
    // Aqui se confirma que queros escribir en la base de datos.
    setDoc(newDoc, newProduct);
    // return navigate('/tienda')
    // return <Navigate to='/addModifyItem' />
  };
};

// *************************************************
// SUBIDA DE IMAGENES A CLOUDINARY
// *************************************************

// Funcion responsable de subir imagen a CLOUDINARY
export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    // se recibe una imagen con el nombre 'files'
    // esta nos dara un resultado, que llamaremos imagen, para luego
    // almacenarla en nuestro store centralizado
    const imagen = await fileUpload(files[0]);
    dispatch(setImagenNewProduct(imagen));
  };
};

// *************************************************
// BORRAR ITEM DE LA TIENDA
// *************************************************

export const deleteProductById = () => {
  return async (dispatch, getState) => {
    const { id } = getState().productoActivo;
    await deleteDoc(doc(FirebaseDB, `productos/${id}`));
    dispatch(clearActiveProduct());
    location.reload()
  };
};
