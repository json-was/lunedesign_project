import { LuneDesign, Servicios, WorkFlow, Contacto } from "./components";
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
