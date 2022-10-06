import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { Inicio, Tienda } from "@pages";

export const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Inicio /> */}
      <Tienda />
      <Footer/>
    </>
  );
};

export default App;
