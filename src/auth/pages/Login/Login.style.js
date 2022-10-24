import styled from "styled-components";
import bg_pattern from "@assets/pattern.svg";
import bg_wave from "@assets/bg_wave_sign_in_up.svg";
import { Link } from "react-router-dom";

export const Main = styled.div`
  background: fixed repeat center/2.5rem url(${bg_pattern});
  height: 95vh;
  width: 100%;
`;

// ============
// WAVE
// ============

export const Wave = styled.div`
  align-items: center;
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
  margin-top: 6rem;
  height: 30rem;
  width: 30rem;

  @media screen and (max-width: 1366px) {
    height: 25rem;
    margin-top: 4.5rem;
    width: 25rem;
  }
`;

// ============
// TOP
// ============

export const Title = styled.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 2.8rem;
  font-weight: 400;
  margin: 10% 0;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

// ============
// CENTER
// ============

export const Formulario = styled.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 1366px) {
    height: 65%;
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
  padding: 0.5rem 0 0.5rem 10%;
  width: 91.5%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 12%;
  }
`;

export const Obligatorio = styled.p`
  color: #ff2400;
  font-size: 0.7rem;
  margin-left: 0.8rem;

  /*
  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  } */
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

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

export const BotonOutline = styled.button`
  background-color: #fff;
  border: 1px solid #71c2b1;
  ${botonParams}

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
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
  font-size: 0.9rem;
  margin-left: 0.3rem;
  text-decoration: none;

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
