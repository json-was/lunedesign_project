import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { Inicio, Tienda, AddModifyItem, Perfil, Contacto } from "@pages";
import { Login, Register } from "@auth/pages";

export const App = () => {
  return (
    <>
      <Navbar />
      {/* <Inicio /> */}
      {/* <Tienda /> */}
      <Contacto />
      {/* <AddModifyItem /> */}
      {/* <Perfil /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Footer />
    </>
  );
};

export default App;
