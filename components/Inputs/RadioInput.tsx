"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setDeliveryPrice } from "@/redux/slices/cartSlice";
import { useSession } from "next-auth/react";

const RadioInput = ({
  title,
  price,
  checked,
}: {
  title: string;
  price?: number;
  checked?: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession();

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeliveryPrice(+e.target.value));

    try {
      const res = await fetch("/api/cart/delivery", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: session?.user.user_id,
          delivery_price: price,
        }),
      });

      if (!res.ok) {
        throw Error("Error during a change delivery method");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`flex gap-3 py-3 px-4 border border-black rounded-md`}>
      <input
        type="radio"
        name="option"
        value={price}
        className="accent-black"
        defaultChecked={checked}
        onChange={handleClick}
      />
      <label
        htmlFor="option"
        className="flex justify-between flex-1 semibold-caption-1"
      >
        <p>{title}</p>
        <p>{price && price >= 0 ? `+${price?.toFixed(2)}$` : ""}</p>
      </label>
    </div>
  );
};

export default RadioInput;
