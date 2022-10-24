import { Navigate, Route, Routes } from "react-router-dom";
import { Inicio, Tienda, AddModifyItem, Perfil, Contacto } from "@pages";
import { Login, Register } from "@auth/pages";
import { useSelector } from "react-redux";

export const SesionNoIniciada = () => {
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

export const SesionIniciada = () => {
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

// const status = false;

// export const AppRouter = () => {
//   const { status } = useSelector((state) => state.auth);

//   return (
//     <Routes>
//       {
//         status === 'authenticated'
//           ? <Route path="/*" element={<SesionIniciada />} />
//           : <Route path="/*" element={<SesionNoIniciada />} />
//       }
//     </Routes>
//   );
// };

export const ProtectedRoute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  if (status !== "authenticated") {
    return <Navigate to="/login" />;
  }
  return children;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />
      <Route
        path="/addModifyItem"
        element={
          <ProtectedRoute>
            <AddModifyItem />
          </ProtectedRoute>
        }
      />

      <Route path="/*" element={<Inicio />} />
    </Routes>
  );
};
