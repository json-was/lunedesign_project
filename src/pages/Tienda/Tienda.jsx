import { product } from "@data/datacard";
import { Card } from "./components";
import {
  BottomSide,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Tienda.style";

export const Tienda = () => {
  return (
    <Main>
      <TopSide>
        <TitleBox>
          <SpanLine />
          <Title>Tienda</Title>
        </TitleBox>
      </TopSide>
      <BottomSide>
        {product.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </BottomSide>
    </Main>
  );
};
