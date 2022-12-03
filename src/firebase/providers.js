import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

// *************************************************
// CREACION DE USUARIO CON EMAIL Y CONTRASEÑA
// *************************************************

export const registerUserWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

    return {
      ok: true,
      uid,
      email,
    };
  } catch (error) {
    return (console.log(error), { ok: false, errorMessage: error.message });
  }
};

// *************************************************
// INICIO DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

    return {
      ok: true,
      uid,
      email,
    };
  } catch (error) {
    return (console.log(error), { ok: false, errorMessage: error.message });
  }
};

// *************************************************
// CIERRE DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}



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
