import { product } from "@data/datacard";
import { Card } from "./components";
import {
  BottomSide,
  BtnAddItem,
  CardContainer,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Tienda.style";
import plus_add from "@assets/icons/new_product.svg";
import { useSelector } from "react-redux";

// const status = true;

export const Tienda = () => {

  const { status } = useSelector((state) => state.auth)

  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>Tienda</Title>
          </TitleBox>
          {status === 'authenticated' ? (
            <BtnAddItem to='/addModifyItem' title="Agregar nuevo producto.">
              <img src={plus_add} />
            </BtnAddItem>
          ) : (
            <></>
          )}
        </TopSide>
        <BottomSide>
          {product.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
