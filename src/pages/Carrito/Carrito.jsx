import { Card } from "./components";
import {
  BottomSide,
  Button,
  CardContainer,
  Main,
  MiddleSide,
  PrecioBox,
  PrecioBox2,
  PrecioText,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Carrito.style";
import { useState } from "react";
import { useEffect } from "react";
import { getListCarrito } from "@hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingImage,
  isNotLoadingImage,
  setActiveProduct,
} from "../../store/productos/productoActivoSlice";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { deleteAllCarrito, deleteItemCarrito } from "../../hooks/localStorage";

export const Carrito = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, id } = useSelector((state) => state.productoActivo);

  const [carrito, setCarrito] = useState([]);
  const preciototatilti = carrito
    .map((item) => item.precio)
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    setCarrito(getListCarrito());
  }, []);

  const pagando = () => {
    dispatch(isLoadingImage());
    setTimeout(() => {
      dispatch(isNotLoadingImage());
      deleteAllCarrito();
      navigate("/");
    }, 3000);
  };

  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>Carrito</Title>
          </TitleBox>
        </TopSide>
        <MiddleSide>
          {carrito.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </MiddleSide>
        <BottomSide>
          <PrecioBox>
            <PrecioText>Total: ${preciototatilti}</PrecioText>
          </PrecioBox>
          <PrecioBox2>
            <Button onClick={pagando}>Pagar</Button>
          </PrecioBox2>
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
