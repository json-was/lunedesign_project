import styled from "styled-components";
import cuadricula_green_grey from "@assets/background/cuadricula_green_grey.svg";

export const Main = styled.main`
  align-items: center;
  background: fixed repeat center/2rem url(${cuadricula_green_grey});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`;

// ============
// CARD
// ============

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  height: 40rem;
  margin-top: 5rem;
  width: 65%;

  @media screen and (max-width: 1366px) {
    height: 30rem;
    margin: 7rem 0 3rem 0;
  }
`;

// ============
// TOP CARD
// ============

export const TopSideCard = styled.div`
  /* background-color: aqua; */
  align-items: center;
  border-bottom: 2px solid #ddd;
  display: flex;
  height: 15%;
  width: 100%;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`;

export const SpanLine = styled.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`;

// ============
// BOTTOM CARD
// ============

export const BottomSideCard = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`;

// ============
// LEFT - BOTTOMSIDE
// ============

export const LeftSide = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`;

export const Formulario = styled.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  width: 80%;
`;

export const Label = styled.p`
  font-size: 0.9rem;
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
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 8%;
  width: 80%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    padding: 0.5rem 0 0.5rem 10%;
  }
`;

export const Boton = styled.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  width: 35%;

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
// RIGHT - BOTTOMSIDE
// ============

export const RightSide = styled.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 100%;
  width: 45%;
`;

export const ImagenPerfil = styled.img`
  border-radius: 50%;
  height: 73%;
  width: 70%;

  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;
