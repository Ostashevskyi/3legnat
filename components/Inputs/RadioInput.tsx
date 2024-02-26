import React from "react";

const RadioInput = ({ title, price }: { title: string; price?: string }) => {
  return (
    <div className={`flex gap-3 py-3 px-4 border border-black rounded-md`}>
      <input type="radio" name="option" className="accent-black" />
      <label
        htmlFor="option"
        className="flex justify-between flex-1 semibold-caption-1"
      >
        <p>{title}</p>
        <p>{price}</p>
      </label>
    </div>
  );
};

export default RadioInput;
