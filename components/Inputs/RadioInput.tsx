"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setDeliveryPrice } from "@/redux/slices/cartSlice";

const RadioInput = ({
  title,
  price,
  checked,
}: {
  title: string;
  price: number;
  checked?: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeliveryPrice(+e.target.value));
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
        <p>+${price?.toFixed(2)}</p>
      </label>
    </div>
  );
};

export default RadioInput;
