import {
  BottomSide,
  BtnGuardar,
  CardContainer,
  ImagenProducto,
  Input,
  InputBox,
  Label,
  LeftContainer,
  LeftSide,
  Main,
  RightSide,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./AddModifyItem.style";

import calculator from "@assets/calculator.png";

const modify = false;

export const AddModifyItem = () => {
  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>{modify ? "Modificar" : "Agregar"} producto</Title>
          </TitleBox>
        </TopSide>
        <BottomSide>
          <LeftSide>
            <LeftContainer>
              <Label>Titulo:</Label>
              <Input placeholder="ej. Tarjetas, Pack fotografia"></Input>
              <Label>Precio:</Label>
              <Input placeholder="ej. 590000"></Input>
              <Label>Descripción:</Label>
              <InputBox placeholder="ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto."></InputBox>
              <BtnGuardar>GUARDAR</BtnGuardar>
            </LeftContainer>
          </LeftSide>
          <RightSide>
            <ImagenProducto src={calculator} />
            <BtnGuardar>SUBIR IMAGEN</BtnGuardar>
          </RightSide>
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
