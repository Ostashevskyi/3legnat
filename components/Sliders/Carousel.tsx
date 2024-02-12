"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

const Carousel = () => {
  return (
    <div className="mx-4 lg:mx-0">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1}
        updateOnWindowResize
        loop
        observer
        observeParents
        className="hero-slider"
      >
        <SwiperSlide>
          <Image src={"/slider.png"} alt="alt" width={1132} height={550} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/slider.png"} alt="alt" width={1132} height={550} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/slider.png"} alt="alt" width={1132} height={550} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
