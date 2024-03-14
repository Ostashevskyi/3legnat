import React from "react";
import Link from "next/link";

const ShopHeader = () => {
  return (
    <section className="bg-shop-bg bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col py-20 text-center lg:min-h-[392px] lg:py-0 mb-8 lg:mb-14">
      <div className="flex gap-4 justify-center items-center mb-6 buttonXS-text">
        <Link href={"/"} className="text-black/60">
          {"Home >"}
        </Link>
        <p className="text-primary_black font-semibold">Shop</p>
      </div>

      <h4 className="mb-4">Shop Page</h4>
      <p className="regular-body-2">
        Let’s design the place you always imagined.
      </p>
    </section>
  );
};

export default ShopHeader;
