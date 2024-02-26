"use client";
import React, { useState } from "react";

const QuantityButton = ({
  number,
  bg,
}: {
  number: number;
  bg: "white" | "gray";
}) => {
  const [counter, setCounter] = useState(number);

  return (
    <div
      className={`flex ${
        bg === "gray" ? "bg-neutral_02" : "bg-white border border-black"
      } gap-3 max-w-20 py-1.5 justify-center items-center rounded-md text-semibold-caption-2 flex-1`}
    >
      <button
        className="disabled:text-gray-400"
        disabled={counter === 1}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default QuantityButton;
