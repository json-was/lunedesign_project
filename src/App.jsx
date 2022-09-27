import React from "react";
import { LuneDesign } from "./components/LuneDesign/LuneDesign";
import { Navbar } from "./components/Navbar/Navbar";
import { Servicios } from "./components/Servicios/Servicios";
import "./index.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <LuneDesign />
      <Servicios />
      <LuneDesign />
    </>
  );
};

export default App;
