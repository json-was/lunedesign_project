import {
  BottomSide,
  CentralLine,
  Cointainer,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./WorkFlow.style";

import { TopBox, BottomBox } from "./components";
import { dataworkflow } from "@data/datacard";

export const WorkFlow = () => {
  return (
    <Main>
      <TopSide>
        <TitleBox>
          <SpanLine />
          <Title>Forma de Trabajo</Title>
        </TitleBox>
      </TopSide>

      <BottomSide>
        <Cointainer>
          <CentralLine>
            {dataworkflow.map((data) =>
              data.id % 2 !== 0 ? (
                <BottomBox key={data.id} {...data} />
              ) : (
                <TopBox key={data.id} {...data} />
              )
            )}
          </CentralLine>
        </Cointainer>
      </BottomSide>
    </Main>
  );
};
