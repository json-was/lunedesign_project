import React from "react";
import "./index.css";
import { Navbar } from "@components/Navbar/Navbar";
import { Footer } from "@components/Footer/Footer";
import { Inicio } from "@pages/Inicio/Inicio";
import { Tienda } from "@pages/Tienda/Tienda";

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
