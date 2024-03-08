import Link from "next/link";
import React from "react";
import DarkButton from "../Buttons/DarkButton";

const Empty = ({ section }: { section: string }) => {
  return (
    <div>
      <p className="my-10 text-center bold-body-1">Your {section} is empty</p>
      <div className="mb-20 lg:mb-0">
        <Link href={"/shop"}>
          <DarkButton>To catalog</DarkButton>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
