import Image from "next/image";
import React from "react";

const ValuesCard = () => {
  return (
    <section className="max-w-[140px] sm:max-w-[152px] md:max-w-[178px] py-8 px-4 bg-neutral_02 lg:max-w-[230px] xl:max-w-[262px] lg:py-12 w-full lg:px-8 mb-12">
      <Image
        src={"/icons/car.svg"}
        alt="values"
        width={40}
        height={36}
        className="mb-4"
      />
      <div>
        <p className="lg:h7 semibold-caption-1 mb-2 text-neutral_07">
          Free Shipping
        </p>
        <p className="lg:buttonXS-text regular-caption-1 text-neutral_04">
          Order above $200
        </p>
      </div>
    </section>
  );
};

export default ValuesCard;
