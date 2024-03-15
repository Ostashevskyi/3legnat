import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discount = () => {
  return (
    <div className="min-container bg-neutral_02 py-2 flex items-center px-4">
      <div className="flex gap-12 justify-center items-center m-auto">
        <Image
          src={"/icons/ticket-percent.svg"}
          alt="ticket-percent"
          width={24}
          height={24}
        />
        <p className="semibold-caption-1">30% off storewide — Limited time! </p>
        <span className="hidden lg:flex">
          <Link
            className="text-secondary_blue buttonXS-text hover:underline"
            href={"/shop"}
          >
            Shop Now →
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Discount;
