"use client";
import { fillCompletedStages } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ImageWithCount = ({ count, image }: { count: number; image: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fillCompletedStages(["Cart", "Checkout"]));
  }, [dispatch]);

  return (
    <div className="relative w-fit">
      <Image src={image} alt="order_item" width={80} height={96} />
      <div className="h-4 w-4 bg-black text-white flex justify-center items-center py-0.5 px-1 rounded-full absolute -top-1.5 -right-1.5">
        <p className="text-[10px] leading-[10px]">{count}</p>
      </div>
    </div>
  );
};

export default ImageWithCount;
