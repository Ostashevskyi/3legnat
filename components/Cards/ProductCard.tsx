"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import StarsRating from "@/components/Shared/StarsRating";
import type { TProduct } from "@/types/ProductType";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  const [grid, setGrid] = useState<unknown>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={`w-fit max-w-[442px]${
        grid === "row" && " md:flex md:items-center md:gap-10 lg:gap-20"
      }`}
    >
      <div className="mb-3 relative w-fit flex-1">
        <Image
          alt="product-image"
          src={product.mainPhoto.url}
          width={262}
          height={349}
        />

        <div>
          <div>
            <div className="flex justify-center items-center absolute top-4 left-4 leading-14 bg-white px-3 py-1 text-base font-bold">
              <p>NEW</p>
            </div>

            {product.onsale && (
              <div className="absolute left-4 top-12 justify-center rounded-md items-center leading-14 px-3 py-1 font-bold text-white bg-secondary_green">
                <p>-{product.discountNumber}%</p>
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
      <div className={`${grid === "row" ? "max-w-[100px]" : "max-w-fit"}`}>
        <StarsRating readOnly />
        <p className={`semibold-body-2 my-1  `}>{product.title}</p>
        <div className={`flex gap-3 items-center`}>
          <p className="semibold-caption-1">${product.price.toFixed(2)}</p>
          {product.onsale && (
            <p className="regular-caption-1 line-through">
              ${product.oldPrice?.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
