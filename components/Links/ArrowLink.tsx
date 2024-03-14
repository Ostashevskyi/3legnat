import React from "react";
import Link from "next/link";

const ArrowLink = ({
  color,
  text,
  href,
}: {
  color: string;
  text: string;
  href: string;
}) => {
  return (
    <Link href={`/${href}`} className={`${color} buttonS-text hover:underline`}>
      {text} →
    </Link>
  );
};

export default ArrowLink;
