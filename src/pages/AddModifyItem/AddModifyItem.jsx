import {
  Boton,
  BottomSideCard,
  CardContainer,
  Formulario,
  ImagenProducto,
  Input,
  InputBox,
  Label,
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
        <BottomSideCard>
          <LeftSide>
            <Formulario>
              <Label>Titulo:</Label>
              <Input placeholder="ej. Tarjetas, Pack fotografia"></Input>
              <Label>Precio:</Label>
              <Input placeholder="ej. 590000"></Input>
              <Label>Descripción:</Label>
              <InputBox placeholder="ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto."></InputBox>
              <Boton>GUARDAR</Boton>
            </Formulario>
          </LeftSide>
          <RightSide>
            <ImagenProducto src={calculator} />
            <Boton>SUBIR IMAGEN</Boton>
          </RightSide>
        </BottomSideCard>
      </CardContainer>
    </Main>
  );
};
