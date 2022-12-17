import { checkingCredentials, login, logout } from "@store/auth";
import {
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFirebase,
} from "@firebaseSRC/providers";
import { setDatos } from "./authSlice";
import { FirebaseDB } from "../../firebase/config";
import { doc, documentId, getDoc, setDoc } from "firebase/firestore/lite";

// *************************************************
// CHECKING CREDENCIALES
// *************************************************

export const checkingAuthentication = () => {
  return async (dispatch) => dispatch(checkingCredentials());
};

// *************************************************
// CREACION DE USUARIO CON EMAIL Y CONTRASEÑA
// *************************************************

// Aqui ingresan las variables de todos los datos que se quieren registrar
// ya sea el nombre, el correo, direccion, numero telefonico.
export const startCreatingUserWithEmailPassword = (data) => {
  return async (dispatch) => {
    // Hace un checking para verficar que no haya un usuario logeado.
    dispatch(checkingCredentials());

    // Aqui llama una función que hace el registro de los datos ingresados hacia la base de datos.
    // Esto nos da un resultado, la cual almacenaremos en una variable.
    const result = await registerUserWithEmailPassword(data);
    // Aqui se llama la funcion que es responsable para crear los datos, como nombre,
    // direccion, etc. Para poder almacenarlos en la base de datos.
    dispatch(createNewUserEnBD(data, result.uid));

    // COMPROBRACIÓN
    // Gracias a ese resultado que nos dio, podemos verificar si el uduario esta correctamente Registrado
    // con un 'true', en caso contrario con un 'false' si no se registro correctamente.
    if (!result.ok) return dispatch(startLogout());
    dispatch(login(result));
  };
};

// *************************************************
// CREACION DE USUARIO EN BASE DE DATOS
// *************************************************

// Se reciben todos los datos almacenados en una sola variable llamada 'data', y se recibe un Id, la cual nos ayudara
// para guardar con id al nuevo usuario
export const createNewUserEnBD = (data, uid) => {
  return async (dispatch) => {
    // Se destructura la variable data, en sus respectivas variables, como el nombre,
    // direccion, etc.
    const { name, numberPhone, direccion } = data;

    // Al usar usa base de datos NoSql, tendremos que darle forma a los datos que nos ingresen, asi
    // creando un objeto para darle forma de JSON y poder registrarlo en nuestra bsae de datos NOSQL
    const newUser = {
      name: name,
      numberPhone: numberPhone,
      direccion: direccion,
      rol: "Cliente",
      imagen:
        "https://res.cloudinary.com/dssccuwn8/image/upload/v1670099198/assets/user_img_d9ktvt.png",
    };

    // Aqui mandaremos toda informacion del usuario hacia la base de datos en la ruta de los usuarios con su id unica.
    const docRef = doc(FirebaseDB, `users/${uid}`);
    // Aqui se confirma que queros escribir en la base de datos.
    setDoc(docRef, newUser);
    // SetDatos es una ayuda, en nuestro sistema de almacenamiento de datos en la app
    dispatch(setDatos(newUser));
  };
};

// *************************************************
// INICIO DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

// Aqui ingresan las variables del correo y la contraseña
export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    // Hace un checking para verficar que no haya un usuario logeado.
    dispatch(checkingCredentials());

    // Aqui llama una función que hace la validacion de los input del usuario con los datos existentes en Firebase.
    // Esto nos da un resultado, la cual almacenaremos en una variable.
    const result = await loginWithEmailPassword({ email, password });

    // COMPROBRACIÓN
    // Gracias a ese resultado que nos dio, podemos verificar si el uduario esta correctamente Logeado
    // con un 'true', en caso contrario con un 'false' si no se logeo correctamente.
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

// *************************************************
// BUSQUEDA DE USUARIO EN FIREBASE
// *************************************************

export const findByIdUserData = (uid) => {
  return async (dispatch) => {
    const newDoc = doc(FirebaseDB, `users/${uid}`);
    const datos = await getDoc(newDoc);
    // console.log(datos.data());
    try {
      dispatch(setDatos(datos.data()));
    } catch (error) {
      // console.log("no me encuentro");
    }
  };
};

// *************************************************
// CIERRE DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
    localStorage.clear()
  };
};

// *************************************************
// INICIO CON GUGUL
// *************************************************

// export const startGoogleSingIn = () => {
//   return async (dispatch) => {
//     dispatch(checkingCredentials());

//     const result = await singInWithGoogle();

//     // COMPROBRACIÓN
//     if (!result.ok) return dispatch(logout());
//     dispatch(login(result));
//   };
// };
