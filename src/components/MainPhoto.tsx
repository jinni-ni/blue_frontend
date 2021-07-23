import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import MainImage1 from "../assets/mainimage1.jpg";
import MainImage2 from "../assets/mainimage2.jpeg";

function MainPhoto() {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <Swiper
      style={{ height: "300px" }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      navigation
      autoplay={true}
    >
      <SwiperSlide>
        <img src={MainImage1} alt="logo" width="100%" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={MainImage2} alt="logo" width="100%" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainPhoto;
