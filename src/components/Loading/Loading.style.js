import styled from "styled-components";

export const Main = styled.div`
  z-index: 10000;
  background-color: #f8bfb3;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 0.5rem solid #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border-left-color: #71c2b1;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
