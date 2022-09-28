import React from "react";
import { Contacto } from "../../components/Contacto/Contacto";
import { Footer } from "../../components/Footer/Footer";
import { LuneDesign } from "../../components/LuneDesign/LuneDesign";
import { Navbar } from "../../components/Navbar/Navbar";
import { Servicios } from "../../components/Servicios/Servicios";
import { WorkFlow } from "../../components/WorkFlow/WorkFlow";
import { Main } from "./Inicio.style";

export const Inicio = () => {
  return (
    <Main>
      <Navbar />
      <LuneDesign />
      <Servicios />
      <WorkFlow />
      <Contacto />
      <Footer />
    </Main>
  );
};
