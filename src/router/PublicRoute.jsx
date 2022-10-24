import { Inicio, Tienda, Contacto } from "@pages";
import { Login, Register } from "@auth/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/*" element={ <Navigate to='/login' /> } />
    </Routes>
  );
};