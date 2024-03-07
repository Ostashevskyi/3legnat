"use client";
import { useAppSelector } from "@/redux/store";
import { TCartProduct } from "@/types/CartProduct";
import { error } from "console";
import React, { useEffect, useState } from "react";

export type TMainPhoto = {
  url: string;
  width: number;
  height: number;
};

type AddToCartProps = {
  title: string;
  price: number;
  slug: string;
  user_id: string;
  mainPhoto: TMainPhoto;
};

const AddToCartButton = ({
  title,
  price,
  slug,
  user_id,
  mainPhoto,
}: AddToCartProps) => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [inCart, setInCart] = useState<TCartProduct[]>();
  const { color, cart } = useAppSelector((state) => state.cartReducer);
  const { url } = mainPhoto;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart?user_id=${user_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { cart } = await res.json();

        const data: TCartProduct[] = cart;

        if (res.ok) {
          setInCart(
            data.filter((el) => el.color === color && el.product_name === title)
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [color, cart, loading]);

  const handleClick = async () => {
    if (color.length) {
      setLoading(true);
      try {
        const res = await fetch("/api/cart", {
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
            url,
          }),
        });

        if (res.ok) {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Firstly you need to choose a color");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        className={`w-full min-h-12 bg-neutral_07 rounded-md text-white disabled:bg-gray-500`}
        disabled={inCart?.length ? true : false}
        onClick={handleClick}
      >
        {loading
          ? "loading"
          : inCart?.length
          ? "Already in cart"
          : "Add to Cart"}
      </button>
      {error && <p className="text-secondary_red">{error}</p>}
    </div>
  );
};

export default AddToCartButton;
