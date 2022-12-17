import {
  Boton,
  BottomSideCard,
  Card,
  Formulario,
  Icon,
  ImagenContainer,
  ImagenPerfil,
  Input,
  InputBox,
  Label,
  LeftSide,
  Main,
  RightSide,
  SpanLine,
  Title,
  TitleBox,
  TopSideCard,
} from "./Perfil.style";
import input_user from "@assets/icons/input_user.svg";
import input_mail from "@assets/icons/input_mail.svg";
import input_map from "@assets/icons/input_map.svg";
import input_phone from "@assets/icons/input_phone.svg";
import { useSelector } from "react-redux";

export const Perfil = () => {
  const { name, email, direccion, numberPhone, imagen } = useSelector(
    (state) => state.auth
  );

  return (
    <Main>
      <Card>
        <TopSideCard>
          <TitleBox>
            <SpanLine />
            <Title>Perfil</Title>
          </TitleBox>
        </TopSideCard>

        <BottomSideCard>
          <LeftSide>
            <Formulario>
              <Label>Nombre:</Label>
              <InputBox>
                <Icon src={input_user} />
                <Input type="text" placeholder={name} disabled />
              </InputBox>

              <Label>Correo:</Label>
              <InputBox>
                <Icon src={input_mail} />
                <Input type="text" placeholder={email} disabled />
              </InputBox>

              <Label>Dirección:</Label>
              <InputBox>
                <Icon src={input_map} />
                <Input type="text" placeholder={direccion} disabled />
              </InputBox>

              <Label>Telefono:</Label>
              <InputBox>
                <Icon src={input_phone} />
                <Input type="number" placeholder={numberPhone} disabled />
              </InputBox>

              {/* <Boton>GUARDAR</Boton> */}
            </Formulario>
          </LeftSide>
          <RightSide>
            <ImagenContainer>
              <ImagenPerfil src={imagen} />
            </ImagenContainer>
          </RightSide>
        </BottomSideCard>
      </Card>
    </Main>
  );
};
