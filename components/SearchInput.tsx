import React from "react";

import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="border py-3 px-4 flex gap-2 w-full mb-4 rounded-md border-neutral_07 text-neutral_04">
      <Image alt="search" src={"/icons/search.svg"} width={24} height={24} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
