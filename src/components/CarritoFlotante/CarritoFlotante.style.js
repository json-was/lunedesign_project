import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  /* background-color: cyan; */
  bottom: 0;
  height: 85px;
  position: fixed;
  right: 0;
  width: 90px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Circulo = styled(Link)`
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  background-color: #71c2b1;
  border: 2px solid #1e1e1e;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`