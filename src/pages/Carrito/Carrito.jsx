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
import { datacard } from "@data/datacard";
import { useSelector } from "react-redux";

export const Carrito = () => {
  const {productCart, precioTotal} = useSelector(state => state.carrito)

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
          {productCart.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </MiddleSide>
        <BottomSide>
          <PrecioBox>
            <PrecioText>Total: ${precioTotal}</PrecioText>
          </PrecioBox>
          <PrecioBox2>
          <Button>Pagar</Button>
        </PrecioBox2>
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
