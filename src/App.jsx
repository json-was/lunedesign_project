import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { AppRouter } from "./router/AppRouter";
import { CarritoFlotante } from "./components/CarritoFlotante/CarritoFlotante";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <CarritoFlotante />
      <Footer />
    </>
  );
};

export default App;
