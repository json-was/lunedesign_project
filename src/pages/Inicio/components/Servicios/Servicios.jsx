import {
  BottomSide,
  Main,
  SpanLine,
  Title,
  TitleBox,
  TopSide,
} from "./Servicios.style";
import { RowCard } from "./components";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";
import { FirebaseDB } from "@firebaseSRC/config";

import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./components/RowCard.css";

const customOptionsSwiper = {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 5000,
  },
  navigation: true,
  modules: [Pagination, Autoplay, Navigation],
  className: "mySwiper",
};

export const Servicios = () => {
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
      } catch (error) {
        console.log("error en cargar productos");
      }
    };
    getLista();
  }, []);

  return (
    <Main>
      <TopSide>
        <TitleBox>
          <SpanLine />
          <Title>Servicios</Title>
        </TitleBox>
      </TopSide>
      <BottomSide>
        <Swiper {...customOptionsSwiper}>
          {listaProductos.map((data) => (
            <SwiperSlide key={data.id}>
              <RowCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </BottomSide>
    </Main>
  );
};
