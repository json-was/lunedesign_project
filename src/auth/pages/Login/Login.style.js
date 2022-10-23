import styled from "styled-components";
import bg_pattern from "@assets/pattern.svg";
import bg_wave from "@assets/bg_wave_sign_in_up.svg";
import { Link } from "react-router-dom";

export const Main = styled.div`
  background: fixed repeat center/2.5rem url(${bg_pattern});
  height: 95vh;
  width: 100%;

  @media screen and (max-width: 1366px) {
    height: 120vh;
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
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid #f8bfb3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-direction: column;
  height: 35rem;
  margin-top: 13rem;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    margin-top: 10rem;
    height: 30rem;
  }
`;

// ============
// TOP
// ============

export const Title = styled.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 4rem;
  font-weight: 400;
  margin: 3rem 0;

  @media screen and (max-width: 1366px) {
    font-size: 3rem;
  }
`;

// ============
// CENTER
// ============

export const Formulario = styled.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 1366px) {
    height: 50%;
  }
`;

// ============
// INPUT
// ============

export const InputBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const Icon = styled.img`
  margin-left: 0.7rem;
  position: absolute;
  width: 1.2rem;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #f8bfb3;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 8%;
  width: 91.5%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }
`;

// ============
// LINE
// ============

export const Line = styled.span`
  background-color: #3772ff;
  height: 1px;
  opacity: 50%;
  width: 100%;
`;

// ============
// BUTTON
// ============

const botonParams = `
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 0;

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

export const BotonSolid = styled.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  ${botonParams}
`;

export const BotonOutline = styled.button`
  background-color: #fff;
  border: 1px solid #71c2b1;
  ${botonParams}
`;

// ============
// BOTTOM
// ============

export const SinCuenta = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Texto = styled.p`
  font-size: 0.9rem;
`;

export const NuevaCuenta = styled(Link)`
  color: #3772ff;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  text-decoration: none;

  &:active {
    color: #94b3fc;
  }

  @media (hover: hover) {
    &:hover {
      color: #94b3fc;
    }
  }
`;
