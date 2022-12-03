import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "@firebaseSRC/config";
import { login, logout } from "@store";
import { findByIdUserData } from "../store/auth/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email } = user;
      dispatch(login({ uid, email }));
      dispatch(findByIdUserData(uid));
    });
  }, []);

  return status
};
