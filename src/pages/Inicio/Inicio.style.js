import styled from "styled-components";
import bg_pattern from "../../assets/pattern.svg";

export const Main = styled.div`
  background-image: url(${bg_pattern});
  background-position: center;
  background-attachment: fixed;
  background-repeat: repeat;
  background-size: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`;