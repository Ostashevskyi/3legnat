import ArrowLink from "@/components/Links/ArrowLink";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-20">
      <Image
        src={"/room.png"}
        alt="room"
        width={720}
        height={532}
        className="w-full lg:flex-1"
      />
      <section className="bg-neutral_02 flex justify-center flex-col py-14 px-6 flex-1">
        <div className="lg:max-w-[452px] lg:ml-[72px]">
          <p className="text-base leading-16 mb-4 uppercase text-secondary_blue font-bold ">
            Sale up to 35% off
          </p>
          <p className="text-34 leading-38 lg:text-40 lg:leading-44 tracking-tighter font-medium mb-4 font-poppins">
            HUNDREDS of <br />
            New lower Prices
          </p>
          <p className="text-base leading-26 lg:text-20 lg:leading-32 mb-6 tracking-tighter">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <ArrowLink color="#000" text="Shop Now" href="shop" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
