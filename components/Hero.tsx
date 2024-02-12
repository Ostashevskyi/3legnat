import React from "react";
import Carousel from "./Sliders/Carousel";
import HeroCards from "./Cards/HeroCard";

const Hero = () => {
  return (
    <div className="p-mobile">
      <Carousel />

      <section className="flex items-center justify-between flex-wrap mb-10">
        <h2 className="text-neutral_07 heading4 lg:heading2 mb-4">
          Simply Unique<span className="text-neutral_04 font-bold ml-2">/</span>
          <br /> Simply Better<span className="text-neutral_04 ml-1">.</span>
        </h2>
        <p className="lg:mr-7 text-neutral_04 text-xs lg:text-base max-w-[424px]">
          <span className="text-neutral_05">3legant </span>is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </section>

      <div className="flex gap-6 flex-col lg:flex-row mb-12">
        <HeroCards variant="primary" title="Living Room" image="/chair.png" />
        <div className="flex flex-col justify-between gap-4">
          <HeroCards variant="secondary" title="Bedroom" image="/shafka.png" />
          <HeroCards variant="secondary" title="Kitchen" image="/toaster.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
