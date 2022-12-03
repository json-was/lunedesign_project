import { product } from "@data/datacard";
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
import { FirebaseDB } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

// const status = true;

export const Tienda = () => {
  const { status } = useSelector((state) => state.auth);

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
        console.log(productListId);
        setListaProductos(productListId);
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
          {status === "authenticated" ? (
            <BtnAddItem to="/addModifyItem" title="Agregar nuevo producto.">
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
