import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "@firebaseSRC/config";
import { login, logout } from "@store";
import { findByIdUserData, startLoginWithEmailPassword, startLogout } from "../store/auth/thunks";
import { setDatos } from "../store/auth/authSlice";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // if (!user) return dispatch(logout());
      if (!user) return dispatch(startLogout());

      const { uid, email } = user;
      dispatch(login({ uid, email }));
      dispatch(findByIdUserData(uid));
    });
  }, []);

  return status
};
