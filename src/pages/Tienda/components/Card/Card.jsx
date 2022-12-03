import React from "react";
import {
  CardBox,
  DeleteCarrito,
  ImgBox,
  InfoBox,
  Opciones,
  PlusCarrito,
  PrecioBox,
  PrecioNum,
} from "./Card.style";
import carritoDelete from "@assets/icons/trash_carrito.svg";
import carritoPlus from "@assets/icons/plus_carrito.svg";
import calculator from "@assets/calculator.png";
import { useSelector } from "react-redux";

export const Card = (data) => {
  const { rol } = useSelector((state) => state.auth);

  return (
    <CardBox>
      {/* SECTION 1 */}
      <ImgBox>
        <img src={calculator} />
      </ImgBox>
      {/* SECTION2 */}
      <InfoBox>{data.title}</InfoBox>
      {/* SECTION3 */}
      <PrecioBox>
        <PrecioNum>{`$ ${data.precio}`}</PrecioNum>
        <Opciones>
          {rol === "Administrador" ? (
            <DeleteCarrito>
              <img src={carritoDelete} />
            </DeleteCarrito>
          ) : (
            <></>
          )}
          <PlusCarrito>
            <img src={carritoPlus} />
          </PlusCarrito>
        </Opciones>
      </PrecioBox>
    </CardBox>
  );
};
