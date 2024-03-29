import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  background: rgb(250, 178, 169);
  background: linear-gradient(
    90deg,
    rgba(250, 178, 169, 1) 0%,
    rgba(248, 191, 179, 1) 10%,
    rgba(248, 191, 179, 1) 90%,
    rgba(250, 178, 169, 1) 100%
  );
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  display: flex;
  font-size: 1rem;
  height: 6rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media screen and (max-width: 1366px) {
    height: 4.5rem;
  }
`;

// ============
// LEFT
// ============

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  margin-left: 12rem;
`;

export const Logo = styled.img`
  margin-top: 4.5rem;
  width: 11rem;

  @media screen and (max-width: 1366px) {
    width: 9.5rem;
  }
`;

export const LinkList = styled.ul`
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const LinkItem = styled(Link)`
  cursor: pointer;
  list-style: none;
  margin-right: 1rem;
  text-decoration: none;

  &:active {
    color: #6b6b6b;
  }

  @media (hover: hover) {
    &:hover {
      color: #6b6b6b;
    }
  }
`;

// ============
// RIGHT
// ============

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  margin-right: 12rem;
`;

export const Usuario = styled.p`
  margin-right: 1rem;

  a {
    color: #3772ff;
    font-size: 1.1rem;
    margin-left: 0.2rem;
  }
`;

export const ExitIcon = styled.img`
  cursor: pointer;
  width: 2rem;

  @media (hover: hover) {
    &:hover {
    }
  }
`;

export const Button = styled(Link)`
  background-color: #71c2b1;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.6rem 0.8rem;
  text-decoration: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
    }
  }
`;

export const ButtonExit = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: none;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 0.5rem;
  text-decoration: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
    }
  }
`;
