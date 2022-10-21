import {
  IconMail,
  LeftSide,
  Logo,
  Main,
  Parrafo,
  RightSide,
  SpanLine,
  TextBox,
  Title,
  TitleBox,
  Wave,
} from "./Contacto.style";
import Logo_LuneDesign from "@assets/Logo_LuneDesign.png";
import mail_icon from "@assets/icons/mail_icon.svg";

export const Contacto = () => {
  return (
    <Main>
      <Wave>
        <LeftSide>
          <Logo src={Logo_LuneDesign} />
        </LeftSide>
        <RightSide>
          <TitleBox>
            <SpanLine />
            <Title>Contacto</Title>
          </TitleBox>
          <TextBox>
            <IconMail src={mail_icon} />
            <Parrafo>: mail.contacto@lialopez.com</Parrafo>
          </TextBox>
        </RightSide>
      </Wave>
    </Main>
  );
};
