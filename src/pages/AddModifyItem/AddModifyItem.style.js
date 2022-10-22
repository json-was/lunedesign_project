import styled from "styled-components";
import cuadricula_green_grey from "@assets/background/cuadricula_green_grey.svg";

export const Main = styled.div`
  align-items: center;
  background: fixed repeat center/2rem url(${cuadricula_green_grey});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  height: 40rem;
  margin-top: 5rem;
  width: 70%;

  @media screen and (max-width: 1366px) {
    height: 32rem;
    margin: 7rem 0 3rem 0;
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
  height: 12%;
  width: 100%;

  @media screen and (max-width: 1366px) {
    height: 5rem;
  }
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
// BOTTOM
// ============

export const BottomSide = styled.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`;

// ============
// LEFT
// ============

export const LeftSide = styled.div`
  /* background-color: red; */
  display: flex;
  height: 100%;
  justify-content: end;
  width: 55%;
`;

export const LeftContainer = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 80%;
`;

export const Label = styled.p`
  font-size: 1.5rem;
  margin-right: 78%;
  margin-top: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border-radius: 0.2rem;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0 0.5rem 2%;
  width: 89%;

  &:focus {
    border: 1px solid #f8bfb3;
    outline: none;
  }
`;

export const InputBox = styled.textarea`
  background-color: #fff;
  border-radius: 0.2rem;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1rem;
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
    height: 5.5rem;
  }
`;

export const BtnGuardar = styled.button`
  background-color: #71c2b1;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 1px 6px #bbb;
  margin-left: 0.5rem;
  margin-top: 1.4rem;
  padding: 0.6rem 0.8rem;
  text-decoration: none;

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
  margin-top: 3rem;
  width: 70%;

  @media screen and (max-width: 1366px) {
    height: 68%;
    width: 80%;
  }
`;
