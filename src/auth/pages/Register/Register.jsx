import {
  Boton,
  BottomSideCard,
  BottomSideForm,
  Card,
  ConCuenta,
  Formulario,
  Icon,
  Input,
  InputBox,
  IrACuenta,
  LeftSideForm,
  Main,
  Obligatorio,
  RightSideForm,
  Texto,
  Title,
  TopSideCard,
  Wave,
} from "./Register.style";
import input_user from "@assets/icons/input_user.svg";
import input_padlock from "@assets/icons/input_padlock.svg";
import input_mail from "@assets/icons/input_mail.svg";
import input_map from "@assets/icons/input_map.svg";
import input_phone from "@assets/icons/input_phone.svg";

export const Register = () => {
  return (
    <Main>
      <Wave>
        <Card>
          <TopSideCard>
            <Title>Crear cuenta</Title>
          </TopSideCard>

          <Formulario>
            <LeftSideForm>
              <Texto>Nombre:</Texto>
              <InputBox>
                <Icon src={input_user} />
                <Input type="text" placeholder="Nombre completo" />
                <Obligatorio>El nombre es obligatorio.</Obligatorio>
              </InputBox>

              <Texto>Correo:</Texto>
              <InputBox>
                <Icon src={input_mail} />
                <Input type="email" placeholder="example@lorem.com" />
                <Obligatorio>El correo debe contener un @.</Obligatorio>
              </InputBox>

              <Texto>Contraseña:</Texto>
              <InputBox>
                <Icon src={input_padlock} />
                <Input type="password" placeholder="********" />
                <Obligatorio>
                  La contraseña debe tener mínimo de 6 carácteres.
                </Obligatorio>
              </InputBox>
            </LeftSideForm>

            <RightSideForm>
              <Texto>Direccion:</Texto>
              <InputBox>
                <Icon src={input_map} />
                <Input type="text" placeholder="ej. Example villa sol #123" />
                <Obligatorio>La dirección es obligatoria.</Obligatorio>
              </InputBox>

              <Texto>Numero telefonico:</Texto>
              <InputBox>
                <Icon src={input_phone} />
                <Input type="text" placeholder="+569 12345678" />
                <Obligatorio>El número es obligatorio.</Obligatorio>
              </InputBox>

              <Texto>Confirmar contraseña:</Texto>
              <InputBox>
                <Icon src={input_padlock} />
                <Input type="password" placeholder="********" />
                <Obligatorio>
                  La contraseña debe tener mínimo de 6 carácteres.
                </Obligatorio>
              </InputBox>
            </RightSideForm>

            <BottomSideForm>
              <Boton>Crear cuenta</Boton>
            </BottomSideForm>
          </Formulario>

          <BottomSideCard>
            <ConCuenta>
              <Texto>¿Ya tienes cuenta?</Texto>
              <IrACuenta to='/login' >Iniciar sesión</IrACuenta>
            </ConCuenta>
          </BottomSideCard>
        </Card>
      </Wave>
    </Main>
  );
};
