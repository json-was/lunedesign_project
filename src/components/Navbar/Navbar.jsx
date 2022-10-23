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

const nombre = "Jason Alfaro";
const status = false;

export const Navbar = () => {
  return (
    <Main>
      <LeftSide>
        <Logo src={Logo_LuneDesign} />
        <LinkList>
          <LinkItem to='/' >Inicio</LinkItem>
          <LinkItem to='/tienda' >Tienda</LinkItem>
          <LinkItem to='/' >Sobre mi</LinkItem>
          <LinkItem to='/contacto' >Contacto</LinkItem>

          <LinkItem to='/addmodifyItem' >--agregar item</LinkItem>
          <LinkItem to='/profile' >--perfil</LinkItem>

        </LinkList>
      </LeftSide>
      {status ? (
        <RightSide>
          <Usuario>Bienvenido, {nombre}</Usuario>
          <ExitIcon src={exit_icon} />
        </RightSide>
      ) : (
        <RightSide>
          <Button  to='/login' >Iniciar Sesion</Button>
          <Button to='/register' >Registrarse</Button>
        </RightSide>
      )}
    </Main>
  );
};
