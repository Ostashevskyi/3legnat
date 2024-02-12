import React from "react";
import Link from "next/link";

const ShopNow = ({ color }: { color: string }) => {
  return (
    <Link
      href={"/"}
      className={`${color} buttonXS-text text-secondary_blue hover:underline`}
    >
      Shop Now →
    </Link>
  );
};

export default ShopNow;
