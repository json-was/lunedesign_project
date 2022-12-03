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
import { useDispatch, useSelector } from "react-redux";
import { setActiveProduct } from "../../../../store/productos/productoActivoSlice";
import { deleteProductById } from "../../../../store/productos/thunks";

export const Card = ({ title, description, id, precio, imagen = '' }) => {
  const dispatch = useDispatch();
  const { rol } = useSelector((state) => state.auth);

  const onClickProduct = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
  };

  const onDeleteItem = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    dispatch(deleteProductById(id));
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
          {rol === "Administrador" ? (
            // <DeleteCarrito  >
            <DeleteCarrito onClick={onDeleteItem}>
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
