import styled from "styled-components";
import bg_pattern from "../../assets/pattern.svg";
import bg_wave from "../../assets/wave_top.svg";

export const Wave = styled.span`
  background-image: url(${bg_wave});
  bottom: -8px;
  height: 20vh;
  position: absolute;
  width: 100%;
`;

export const Main = styled.div`
  background-image: url(${bg_pattern});
  background-position: center;
  background-repeat: repeat;
  background-size: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
`;

export const LeftSide = styled.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: end;
  width: 50%;
`;

export const Logo = styled.img`
  width: 47rem;
`;

export const RightSide = styled.div`
  /* background-color: aqua; */
  height: 100vh;
  width: 50%;
`;

export const TitleBox = styled.div`
  /* background-color: blueviolet; */
  align-items: flex-end;
  display: flex;
  height: 50%;
  width: 100%;

  h1 {
    margin: 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const TitleLine = styled.span`
  color: #1e1e1e;
  font-family: "Bowlby One SC", cursive;
  font-size: 6rem;
`;

export const TextBox = styled.div`
  /* background-color: brown; */
  height: 50%;
  width: 65%;
`;

export const Parrafo = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const Button = styled.a`
  background-color: #71c2b1;
  border-radius: 2rem;
  box-shadow: 0px 1px 1rem #bbb;
  font-size: 1rem;
  padding: 0.7rem 5rem;

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
