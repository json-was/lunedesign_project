import styled from "styled-components";

// ============
// CARD
// ============

export const CardBox = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  margin: 0.8rem;
  width: 22rem;
`;

// ============
// SECTION 1
// ============

export const ImgBox = styled.a`
  /* background-color: #bbb; */
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 80%;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 3px;
    height: 93%;
    margin-top: 3%;
    width: 92%;
  }
`;

// ============
// SECTION 2
// ============

export const InfoBox = styled.a`
  /* background-color: red; */
  cursor: pointer;
  font-size: 1.1rem;
  width: 90%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

// ============
// SECTION 3
// ============

export const PrecioBox = styled.div`
  /* background-color: green; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`;

export const PrecioNum = styled.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.3rem;
  margin-left: 1rem;
`;

export const Opciones = styled.div`
  /* margin-bottom: 0.2rem; */
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
`;

const CarritoParams = `
  cursor: pointer;
  margin-right: 0.5rem;
  width: 1.8rem;
  border: none;
  background: none;
  border-radius: 20%;

  @media (hover: hover) {
    &:hover {
      background-color: #8CBFAE;
      color: #fff;
    }
  }
`;

export const PlusCarrito = styled.button`
  ${CarritoParams};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`;

export const DeleteCarrito = styled.button`
  ${CarritoParams};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`;
