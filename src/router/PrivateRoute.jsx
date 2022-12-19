import {
  Inicio,
  Tienda,
  AddModifyItem,
  Perfil,
  Contacto,
  Carrito,
  Producto,
  SobreMi,
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
      <Route path="/sobreMi" element={<SobreMi />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/producto/:id" element={<Producto />} />
      {rol === "Administrador" && (
        <>
          <Route path="/agregar" element={<AddModifyItem />} />
          <Route path="/modificar/:id" element={<AddModifyItem />} />
        </>
      )}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
