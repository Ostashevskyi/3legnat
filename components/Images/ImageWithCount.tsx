import Image from "next/image";
import React from "react";

const ImageWithCount = ({ count }: { count: number }) => {
  return (
    <div className="relative w-fit">
      <Image src={"/chair.png"} alt="chair" width={80} height={96} />
      <div className="h-4 w-4 bg-black text-white flex justify-center items-center py-0.5 px-1 rounded-full absolute -top-1.5 -right-1.5">
        <p className="text-[10px] leading-[10px]">{count}</p>
      </div>
    </div>
  );
};

export default ImageWithCount;
