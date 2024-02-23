"use client";
import React from "react";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";

type TPhotos = {
  url: string;
  height: number;
  width: number;
};

const ProductPageSlider = ({ photos }: { photos: TPhotos[] }) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={24}
        className="product-page-slider mb-4 max-w-[548px]"
        modules={[Navigation]}
        navigation
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <Image
              src={photo.url}
              height={photo.height}
              width={photo.width}
              alt="alt"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductPageSlider;
