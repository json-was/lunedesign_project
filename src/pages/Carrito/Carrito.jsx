import { Card } from "./components";
import {
  BottomSide,
  Button,
  CardContainer,
  Main,
  MiddleSide,
  PrecioBox,
  PrecioBox2,
  PrecioText,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Carrito.style";
import { useState } from "react";
import { useEffect } from "react";
import { getListCarrito } from "@hooks";

export const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const preciototatilti = carrito
    .map((item) => item.precio)
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    setCarrito(getListCarrito());
  }, []);

  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>Carrito</Title>
          </TitleBox>
        </TopSide>
        <MiddleSide>
          {carrito.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </MiddleSide>
        <BottomSide>
          <PrecioBox>
            <PrecioText>Total: ${preciototatilti}</PrecioText>
          </PrecioBox>
          <PrecioBox2>
            <Button>Pagar</Button>
          </PrecioBox2>
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
