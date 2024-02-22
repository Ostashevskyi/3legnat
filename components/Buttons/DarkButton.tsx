import React from "react";

const DarkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full min-h-12 bg-neutral_07 rounded-md text-white ">
      {children}
    </button>
  );
};

export default DarkButton;
