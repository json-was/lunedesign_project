import styled from "styled-components";
import bg_pattern from "@assets/pattern.svg";

// ============
// GENERAL
// ============

export const CardContainer = styled.div`
  /* background-color: #f9f9f9; */
  border-radius: 1rem;
  height: auto;
  margin: 10rem 0 5rem 0;
  width: 87%;

  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`;

export const Main = styled.div`
  background: fixed repeat center/2rem url(${bg_pattern});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`;

export const Logo = styled.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`;

export const TitleBox = styled.div`
  /* background-color: grey; */
  align-items: center;
  display: flex;
  height: 10%;
  width: 100%;
`;

export const SpanLine = styled.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: -0.4rem;
  width: 6rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`;

export const Parrafo = styled.p`
  font-size: 1.35rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.1rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-left: 10%;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`;

// ============
// RIGHT
// ============

export const RightSide = styled.div`
  /* background-color: blue; */
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBoxRight = styled.div`
   /* background-color: brown; */
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  text-align: right;

`;

// ============
// Left
// ============

export const LeftSide = styled.div`
  /* background-color: red; */
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TextBoxLeft = styled.div`
    /* background-color: brown; */
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;

`;

// ============
// MIDDLE
// ============

export const MiddleSide = styled.div`
  /* background-color: green; */
  width: 33.33%;
  height: 100%;
`;