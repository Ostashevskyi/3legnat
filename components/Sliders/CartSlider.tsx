"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type SliderContentProps = {
  count: number;
  text: string;
  title: string;
  name: string;
};

const SliderContent = ({ count, text, title, name }: SliderContentProps) => {
  return (
    <section
      className={`flex items-center gap-3 pb-6 mb-10 ${
        title === name && "border-b-2 border-black"
      }`}
    >
      <div
        className={`w-[42px] h-[42px]  text-white flex items-center justify-center rounded-full ${
          title === name ? "bg-black" : "bg-gray-300"
        }`}
      >
        <p>{count}</p>
      </div>
      <p
        className={`semibold-body-2  ${
          title === name ? "text-black" : "text-gray-300"
        }`}
      >
        {text}
      </p>
    </section>
  );
};

const CartSlider = ({ title }: { title: string }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={45}
        breakpoints={{ 700: { slidesPerView: 3 } }}
      >
        <SwiperSlide>
          <SliderContent
            count={1}
            text="Shopping cart"
            title={title}
            name="Cart"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            count={2}
            text="Checkout details"
            title={title}
            name="Check Out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            count={3}
            text="Order complete"
            title={title}
            name="Complete!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CartSlider;
