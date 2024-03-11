"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { TProduct } from "@/types/ProductType";
import { TWishlist } from "@/types/Wishlist";

const CardSection = ({
  data,
  wishlist,
}: {
  data: TProduct[];
  wishlist: TWishlist[];
}) => {
  const [grid, setGrid] = useState<unknown>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    <div
      className={`mb-8 grid gap-6 justify-items-center md:mb-20 p-mobile max-container
      ${grid === undefined && "md:grid-cols-3 grid-cols-2"}

    ${grid === null && "md:grid-cols-3 grid-cols-2"}
  ${grid === "row" && "grid-cols-2"} 
  ${grid === "grid4" && "grid-cols-4"} 
  ${grid === "grid9" && "grid-cols-6"} 
  `}
    >
      {data?.map((product, index) => (
        <ProductCard product={product} key={index} wishlist={wishlist} />
      ))}
    </div>
  );
};

export default CardSection;
