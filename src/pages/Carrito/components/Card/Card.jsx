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
import carritoPlus from "@assets/icons/plus_carrito.svg";
import calculator from "@assets/calculator.png";
import { deleteProduct, setPrecio } from "../../../../store/carrito/carritoSlice";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProduct } from "../../../../store/productos/productoActivoSlice";

export const Card = ({ title, description, id, precio, imagen = "" }) => {
  const dispatch = useDispatch()
  const {precioTotal} = useSelector(state => state.carrito)

  const onDeleteItem = () => {
    const producto = dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    dispatch(deleteProduct({ title, description, id, precio, imagen }))
    const resta = precioTotal - precio
    dispatch(setPrecio(resta))
  };

  return (
    <CardBox>
      {/* SECTION 1 */}
      <ImgBox>
        <ImagenP>
          <img src={calculator} />
        </ImagenP>
      </ImgBox>
      {/* SECTION2 */}
      <InfoBox>{title}</InfoBox>
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
