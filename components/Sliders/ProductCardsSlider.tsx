"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import ProductCard from "@/components/Cards/ProductCard";

import "swiper/css";
import "swiper/css/scrollbar";

const ProductCardsSlider = () => {
  return (
    <Swiper
      className="product-slider"
      scrollbar={{
        draggable: true,
      }}
      breakpoints={{
        320: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4.5 },
      }}
      modules={[Scrollbar]}
      spaceBetween={24}
    >
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductCardsSlider;
