import styled from "styled-components";
import cuadricula_green_grey from "@assets/background/cuadricula_green_grey.svg";
import { Link } from "react-router-dom";

export const Main = styled.div`
  align-items: center;
  background: fixed repeat center/2rem url(${cuadricula_green_grey});
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100%;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  height: 40rem;
  margin-top: 6rem;
  width: 65%;

  @media screen and (max-width: 1366px) {
    height: 29rem;
    margin-top: 4.5rem;
  }
`;

// ============
// TOP
// ============

export const TopSide = styled.div`
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
  height: 80%;
  width: 80%;
`;

export const Label = styled.p`
  font-size: 0.9rem;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 2%;
  width: 89%;

  &:focus {
    border: 1px solid #f8bfb3;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`;

export const InputBox = styled.textarea`
  background-color: #fff;
  border-radius: 0.2rem;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  height: 7.7rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0 0.5rem 2%;
  resize: none;
  width: 89%;

  &:focus {
    border: 1px solid #f8bfb3;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    height: 5.5rem;
  }
`;

export const BotonGuardar = styled(Link)`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  width: 25%;
  margin-top: 0.5rem;
  text-decoration: none;
  text-align: center;

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
// RIGHT
// ============

export const RightSide = styled.div`
  /* background-color: blue; */
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
`;

export const ImagenProducto = styled.img`
  border-radius: 0.5rem;
  height: 68%;
  margin-top: 2.5rem;
  width: 75%;

  @media screen and (max-width: 1366px) {
    height: 66.5%;
  }
`;

export const Boton = styled.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  /* height: 2.5rem; */
  width: 40%;
  margin-top: 0.5rem;

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
