import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discount = () => {
  return (
    <div className="bg-neutral_02 py-2 flex items-center p-mobile">
      <div className="flex gap-12 justify-center items-center m-auto">
        <Image
          src={"/icons/ticket-percent.svg"}
          alt="ticket-percent"
          width={24}
          height={24}
        />
        <p className="semibold-caption-1">30% off storewide — Limited time! </p>
        <Link
          href={"/"}
          className="buttonXS-text text-secondary_blue hidden lg:flex hover:underline"
        >
          Shop Now →
        </Link>
      </div>
      <div>
        <Image
          src={"/icons/close.svg"}
          alt="cross"
          width={20}
          height={20}
          className="mr-5"
        />
      </div>
    </div>
  );
};

export default Discount;
