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
  height: auto;
  margin: 12rem 0 5rem 0;
  padding-bottom: 2rem;
  width: 85%;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`;

// ============
// TOP
// ============

export const TopSide = styled.div`
  /* background-color: aqua; */
  align-items: flex-end;
  background-color: #fcfcfc;
  border-bottom: 1px solid #3772ff50;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
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

export const BtnAddItem = styled(Link)`
  align-items: center;
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 2rem 1.4rem 0;
  width: 2.5rem;

  img {
    width: 100%;
  }

  &:active {
    background-color: #6fa894;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #8cbfae;
    }
  }
`;

// ============
// BOTTOM
// ============

export const BottomSide = styled.div`
  /* background-color: blueviolet; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
