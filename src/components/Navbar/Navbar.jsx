import Logo_LuneDesign from "../../assets/Logo_LuneDesign.png";
import exit_icon from "../../assets/icons/exit_icon.svg";
import {
  Button,
  ExitIcon,
  LeftSide,
  LinkItem,
  LinkList,
  Logo,
  Main,
  RightSide,
  Usuario,
} from "./Navbar.style";

const nombre = "Jason Alfaro";
const logeado = false;

export const Navbar = () => {
  return (
    <Main>
      <LeftSide>
        <Logo src={Logo_LuneDesign} />
        <LinkList>
          <LinkItem>Inicio</LinkItem>
          <LinkItem>Tienda</LinkItem>
          <LinkItem>Sobre mi</LinkItem>
          <LinkItem>Contacto</LinkItem>
        </LinkList>
      </LeftSide>
      {logeado ? (
        <RightSide>
          <Usuario>Bienvenido, {nombre}</Usuario>
          <ExitIcon src={exit_icon} />
        </RightSide>
      ) : (
        <RightSide>
          <Button>Iniciar Sesion</Button>
          <Button>Registrarse</Button>
        </RightSide>
      )}
    </Main>
  );
};
