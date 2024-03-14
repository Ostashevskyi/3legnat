import { TIcon } from "@/types/IconsType";
import React from "react";

const ChevronIcon = ({ color, rotate }: TIcon) => {
  return (
    <svg
      className={rotate}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.27246 9L12.2725 15L18.2725 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
