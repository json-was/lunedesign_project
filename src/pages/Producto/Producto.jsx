import { useDispatch, useSelector } from "react-redux";
import {
  Boton,
  CardContainer,
  Descripcion,
  Imagen,
  InfoProducto,
  LeftSide,
  Main,
  Precio,
  RightSide,
  Titulo,
} from "./Producto.style";
import { addItemCarrito } from "@hooks";
import { useNavigate, useParams } from "react-router-dom";
import { FirebaseDB } from "../../firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { setActiveProduct } from "@store";
import { useEffect } from "react";
import { useState } from "react";

export const Producto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [productoVisto, setProductoVisto] = useState({});
  useEffect(() => {
    const getLista = async () => {
      try {
        const producto = await getDoc(doc(FirebaseDB, `productos/${id}`));
        const newItem = { id: producto.id, ...producto.data() };
        setProductoVisto(newItem);
        dispatch(setActiveProduct(newItem));
      } catch (error) {
        console.log("error en cargar productos");
      }
    };
    getLista();
  }, []);

  const { title, description, precio, imagen } = useSelector(
    (state) => state.productoActivo
  );
  const addItemToCart = () => {
    addItemCarrito({ title, description, id, precio, imagen });
    navigate("/carrito");
  };

  return (
    <Main>
      <CardContainer>
        <LeftSide>
          <Imagen src={imagen} />
        </LeftSide>
        <RightSide>
          <InfoProducto>
            <Titulo>{title}</Titulo>
            <Descripcion>{description}</Descripcion>
            <Precio>Precio: ${precio}</Precio>
            <Boton onClick={addItemToCart}>Agregar al carrito</Boton>
          </InfoProducto>
        </RightSide>
      </CardContainer>
    </Main>
  );
};
