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
`;

export const TextTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
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
`;

export const Icon = styled.img`
  width: 3.5rem;
`;
