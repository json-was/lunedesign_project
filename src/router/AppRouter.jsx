import { Route, Routes } from "react-router-dom";
import { Inicio, Tienda, AddModifyItem, Perfil, Contacto } from "@pages";
import { Login, Register } from "@auth/pages";

export const LogoutRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/*" element={<Inicio />} />
    </Routes>
  );
};

export const LoginRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/profile" element={<Perfil />} />
      <Route path="/addModifyItem" element={<AddModifyItem />} />

      <Route path="/*" element={<Inicio />} />
    </Routes>
  );
};

const status = true;

export const AppRouter = () => {
  return (
    <Routes>
      {
        status
          ? <Route path="/*" element={<LoginRouter />} />
          : <Route path="/*" element={<LogoutRouter />} />
      }
    </Routes>
  );
};
