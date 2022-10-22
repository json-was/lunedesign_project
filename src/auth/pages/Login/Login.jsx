import {
  BotonOutline,
  BotonSolid,
  Card,
  Formulario,
  Icon,
  Input,
  InputBox,
  Line,
  Main,
  NuevaCuenta,
  SinCuenta,
  Texto,
  Title,
  Wave,
} from "./Login.style";
import input_user from "@assets/icons/input_user.svg";
import input_padlock from "@assets/icons/input_padlock.svg";

export const Login = () => {
  return (
    <Main>
      <Wave>
        <Card>
          <Title>Iniciar sesión</Title>

          <Formulario>
            <Texto>Correo:</Texto>
            <InputBox>
              <Icon src={input_user} />
              <Input type="email" placeholder="example@lorem.com" />
            </InputBox>

            <Texto>Contraseña:</Texto>
            <InputBox>
              <Icon src={input_padlock} />
              <Input type="password" placeholder="********" />
            </InputBox>

            <Line />

            <BotonSolid>Iniciar sesión</BotonSolid>
            {/* <BotonOutline>Iniciar con Google</BotonOutline> */}
            <SinCuenta>
              <Texto>¿No tienes cuenta?</Texto>
              <NuevaCuenta>Crear cuenta</NuevaCuenta>
            </SinCuenta>
          </Formulario>
        </Card>
      </Wave>
    </Main>
  );
};
