"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

const Counter = () => {
  const { cart } = useAppSelector((state) => state.cartReducer);

  return (
    <div className="h-5 w-5 bg-black text-white flex justify-center items-center rounded-full">
      <p className="text-xs font-bold">{cart.length}</p>
    </div>
  );
};

export default Counter;
