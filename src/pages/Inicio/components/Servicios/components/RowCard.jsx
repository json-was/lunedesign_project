import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RowCard.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { datacard } from "@data/datacard";
import {
  BackCard,
  BackCardTitle,
  CardContainer,
  CardDescription,
  CardImg,
  FrontCard,
  FrontCardTitle,
} from "./RowCard.style";

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
  return (
    <Swiper {...customOptionsSwiper}>
      {datacard.map((data) => (
        <SwiperSlide key={data.id}>
          {/* CARD CONTAINER */}
          <CardContainer target={"_blank"} href="www.google.com">
            {/* FRONT CARD */}
            <FrontCard>
              <CardImg src={`src/assets/${data.img}.png`} />
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
