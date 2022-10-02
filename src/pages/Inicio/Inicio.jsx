import { LuneDesign } from "@pages/Inicio/components/LuneDesign/LuneDesign";
import { Servicios } from "@pages/Inicio/components/Servicios/Servicios";
import { WorkFlow } from "@pages/Inicio/components/WorkFlow/WorkFlow";
import { Contacto } from "@pages/Inicio/components/Contacto/Contacto";
import { Main } from "./Inicio.style";

export const Inicio = () => {
  return (
    <Main>
      <LuneDesign />
      <Servicios />
      <WorkFlow />
      <Contacto />
    </Main>
  );
};
