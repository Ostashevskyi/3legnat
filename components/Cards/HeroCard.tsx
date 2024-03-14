import React from "react";
import Image from "next/image";
import ArrowLink from "../Links/ArrowLink";

type HeroCard = {
  variant: string;
  title: string;
  image: string;
};

const HeroCards = ({ variant, title, image }: HeroCard) => {
  return (
    <div
      className={
        variant === "primary"
          ? "bg-neutral_02 relative"
          : "flex bg-neutral_02 items-end max-h-[548px] relative"
      }
    >
      <section
        className={
          variant === "primary"
            ? "absolute left-[5%] top-[5%] lg:left-[10%] lg:top-[10%]"
            : "absolute left-[5%] bottom-[15%]"
        }
      >
        <h5 className="mb-3">{title}</h5>
        <ArrowLink color={"text-black"} text="Shop Now" href="shop" />
      </section>
      <Image src={image} alt="section_image" width={548} height={664} />
    </div>
  );
};

export default HeroCards;
