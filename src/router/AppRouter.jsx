import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "@components";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { PublicRoute, PrivateRoute } from "@router";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const {uid, displayName, email} = user;
      dispatch(login({uid, displayName, email}));
    });
  }, []);

  if (status === "checking") {
    return <Loading />;
  }

  return (
    <Routes>
      {
        status === 'authenticated'
          ? <Route path="/*" element={<PrivateRoute />} />
          : <Route path="/*" element={<PublicRoute />} />
      }
    </Routes>
  );
};
