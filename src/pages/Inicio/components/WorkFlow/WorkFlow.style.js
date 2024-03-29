import styled from "styled-components";

export const Main = styled.div`
  /* background-color: #FEF7EF; */
  min-height: 80vh;
  width: 100%;
`;

// ============
// TOP
// ============

export const TopSide = styled.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 20%;
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
  height: 80%;
  width: 100%;
`;

export const Cointainer = styled.div`
  /* background-color: red; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const CentralLine = styled.div`
  /* background-color: blue; */
  align-items: center;
  background-color: #71c2b1;
  box-shadow: 0px 1px 3px #1e1e1e;
  display: flex;
  height: 2.2rem;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1366px) {
    height: 1.7rem;
  }
`;
