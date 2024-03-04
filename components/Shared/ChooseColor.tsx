"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addColor } from "@/redux/slices/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";

type TColor = {
  customData: { color: string };
  alt: string;
  height: number;
  url: string;
  width: number;
};

const ChooseColor = ({ colors }: { colors: TColor[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeColor, setActiveColor] = useState<string>();
  return (
    <div className="mb-12">
      <p className="semibold-body-2 text-neutral_04 mb-2">{"Choose Color >"}</p>
      <p className="regular-body-1 h-10">{activeColor}</p>
      <div className="flex gap-2">
        {colors.map((item, index) => {
          const { customData, alt, height, url, width } = item;
          const { color } = customData;

          return (
            <button
              key={index}
              onClick={() => {
                setActiveColor(color);
                dispatch(addColor(color));
              }}
            >
              <Image
                alt={alt}
                src={url}
                height={height}
                width={width}
                className={`${activeColor === color && "border border-black"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseColor;
