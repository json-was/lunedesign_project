import React from "react";
import { Navbar } from "@components/Navbar/Navbar";
import { Footer } from "@components/Footer/Footer";
import { LuneDesign } from "@pages/Inicio/components/LuneDesign/LuneDesign";
import { Servicios } from "@pages/Inicio/components/Servicios/Servicios";
import { WorkFlow } from "@pages/Inicio/components/WorkFlow/WorkFlow";
import { Contacto } from "@pages/Inicio/components/Contacto/Contacto";
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
