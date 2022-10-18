import {
  BottomSide,
  BtnGuardar,
  CardContainer,
  ImagenProducto,
  Input,
  Label,
  LeftContainer,
  LeftSide,
  Main,
  RightSide,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Perfil.style";
import calculator from "@assets/calculator.png";

export const Perfil = () => {
  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>Perfil</Title>
          </TitleBox>
        </TopSide>
        <BottomSide>
          <LeftSide>
            <LeftContainer>
              <Label>Nombre:</Label>
              <Input placeholder="ej. Nombre nombre"></Input>
              <Label>Correo:</Label>
              <Input placeholder="ej. example@examplelorem.com"></Input>
              <Label>Dirección:</Label>
              <Input placeholder="ej. Villa Example #451, Copiapó, Atacama"></Input>
              <Label>Telefono:</Label>
              <Input placeholder="ej. +123 45678910"></Input>
              <BtnGuardar>GUARDAR</BtnGuardar>
            </LeftContainer>
          </LeftSide>
          <RightSide>
            <ImagenProducto src={calculator} />
          </RightSide>
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
