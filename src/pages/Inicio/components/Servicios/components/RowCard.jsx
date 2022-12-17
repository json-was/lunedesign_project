import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RowCard.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  BackCard,
  BackCardTitle,
  CardContainer,
  CardDescription,
  CardImg,
  FrontCard,
  FrontCardTitle,
} from "./RowCard.style";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "@firebaseSRC/config";

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

export const RowCard = () => {
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
    <Swiper {...customOptionsSwiper}>
      {listaProductos.map((data) => (
        <SwiperSlide key={data.id}>
          {/* CARD CONTAINER */}
          <CardContainer target={"_blank"} href="www.google.com">
            {/* FRONT CARD */}
            <FrontCard>
              <CardImg src={data.imagen} />
              <FrontCardTitle>{data.title}</FrontCardTitle>
            </FrontCard>
            {/* BACK CARD */}
            <BackCard>
              <BackCardTitle>{data.title}</BackCardTitle>
              <CardDescription>{data.description}</CardDescription>
            </BackCard>
          </CardContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
