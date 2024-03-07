"use client";
import { TProduct } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

const WishlistButton = ({
  product,
  user_id,
}: {
  product: TProduct;
  user_id: string;
}) => {
  const handleClick = async () => {
    const { mainPhoto, title, price } = product;
    const res = await fetch("http://localhost:3000/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: mainPhoto.url,
        product_title: title,
        price,
        user_id,
        slug: product.slug,
      }),
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center gap-2 w-full border py-1 max-w-[223px] border-black rounded-md"
    >
      <Image src={"/icons/heart.svg"} alt="heart" width={16} height={16} />
      <p>Wishlist</p>
    </button>
  );
};

export default WishlistButton;
