import Image from "next/image";
import React from "react";

const WishlistButton = () => {
  return (
    <button className="flex justify-center items-center gap-2 w-full border py-1 max-w-[223px] border-black rounded-md">
      <Image src={"/icons/heart.svg"} alt="heart" width={16} height={16} />
      <p>Wishlist</p>
    </button>
  );
};

export default WishlistButton;
