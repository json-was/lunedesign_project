import styled from "styled-components";
// import pattern_green from "@assets/background/cuadricula_green.svg";
import pattern_green from "@assets/background/pattern.svg";

export const Main = styled.div`
  /* height: 100vh; */
  background-image: url(${pattern_green});
  background-position: center;
  background-repeat: repeat;
  background-size: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`;

// ============
// TOP
// ============

export const TopSide = styled.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 14rem;
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
  margin: 0 1rem 0 11rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
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
  margin: 0 6rem;
  width: 100%;
`;
