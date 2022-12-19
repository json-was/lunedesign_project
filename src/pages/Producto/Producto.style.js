import styled from "styled-components";
import cuadricula_green_grey from "@assets/background/cuadricula_green_grey.svg";
import { Link } from "react-router-dom";

export const Main = styled.div`
  background: fixed repeat center/2rem url(${cuadricula_green_grey});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`;

export const CardContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 12rem 0 5rem 0;
  width: 70%;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`;

// ============
// LEFTSIDE
// ============

export const LeftSide = styled.div`
  /* background-color: aqua; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Imagen = styled.img`
  /* background-color: aqua; */
  width: 80%;
  height: 80%;
  /* padding-right: 2rem; */
  border-radius: 1rem;
`;

// ============
// RIGHTSIDE
// ============

export const RightSide = styled.div`
  /* background-color: red; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InfoProducto = styled.div`
  /* background-color: cyan; */
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Titulo = styled.p`
  padding-left: 1rem;
  font-size: 1.8rem;
  margin-left: 1rem;
  border-bottom: 1px solid blue;
`;

export const Precio = styled.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.7rem;
  margin-left: 1.5rem;
`;

export const Descripcion = styled.p`
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

export const Boton = styled.button`
  background-color: #71c2b1;
  border-radius: 2rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-size: 1rem;
  padding: 0.7rem 5rem;
  margin-left: 1rem;
  border: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {
    padding: 0.6rem 3.5rem;
  }
`;
