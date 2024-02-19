"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductCard = () => {
  const isNew = true;
  const isSale = true;
  const saleAmount = 50;

  const [isOver, setIsOver] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOver(!isOver)}
      onMouseLeave={() => setIsOver(!isOver)}
    >
      <Image
        alt="product-image"
        src={"/product-image.png"}
        width={262}
        height={349}
      />

      <div>
        <div>
          {isNew && (
            <div className="flex justify-center items-center absolute top-4 left-4 leading-14 bg-white px-3 py-1 text-base font-bold">
              <p>NEW</p>
            </div>
          )}

          {isSale && (
            <div className="absolute left-4 top-12 fle justify-center rounded-md items-center leading-14 px-3 py-1 font-bold text-white bg-secondary_green">
              <p>-{saleAmount}%</p>
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 p-[6px] rounded-full bg-white ">
          <Image width={20} height={20} src={"/icons/heart.svg"} alt="heart" />
        </div>
      </div>

      {isOver && (
        <button className="max-w-[230px] w-full h-11 rounded-md bg-black text-white absolute bottom-4 right-4 ">
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
