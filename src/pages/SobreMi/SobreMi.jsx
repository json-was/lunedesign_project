import React from "react";
import {
  LeftSide,
  Main,
  Logo,
  RightSide,
  SpanLine,
  TitleBox,
  Title,
  Parrafo,
  TextBoxLeft,
  TextBoxRight,
  MiddleSide,
  CardContainer,
} from "./SobreMi.style.js";

import Imagen_Cara from "@assets/Imagen_Cara.png";

export const SobreMi = () => {
  return (
    <Main>
      <CardContainer>
        <LeftSide>
          <TitleBox>
            <SpanLine />
            <Title>Sobre Mi</Title>
          </TitleBox>
          <TextBoxLeft>
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              exercitationem hic voluptate tempore! Facere, nisi deserunt
              officiis recusandae consequuntur, expedita ab autem obcaecati
              molestiae incidunt dolorum. Asperiores accusantium suscipit
              officia? Tempora nesciunt esse enim facere necessitatibus
              inventore eius ab
            </Parrafo>
          </TextBoxLeft>
        </LeftSide>

        <MiddleSide>
          <Logo src={Imagen_Cara} />
        </MiddleSide>

        <RightSide>
          <TextBoxRight>
            <Parrafo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              exercitationem hic voluptate tempore! Facere, nisi deserunt
              officiis recusandae consequuntur, expedita ab autem obcaecati
              molestiae incidunt dolorum. Asperiores accusantium suscipit
              officia? Tempora nesciunt esse enim facere necessitatibus
              inventore eius ab
            </Parrafo>
          </TextBoxRight>
        </RightSide>
      </CardContainer>
    </Main>
  );
};
