"use client";
import { TProduct } from "@/types/ProductType";
import React, { useEffect, useState } from "react";
import HeartIcon from "../Icons/HeartIcon";
import { TWishlist } from "@/types/Wishlist";
import { toast } from "sonner";

const WishlistButton = ({
  product,
  user_id,
  main,
  wishlist,
}: {
  product: TProduct;
  user_id: string | undefined;
  main?: boolean;
  wishlist: TWishlist[];
}) => {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  const handleClick = async () => {
    const { mainPhoto, title, price } = product;

    if (!isInWishlist) {
      const res = await fetch("/api/wishlist", {
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

      if (res.ok) {
        setIsInWishlist(true);
        toast.success("Added to wishlist");
      }
    }

    if (isInWishlist) {
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
        setIsInWishlist(false);
        toast.success("Deleted from wishlist");
      }
    }
  };

  useEffect(() => {
    const inWishlist = wishlist.filter((el) => el.slug === product.slug);

    if (inWishlist.length) {
      setIsInWishlist(true);
    }
  }, []);

  return main ? (
    <button
      onClick={handleClick}
      className="flex justify-center items-center gap-2 w-full border py-1 max-w-[223px] border-black rounded-md"
    >
      <HeartIcon isInWishlist={isInWishlist} />
      <p>{isInWishlist ? "In Wishlist" : "Add to Wishlist"}</p>
    </button>
  ) : (
    <button
      className="absolute top-4 right-4 p-[6px] rounded-full bg-white "
      onClick={handleClick}
    >
      <HeartIcon isInWishlist={isInWishlist} />
    </button>
  );
};

export default WishlistButton;
