import Logo_LuneDesign from "@assets/Logo_LuneDesign.png";
import exit_icon from "@assets/icons/exit_icon.svg";
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
import { useSelector } from "react-redux";

const nombre = "Jason Alfaro";
// const status = false;

export const Navbar = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Main>
      <LeftSide>
        <Logo src={Logo_LuneDesign} />
        <LinkList>
          <LinkItem to="/">Inicio</LinkItem>
          <LinkItem to="/tienda">Tienda</LinkItem>
          <LinkItem to="/">Sobre mi</LinkItem>
          <LinkItem to="/contacto">Contacto</LinkItem>
        </LinkList>
      </LeftSide>
      {status === "authenticated" ? (
        <RightSide>
          <Usuario>Bienvenido, <LinkItem to='profile' >{nombre}</LinkItem></Usuario>
          {/* <Usuario>Bienvenido, {nombre}</Usuario> */}
          <ExitIcon src={exit_icon} />
        </RightSide>
      ) : (
        <RightSide>
          <Button to="/login">Iniciar Sesion</Button>
          <Button to="/register">Registrarse</Button>
        </RightSide>
      )}
    </Main>
  );
};
