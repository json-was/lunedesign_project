import { checkingCredentials, login, logout } from "@store/auth";
import { registerUserWithEmailPassword, loginWithEmailPassword } from "@firebaseSRC/providers";

// *************************************************
// CHECKING CREDENCIALES
// *************************************************

export const checkingAuthentication = () => {
  return async (dispatch) => dispatch(checkingCredentials());
};

// *************************************************
// CREACION DE USUARIO CON EMAIL Y CONTRASEÑA
// *************************************************

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    // COMPROBRACIÓN
    if(!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

// *************************************************
// INICIO DE SESION CON EMAIL Y CONTRASEÑA
// *************************************************

export const startLoginWithEmailPassword = ({email, password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({email, password});

    // COMPROBRACIÓN
    if(!result.ok) return dispatch(logout(result));
    dispatch(login(result))
  }
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