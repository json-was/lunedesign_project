import styled from "styled-components";

export const WorkBox = styled.div`
  /* background-color: green; */
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 18rem;

  @media (hover: hover) {
    &:hover {
      p {
        color: #d14b44;
      }
      h3 {
        color: #d14b44;
        font-size: 1.5rem;
      }
      img {
        width: 4rem;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    height: 21rem;
    width: 13rem;

    @media (hover: hover) {
      &:hover {
        h3 {
          font-size: 1.3rem;
        }
        img {
          width: 3.5rem;
        }
      }
    }
  }
`;

// ============
// TOP
// ============

export const TopContainer = styled.div`
  align-items: center;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  width: 100%;
`;

export const Text = styled.p`
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 0.85rem;
  }
`;

export const TextTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`;

// ============
// BOTTOM
// ============

export const BottomContainer = styled.div`
  /* background-color: brown; */
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`;

export const LineIcon = styled.div`
  align-items: center;
  /* background-color: blue; */
  background-color: #71c2b1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 0.8rem;

  @media screen and (max-width: 1366px) {
    width: 0.7rem;
  }
`;

export const IconBox = styled.div`
  /* background-color: blue; */
  align-items: center;
  background-color: #71c2b1;
  border-radius: 50%;
  box-shadow: 0px 1px 3px #1e1e1e;
  display: flex;
  height: 6rem;
  justify-content: center;
  width: 6rem;

  @media screen and (max-width: 1366px) {
    height: 5.5rem;
    width: 5.5rem;
  }
`;

export const Icon = styled.img`
  width: 3.5rem;

  @media screen and (max-width: 1366px) {
    width: 3rem;
  }
`;
