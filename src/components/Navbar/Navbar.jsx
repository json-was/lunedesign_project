import Logo_LuneDesign from "@assets/Logo_LuneDesign.png";
import exit_icon from "@assets/icons/exit_icon.svg";
import {
  Button,
  ButtonExit,
  ExitIcon,
  LeftSide,
  LinkItem,
  LinkList,
  Logo,
  Main,
  RightSide,
  Usuario,
} from "./Navbar.style";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "@store/auth/thunks";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { status, name } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Main>
      <LeftSide>
        <Logo src={Logo_LuneDesign} />
        <LinkList>
          <LinkItem to="/">Inicio</LinkItem>
          <LinkItem to="/tienda">Tienda</LinkItem>
          <LinkItem to="/sobreMi">Sobre mi</LinkItem>
          <LinkItem to="/contacto">Contacto</LinkItem>
        </LinkList>
      </LeftSide>
      {status === "authenticated" ? (
        <RightSide>
          <Usuario>
            Bienvenido, <LinkItem to="profile">{name}</LinkItem>
          </Usuario>
          {/* <Usuario>Bienvenido, {nombre}</Usuario> */}
          <ButtonExit onClick={onLogout}>
            <ExitIcon src={exit_icon} />
          </ButtonExit>
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
