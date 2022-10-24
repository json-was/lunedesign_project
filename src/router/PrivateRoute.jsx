import { Inicio, Tienda, AddModifyItem, Perfil, Contacto } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/profile" element={<Perfil />} />
      <Route path="/addModifyItem" element={<AddModifyItem />} />

      <Route path="/*" element={ <Navigate to='/' /> } />
    </Routes>
  );
};