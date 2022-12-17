import {
  Inicio,
  Tienda,
  AddModifyItem,
  Perfil,
  Contacto,
  Carrito,
} from "@pages";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoute = () => {
  const { rol } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/profile" element={<Perfil />} />
      <Route path="/carrito" element={<Carrito />} />
      {rol === "Administrador" && (
        <Route path="/addModifyItem" element={<AddModifyItem />} />
      )}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
