import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper";

interface NavBarProps {
  setProductsCategory: React.Dispatch<React.SetStateAction<number>>;
}

export function NavBar(props: NavBarProps) {
  const swiperStyle = {
    boxShadow: "0 2.6px 7.25px rgba(0, 0, 0, .08)",
    color: "#696969"
  };

  const swiperSlideStyle = {
    cursor: "pointer"
  };
  return (
    <nav>
      <Swiper
        navigation={true}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          530: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          630: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          840: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1350: {
            slidesPerView: 6,
            spaceBetween: 0
          }
        }}
        modules={[Navigation]}
        className="mySwiper bg-white fs-6 col-11 py-4 px-2 rounded border border-white"
        style={swiperStyle}
      >
        <SwiperSlide onClick={() => props.setProductsCategory(3)}>
          <span style={swiperSlideStyle}>Pizzas</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => props.setProductsCategory(4)}>
          <span style={swiperSlideStyle}>Combo Lanche</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => props.setProductsCategory(1)}>
          <span style={swiperSlideStyle}>Hamburguer</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => props.setProductsCategory(2)}>
          <span style={swiperSlideStyle}>Refrigerantes</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => props.setProductsCategory(5)}>
          <span style={swiperSlideStyle}>Sucos</span>
        </SwiperSlide>
        <SwiperSlide onClick={() => props.setProductsCategory(6)}>
          <span style={swiperSlideStyle}>Açais</span>
        </SwiperSlide>
      </Swiper>
    </nav>
  );
}
