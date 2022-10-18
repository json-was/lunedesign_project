import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { Inicio, Tienda, AddModifyItem } from "@pages";
import { Perfil } from "./pages/Perfil/Perfil";

export const App = () => {
  return (
    <>
      <Navbar />
      {/* <Inicio /> */}
      {/* <Tienda /> */}
      {/* <AddModifyItem /> */}
      <Perfil />
      <Footer />
    </>
  );
};

export default App;
