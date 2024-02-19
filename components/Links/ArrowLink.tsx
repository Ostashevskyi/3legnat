import React from "react";
import Link from "next/link";

const ArrowLink = ({ color, text }: { color: string; text: string }) => {
  return (
    <Link href={"/"} className={`${color} buttonS-text hover:underline`}>
      {text} →
    </Link>
  );
};

export default ArrowLink;
