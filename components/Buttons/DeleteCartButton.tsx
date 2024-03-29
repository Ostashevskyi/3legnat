"use client";
import { TCartProduct } from "@/types/CartProduct";
import React from "react";
import {
  calculateTotalPrice,
  fetchShoppingCart,
  setTotalPrice,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

const DeleteCartButton = ({
  user_id,
  product,
}: {
  user_id: string | undefined;
  product: TCartProduct;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useAppSelector((state) => state.cartReducer);

  const handleClick = async () => {
    try {
      const { product_name, color } = product;
      const res = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          product_name,
          color,
        }),
      });

      if (res.ok) {
        dispatch(fetchShoppingCart(user_id));

        if (cart.length === 1) {
          dispatch(setTotalPrice(0));
          dispatch(calculateTotalPrice(0));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="lg:semibold-caprion-1 lg:text-neutral_04"
      onClick={handleClick}
    >
      ✖{" "}
      <span className="hidden lg:inline-block lg:semibold-caprion-1 lg:text-neutral_04">
        Remove
      </span>
    </button>
  );
};

export default DeleteCartButton;
