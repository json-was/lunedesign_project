import {
  BottomSide,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Servicios.style";
import { RowCard } from "./components/RowCard";

export const Servicios = () => {
  return (
    <Main>
      {/* TOP SIDE */}
      <TopSide>
        <TitleBox>
          <SpanLine />
          <Title>Servicios</Title>
        </TitleBox>
      </TopSide>

      {/* BOTTOM SIDE */}
      <BottomSide>
        <RowCard />
      </BottomSide>
    </Main>
  );
};
