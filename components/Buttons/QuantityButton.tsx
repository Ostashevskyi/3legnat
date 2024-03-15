"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { TCartProduct } from "@/types/CartProduct";
import { useSession } from "next-auth/react";
import {
  calculateTotalPrice,
  fetchShoppingCart,
  setTotalPrice,
} from "@/redux/slices/cartSlice";

const QuantityButton = ({
  product,
  bg,
}: {
  product: TCartProduct;
  bg: "white" | "gray";
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useAppSelector((state) => state.cartReducer);
  const [counter, setCounter] = useState(product?.quantity);
  const { data: session } = useSession();

  useEffect(() => {
    if (cart.length) {
      const total = cart
        ?.map((product) => product.total_price)
        ?.reduce((prev, next) => prev + next);

      dispatch(setTotalPrice(total));
      dispatch(calculateTotalPrice(total));
    }
  }, [counter, cart]);

  const handleClick = async (type: string) => {
    const user_id = session?.user.user_id;
    const res = await fetch("/api/cart", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: type === "increase" ? counter + 1 : counter - 1,
        product_name: product.product_name,
        price: product.price,
        user_id,
        color: product.color,
      }),
    });

    if (res.ok) {
      dispatch(fetchShoppingCart(session?.user.user_id));
    }
  };

  return (
    <div
      className={`flex ${
        bg === "gray" ? "bg-neutral_02" : "bg-white border border-black"
      } gap-3 max-w-20 py-1.5 justify-center items-center rounded-md text-semibold-caption-2 flex-1`}
    >
      <button
        className="disabled:text-gray-400"
        disabled={counter === 1}
        onClick={() => {
          setCounter(counter - 1);
          handleClick("decrease");
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          handleClick("increase");
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
