import styled from "styled-components";

export const Main = styled.div`
  /* align-items: center; */
  /* background-color: #f8bfb3; */
  background: rgb(250, 178, 169);
  background: linear-gradient(
    90deg,
    rgba(250, 178, 169, 1) 0%,
    rgba(248, 191, 179, 1) 10%,
    rgba(248, 191, 179, 1) 90%,
    rgba(250, 178, 169, 1) 100%
  );
  display: flex;
  font-size: 1rem;
  height: 6rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);

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

export const LinkItem = styled.li`
  list-style: none;
  margin-right: 1rem;

  &:active {
    color: #6b6b6b;
  }

  @media (hover: hover) {
    &:hover {
      color: #6b6b6b;
      cursor: pointer;
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
`;

export const ExitIcon = styled.img`
  width: 2rem;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Button = styled.a`
  background-color: #71c2b1;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 6px #bbb;
  margin-left: 0.5rem;
  padding: 0.6rem 0.8rem;
  text-decoration: none;

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
