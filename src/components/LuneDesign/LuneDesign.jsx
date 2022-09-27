import Logo_face from "../../assets/Logo-Face.png";
import {
  Button,
  LeftSide,
  Logo,
  Main,
  Parrafo,
  RightSide,
  TextBox,
  Title,
  TitleBox,
  TitleLine,
} from "./LuneDesign.style";

export const LuneDesign = () => {
  return (
    <Main>
      <LeftSide>
        <Logo src={Logo_face} />
      </LeftSide>
      <RightSide>
        <TitleBox>
          <Title>
            <TitleLine>LUNE</TitleLine>
            <TitleLine>DESIGN</TitleLine>
          </Title>
        </TitleBox>
        <TextBox>
          <Parrafo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Parrafo>
          <Button>Saber más</Button>
        </TextBox>
      </RightSide>
    </Main>
  );
};
