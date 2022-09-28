import styled from "styled-components";

export const CardContainer = styled.a`
  background: #fff;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;

// ============
// FRONT CARD
// ============

export const FrontCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  position: absolute;

  justify-content: center;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`;

export const CardImg = styled.img`
  border-radius: 3px;
  height: 80%;
  width: 93%;
  margin-top: 3%;
`;

export const FrontCardTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// ============
// BACK CARD
// ============

export const BackCard = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s ease 0s;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`;

export const BackCardTitle = styled.h3`
  border-bottom: 1px solid #62a596;
  height: auto;
  margin: 1rem 1rem 0;
  padding-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDescription = styled.p`
  height: 70%;
  margin: 1.5rem;
  overflow-y: scroll;
`;
