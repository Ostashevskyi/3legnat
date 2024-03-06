"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import StarsRating from "@/components/Shared/StarsRating";
import type { TProduct } from "@/types/ProductType";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  const isNew = true;
  const isSale = true;
  const saleAmount = 50;

  const [grid, setGrid] = useState<unknown>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`w-fit ${
        grid === "row" && " md:flex md:items-center md:gap-10 lg:gap-20"
      }`}
    >
      <div className="mb-3 relative w-fit">
        <Image
          alt="product-image"
          src={product.mainPhoto.url}
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
      </div>
      <div>
        <StarsRating readOnly />
        <p className="semibold-body-2 my-1">{product.title}</p>
        <p className="semibold-caption-1">$199.00</p>
      </div>
    </Link>
  );
};

export default ProductCard;
