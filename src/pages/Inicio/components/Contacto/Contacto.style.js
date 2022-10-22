import styled from "styled-components";
import bg_wave_contact from "@assets/bg_wave_contact.svg";

export const Main = styled.div`
  background: no-repeat center/cover url(${bg_wave_contact});
  display: flex;
  min-height: 80vh;
  width: 100%;
`;

// ============
// LEFT
// ============

export const LeftSide = styled.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`;

export const Logo = styled.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`;

// ============
// RIGHT
// ============

export const RightSide = styled.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 35%;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 30%;
  }
`;

export const SpanLine = styled.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: 1rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`;

export const TextBox = styled.div`
  /* background-color: brown; */
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 3rem;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 2rem;
  }
`;

export const IconMail = styled.img`
  width: 3rem;

  @media screen and (max-width: 1366px) {
    width: 2rem;
  }
`;

export const Parrafo = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`;
