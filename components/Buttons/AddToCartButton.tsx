"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

type AddToCartProps = {
  title: string;
  price: number;
  slug: string;
  user_id: string;
};

const AddToCartButton = ({ title, price, slug, user_id }: AddToCartProps) => {
  const { color } = useAppSelector((state) => state.cartReducer);

  const handleClick = () => {
    try {
      fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          slug,
          color,
          quantity: 1,
          user_id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="w-full min-h-12 bg-neutral_07 rounded-md text-white"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
