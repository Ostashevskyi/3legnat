import React from "react";
import Carousel from "./Sliders/Carousel";

const Hero = () => {
  return (
    <div>
      <Carousel />

      <section className="flex items-center justify-between p-mobile flex-wrap">
        <h2 className="text-neutral_07 heading4 lg:heading2 mb-4">
          Simply Unique<span className="text-neutral_04 font-bold ml-2">/</span>
          <br /> Simply Better<span className="text-neutral_04 ml-1">.</span>
        </h2>
        <p className="lg:mr-7 text-neutral_04 text-xs lg:text-base max-w-[424px]">
          <span className="text-neutral_05">3legant </span>is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </section>
    </div>
  );
};

export default Hero;
