import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

// *************************************************
// CREACION DE USUARIO CON EMAIL Y CONTRASEÑA
// *************************************************

// Funcion que nos dará un resultado,para que podemos verificar si el uduario esta correctamente Registrado
// con un 'true', en caso contrario con un 'false' si no se registro correctamente.
export const registerUserWithEmailPassword = async ({ email, password }) => {
  try {
    // Aqui se llama una funcion que tiene Firebase la cual hace un llamado, para crear
    // con correo y contraseña un nuevo usuario
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // Nos devuelve un id unico creado por firebase
    const { uid } = resp.user;

    // Luego del resultado que nos de, podemos retornar de que el usuario se creó correctamente.
    return {
      ok: true,
      uid,
      email,
    };
  } catch (error) {
    // En caso de error, devolvera que no se pudo crear crrectamente el usuario.
    return console.log(error), { ok: false, errorMessage: error.message };
  }
};

// *************************************************
// INICIO DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

// Funcion que nos dará un resultado, como true o false, para verificar si es que se pudo logear
// correctamente. Se ingresa el correo y la contraseña.
export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    // Aqui se llama una funcion que tiene Firebase la cual hace un llamado, para verificar si
    // el correo y la contraseña existe en la base de datos.
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid } = resp.user;

    // Luego del resultado que nos de, podemos retornar de que el usuario se logeo correctamente.
    return {
      ok: true,
      uid,
      email,
    };
  } catch (error) {
    // En caso de error, devolvera que el correo y la contraseña ingresada no existen en la base de datos.
    return console.log(error), { ok: false, errorMessage: error.message };
  }
};

// *************************************************
// CIERRE DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

// const googleProvider = new GoogleAuthProvider();

// export const singInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(FirebaseAuth, googleProvider);
//     const { name, email, photoURL, uid } = result.user;

//     return {
//       ok: true,
//       name,
//       email,
//       photoURL,
//       uid,
//     };
//   } catch (error) {
//     return (console.log(error), { ok: false, errorMessage: error.message });
//   }
// };
