import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { Inicio, Tienda, AddModifyItem } from "@pages";

export const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Inicio /> */}
      {/* <Tienda /> */}
      {/* <AddModifyItem /> */}
      <Footer/>
    </>
  );
};

export default App;
