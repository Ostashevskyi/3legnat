import React from "react";

const DarkButton = ({
  children,
  rounded,
  handleClick,
}: {
  children: React.ReactNode;
  rounded?: boolean;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`w-full min-h-12 bg-neutral_07 ${
        rounded ? "rounded-full" : "rounded-md"
      } text-white`}
    >
      {children}
    </button>
  );
};

export default DarkButton;
