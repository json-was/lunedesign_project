import {
  CardBox,
  DeleteCarrito,
  EditProduct,
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
import edit_product from "@assets/icons/edit_product.svg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProduct, deleteProductById } from "@store";
import { addItemCarrito } from "@hooks";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, description, id, precio, imagen }) => {
  const dispatch = useDispatch();
  const { rol } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onClickProduct = () => {
    navigate(`/producto/${id}`);
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
  };

  const onDeleteItem = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    dispatch(deleteProductById(id));
  };

  const addItemToCart = () => {
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
    addItemCarrito({ title, description, id, precio, imagen });
  };

  const EditItem = () => {
    navigate(`/modificar/${id}`);
    dispatch(setActiveProduct({ title, description, id, precio, imagen }));
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
            <>
              <EditProduct onClick={EditItem}>
                <img src={edit_product} />
              </EditProduct>
              <DeleteCarrito onClick={onDeleteItem}>
                <img src={carritoDelete} />
              </DeleteCarrito>
            </>
          ) : (
            <></>
          )}
          <PlusCarrito onClick={addItemToCart}>
            <img src={carritoPlus} />
          </PlusCarrito>
        </Opciones>
      </PrecioBox>
    </CardBox>
  );
};
