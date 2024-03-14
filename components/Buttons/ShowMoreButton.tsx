import React from "react";

const ShowMoreButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[163px] h-10 border rounded-2xl border-neutral_07 buttonS-text">
      {children}
    </button>
  );
};

export default ShowMoreButton;
