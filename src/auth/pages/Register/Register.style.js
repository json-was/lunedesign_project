import styled from "styled-components";
import bg_pattern from "@assets/pattern.svg";
import bg_wave from "@assets/bg_wave_sign_in_up.svg";

export const Main = styled.div`
  background: fixed repeat center/2.5rem url(${bg_pattern});
  height: 95vh;
  width: 100%;

  @media screen and (max-width: 1366px) {
    height: 130vh;
  }
`;

// ============
// WAVE
// ============

export const Wave = styled.div`
  align-self: center;
  background: no-repeat center/cover url(${bg_wave});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// ============
// CARD
// ============

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid #f8bfb3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-wrap: wrap;
  height: 40rem;
  margin-top: 13rem;
  width: 70rem;

  @media screen and (max-width: 1366px) {
    height: 35rem;
    margin-top: 10rem;
  }
`;

// ============
// TOP CARD
// ============

export const TopSideCard = styled.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 25%;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 3.2rem;
  font-weight: 400;
  margin: 3rem 0;

  @media screen and (max-width: 1366px) {
    font-size: 2.5rem;
  }
`;

// ============
// MIDDLE
// ============

export const Formulario = styled.form`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 65%;
  width: 100%;
`;

// ============
// SIDES FORM
// ============

export const LeftSideForm = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-left: 10%;
  width: 40%;
`;

export const RightSideForm = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-right: 5%;
  width: 45%;
`;

export const BottomSideForm = styled.div`
  /* background-color: yellow; */
  align-items: center;
  border-top: 1px solid #3772ff50;
  display: flex;
  height: 20%;
  margin: 0 5rem;
  padding: 0 20rem;
  width: 100%;
`;

// ============
// INPUT
// ============

export const InputBox = styled.div`
  /* background-color: aqua; */
  position: relative;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`;

export const Icon = styled.img`
  margin: 0.55rem 0 0 0.7rem;
  position: absolute;
  width: 1.2rem;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #f8bfb3;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 8%;
  width: 80%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }
`;

export const Obligatorio = styled.p`
  color: #868686;
  font-size: 0.7rem;
  margin: 0.5rem 0 0 0.8rem;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`;

// ============
// BUTTON
// ============

export const Boton = styled.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`;

// ============
// BOTTOM CARD
// ============

export const BottomSideCard = styled.div`
  /* background-color: purple; */
  align-items: flex-start;
  display: flex;
  height: 10%;
  justify-content: center;
  width: 100%;
`;

export const ConCuenta = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Texto = styled.p`
  font-size: 0.9rem;
`;

export const IrACuenta = styled.a`
  color: #3772ff;
  font-size: 0.9rem;
  margin-left: 0.3rem;

  &:active {
    color: #94b3fc;
  }

  @media (hover: hover) {
    &:hover {
      color: #94b3fc;
      cursor: pointer;
    }
  }
`;
