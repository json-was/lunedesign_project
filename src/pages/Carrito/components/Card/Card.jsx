import React from "react";
import {
  CardBox,
  DeleteCarrito,
  ImagenP,
  ImgBox,
  InfoBox,
  Opciones,
  PlusCarrito,
  PrecioBox,
  PrecioNum,
} from "./Card.style";
import carritoDelete from "@assets/icons/trash_carrito.svg";
import { setActiveProduct } from "@store/productos";
import { deleteItemCarrito } from "@hooks";
import { useDispatch } from "react-redux";

export const Card = ({ title, description, id, precio, imagen }) => {
  const dispatch = useDispatch();

  const onClickProduct = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
  };

  const onDeleteItem = () => {
    // dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    // dispatch(deleteProduct({ title, description, id, precio, imagen }));
    deleteItemCarrito(id);
    // const resta = precioTotal - precio;
    // dispatch(setPrecio(resta));
    location.reload();
  };

  return (
    <CardBox>
      {/* SECTION 1 */}
      <ImgBox onClick={onClickProduct}>
        <ImagenP>
          <img src={imagen} />
        </ImagenP>
      </ImgBox>
      {/* SECTION2 */}
      <InfoBox onClick={onClickProduct}>{title}</InfoBox>
      {/* SECTION3 */}
      <PrecioBox>
        <PrecioNum>{`$ ${precio}`}</PrecioNum>
        <Opciones>
          <DeleteCarrito onClick={onDeleteItem}>
            <img src={carritoDelete} />
          </DeleteCarrito>
        </Opciones>
      </PrecioBox>
    </CardBox>
  );
};
