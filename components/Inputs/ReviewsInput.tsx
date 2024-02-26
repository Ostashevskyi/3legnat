import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

const ReviewsInput = () => {
  return (
    <div className="flex justify-around py-4 border rounded-lg lg:justify-between lg:px-4">
      <input
        placeholder="Share your thoughts"
        className="outline-none text-neutral_04"
      />
      <div className="bg-black flex items-center justify-center max-w-8 h-8 rounded-full flex-1">
        <ArrowIcon color="#fff" />
      </div>
    </div>
  );
};

export default ReviewsInput;
