"use client";

import { TWishlist } from "@/types/Wishlist";
import React from "react";

const DeleteWishlistButton = ({
  user_id,
  product,
}: {
  user_id: string | undefined;
  product: TWishlist;
}) => {
  const handleClick = async () => {
    await fetch("/api/wishlist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        slug: product.slug,
      }),
    });
  };
  return (
    <button className="text-neutral_04 text-xl" onClick={handleClick}>
      ✖
    </button>
  );
};

export default DeleteWishlistButton;
