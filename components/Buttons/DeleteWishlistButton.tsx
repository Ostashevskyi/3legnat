"use client";

import { TWishlist } from "@/types/Wishlist";
import React from "react";
import { toast } from "sonner";

const DeleteWishlistButton = ({
  user_id,
  product,
}: {
  user_id: string | undefined;
  product: TWishlist;
}) => {
  const handleClick = async () => {
    const res = await fetch("/api/wishlist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        slug: product.slug,
      }),
    });

    if (res.ok) {
      toast.success("Product has been successfully deleted");
    }
  };
  return (
    <button className="text-neutral_04 text-xl" onClick={handleClick}>
      ✖
    </button>
  );
};

export default DeleteWishlistButton;
