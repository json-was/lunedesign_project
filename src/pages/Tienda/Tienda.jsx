import { product } from "@data/datacard";
import {
  BottomSide,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Tienda.style";
import { Card } from "./components/Card";

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
