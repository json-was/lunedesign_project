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

const isAdmin = true;

export const Card = (data) => {
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
        <PrecioNum>$000.000</PrecioNum>
        <Opciones>
          {isAdmin ? (
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
