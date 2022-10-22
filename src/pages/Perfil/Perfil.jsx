import {
  Boton,
  BottomSideCard,
  Card,
  Formulario,
  Icon,
  ImagenPerfil,
  Input,
  InputBox,
  Label,
  LeftSide,
  Main,
  RightSide,
  SpanLine,
  Title,
  TitleBox,
  TopSideCard,
} from "./Perfil.style";
import calculator from "@assets/calculator.png";
import input_user from "@assets/icons/input_user.svg";
import input_mail from "@assets/icons/input_mail.svg";
import input_map from "@assets/icons/input_map.svg";
import input_phone from "@assets/icons/input_phone.svg";

export const Perfil = () => {
  return (
    <Main>
      <Card>
        <TopSideCard>
          <TitleBox>
            <SpanLine />
            <Title>Perfil</Title>
          </TitleBox>
        </TopSideCard>

        <BottomSideCard>
          <LeftSide>
            <Formulario>
              <Label>Nombre:</Label>
              <InputBox>
                <Icon src={input_user} />
                <Input type="text" placeholder="Nombre completo" />
              </InputBox>

              <Label>Correo:</Label>
              <InputBox>
                <Icon src={input_mail} />
                <Input type="email" placeholder="example@lorem.com" />
              </InputBox>

              <Label>Dirección:</Label>
              <InputBox>
                <Icon src={input_map} />
                <Input type="text" placeholder="ej. Example villa sol #123" />
              </InputBox>

              <Label>Telefono:</Label>
              <InputBox>
                <Icon src={input_phone} />
                <Input type="text" placeholder="+569 12345678" />
              </InputBox>

              <Boton>GUARDAR</Boton>
            </Formulario>
          </LeftSide>
          <RightSide>
            <ImagenPerfil src={calculator} />
          </RightSide>
        </BottomSideCard>
      </Card>
    </Main>
  );
};
