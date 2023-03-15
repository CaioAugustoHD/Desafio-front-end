import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper";

export function NavBar() {
  return (
    <nav>
      <Swiper 
        navigation={true}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
        modules={[Navigation]} 
        className="mySwiper bg-white fs-5 col-10"
    >
        <SwiperSlide>Pizzas</SwiperSlide>
        <SwiperSlide>Combo Lanche</SwiperSlide>
        <SwiperSlide>Hamburguer</SwiperSlide>
        <SwiperSlide>Refrigerantes</SwiperSlide>
        <SwiperSlide>Sucos</SwiperSlide>
        <SwiperSlide>Açais</SwiperSlide>
      </Swiper>
    </nav>
  );
}