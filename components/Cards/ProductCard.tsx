"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import StarsRating from "@/components/Shared/StarsRating";
import type { TProduct } from "@/types/ProductType";

const ProductCard = ({ product }: { product: TProduct }) => {
  const isNew = true;
  const isSale = true;
  const saleAmount = 50;

  const [isOver, setIsOver] = useState(false);
  const [grid, setGrid] = useState<unknown>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    // here
    <div
      className={`w-fit ${
        grid === "row" && " md:flex md:items-center md:gap-10 lg:gap-20"
      }`}
    >
      <div
        className="mb-3 relative w-fit"
        onMouseEnter={() => setIsOver(!isOver)}
        onMouseLeave={() => setIsOver(!isOver)}
      >
        <Image
          alt="product-image"
          src={product.mainPhoto?.url}
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
              <div className="absolute left-4 top-12 justify-center rounded-md items-center leading-14 px-3 py-1 font-bold text-white bg-secondary_green">
                <p>-{saleAmount}%</p>
              </div>
            )}
          </div>
          <div className="absolute top-4 right-4 p-[6px] rounded-full bg-white ">
            <Image
              width={20}
              height={20}
              src={"/icons/heart.svg"}
              alt="heart"
            />
          </div>
        </div>

        {/* here */}
        {isOver && (
          <button className="max-w-[85%] w-full h-11 rounded-md bg-black text-white absolute m-auto left-0 right-0 bottom-4">
            Add to cart
          </button>
        )}
      </div>
      <div>
        <StarsRating readOnly />
        <p className="semibold-body-2 my-1">Loveseat Sofa</p>
        <p className="semibold-caption-1">$199.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
