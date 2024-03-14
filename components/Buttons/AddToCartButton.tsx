"use client";
import { fetchShoppingCart } from "@/redux/slices/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { TCartProduct } from "@/types/CartProduct";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

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
  const [loading, setLoading] = useState<boolean>();
  const [inCart, setInCart] = useState<TCartProduct[]>();
  const { color } = useAppSelector((state) => state.cartReducer);
  const { url } = mainPhoto;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!user_id) {
          return;
        }

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
          dispatch(fetchShoppingCart(user_id));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, [loading, color]);

  const handleClick = async () => {
    try {
      if (!user_id) {
        toast.info("You must be logged in to add to cart");
        return;
      }
      setLoading(true);
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
        toast.success("Added to your cart");
      }
    } catch (error) {
      console.log(error);
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
    </div>
  );
};

export default AddToCartButton;
