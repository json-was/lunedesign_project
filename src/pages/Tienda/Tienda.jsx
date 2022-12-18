import { Card } from "./components";
import {
  BottomSide,
  BtnAddItem,
  CardContainer,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Tienda.style";
import plus_add from "@assets/icons/new_product.svg";
import { useSelector } from "react-redux";
import { FirebaseDB } from "@firebaseSRC/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export const Tienda = () => {
  const { rol } = useSelector((state) => state.auth);

  // RENDERIZADOR DE PRODUCTOS
  const [listaProductos, setListaProductos] = useState([]);
  useEffect(() => {
    const getLista = async () => {
      try {
        const productListId = [];
        const datos = await getDocs(collection(FirebaseDB, "productos"));
        datos.forEach((datos) => {
          const newItem = { id: datos.id, ...datos.data() };
          productListId.push(newItem);
        });
        setListaProductos(productListId);
        // console.log('hola');
      } catch (error) {
        console.log("error en cargar productos");
      }
    };
    getLista();
  }, []);

  return (
    <Main>
      <CardContainer>
        <TopSide>
          <TitleBox>
            <SpanLine />
            <Title>Tienda</Title>
          </TitleBox>
          {rol === "Administrador" ? (
            <BtnAddItem to="/agregar" title="Agregar nuevo producto.">
              <img src={plus_add} />
            </BtnAddItem>
          ) : (
            <></>
          )}
        </TopSide>
        <BottomSide>
          {listaProductos.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </BottomSide>
      </CardContainer>
    </Main>
  );
};
