import { Route, Routes } from "react-router-dom";
import { Loading } from "@components";
import { PublicRoute, PrivateRoute } from "@router";
import { useCheckAuth } from "@hooks";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <Loading />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoute />} />
      ) : (
        <Route path="/*" element={<PublicRoute />} />
      )}
    </Routes>
  );
};
