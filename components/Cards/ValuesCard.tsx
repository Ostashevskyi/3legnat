import Image from "next/image";
import React from "react";

type ValuesCardProps = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
};

const ValuesCard = ({ icon, title, text }: ValuesCardProps) => {
  return (
    <section className="max-w-[140px] sm:max-w-[152px] md:max-w-[178px] py-8 px-4 bg-neutral_02 lg:max-w-[230px] xl:max-w-[262px] lg:py-12 w-full lg:px-8 mb-12">
      <Image
        src={icon.src}
        alt={icon.alt}
        width={40}
        height={36}
        className="mb-4"
      />
      <div>
        <p className="lg:h7 semibold-caption-1 mb-2 text-neutral_07">{title}</p>
        <p className="lg:buttonXS-text regular-caption-1 text-neutral_04">
          {text}
        </p>
      </div>
    </section>
  );
};

export default ValuesCard;
