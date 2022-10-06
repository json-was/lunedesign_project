import {
  BottomSide,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Servicios.style";
import { RowCard } from "./components";

export const Servicios = () => {
  return (
    <Main>
      <TopSide>
        <TitleBox>
          <SpanLine />
          <Title>Servicios</Title>
        </TitleBox>
      </TopSide>
      <BottomSide>
        <RowCard />
      </BottomSide>
    </Main>
  );
};
