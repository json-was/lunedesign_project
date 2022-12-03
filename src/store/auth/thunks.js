import { checkingCredentials, login, logout } from "@store/auth";
import {
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFirebase,
} from "@firebaseSRC/providers";
import { setDatos } from "./authSlice";
import { FirebaseDB } from "../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";

// *************************************************
// CHECKING CREDENCIALES
// *************************************************

export const checkingAuthentication = () => {
  return async (dispatch) => dispatch(checkingCredentials());
};

// *************************************************
// CREACION DE USUARIO CON EMAIL Y CONTRASEÑA
// *************************************************

export const startCreatingUserWithEmailPassword = (data) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword(data);
    dispatch(createNewUserEnBD(data, result.uid))

    dispatch(logout(result));
  };
};

// *************************************************
// CREACION DE USUARIO EN BASE DE DATOS
// *************************************************

export const createNewUserEnBD = (data, uid) => {
  return async (dispatch) => {
    const {name, numberPhone, direccion} = data;

    const newUser = {
      name: name,
      numberPhone: numberPhone,
      direccion: direccion,
      rol: 'Cliente',
    }

    const docRef = doc(FirebaseDB, `users/${uid}`);
    setDoc(docRef, newUser);
  };
};

// *************************************************
// INICIO DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    // COMPROBRACIÓN
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
    dispatch(findByIdUserData(result.uid));
  };
};

// *************************************************
// BUSQUEDA DE USUARIO EN FIREBASE
// *************************************************

export const findByIdUserData = (uid) => {
  return async (dispatch) => {
    const newDoc = doc(FirebaseDB, `users/${uid}`);
    const datos = await getDoc(newDoc);
    dispatch(setDatos(datos.data()));
  };
};

// *************************************************
// CIERRE DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
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
