import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

const ReviewsInput = () => {
  return (
    <div className="flex justify-around py-4 border rounded-lg sm:justify-between sm:px-4">
      <input
        placeholder="Share your thoughts"
        className="outline-none text-neutral_04"
      />
      <div className="bg-black flex items-center justify-center max-w-8 h-8 rounded-full flex-1 lg:hidden">
        <ArrowIcon color="#fff" />
      </div>
      <div className="hidden lg:block w-[175px]">
        <button className="w-full border py-1.5 bg-black text-white rounded-full">
          Write Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsInput;
