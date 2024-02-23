import React, { useEffect, useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import FilterLine from "@/components/Icons/FilterLine";
import FilterGrid9 from "@/components/Icons/FilterGrid9";
import FilterGrid4 from "@/components/Icons/FilterGrid4";

const FiltersToolBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [activeButton, setIsActive] = useState<unknown>();

  useEffect(() => {
    setIsActive(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  const handleClick = (buttonID: string) => {
    const params = new URLSearchParams(searchParams);

    if (params.get("grid") === buttonID) {
      params.delete("grid");
    } else if (buttonID) {
      params.set("grid", buttonID);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <div
        className={`${
          activeButton === "grid9" ? "bg-neutral_02" : ""
        } border min-w-[46px] min-h-10 items-center justify-center hidden lg:flex`}
      >
        <button onClick={() => handleClick("grid9")}>
          <FilterGrid9
            color={activeButton === "grid9" ? "#141718" : "#6C7275"}
          />
        </button>
      </div>
      <div
        className={`${
          activeButton === "grid4" ? "bg-neutral_02" : ""
        } border min-w-[46px] min-h-10 items-center justify-center hidden md:flex`}
      >
        <button onClick={() => handleClick("grid4")}>
          <FilterGrid4
            color={activeButton === "grid4" ? "#141718" : "#6C7275"}
          />
        </button>
      </div>
      <div
        className={`${
          activeButton === "row" ? "bg-neutral_02" : ""
        } border min-w-[46px] min-h-10 items-center justify-center hidden md:flex`}
      >
        <button onClick={() => handleClick("row")} className="rotate-90">
          <FilterLine color={activeButton === "row" ? "#141718" : "#6C7275"} />
        </button>
      </div>
      <div
        className={`${
          activeButton === "item" ? "bg-neutral_02" : ""
        } border min-w-[46px] min-h-10 items-center justify-center flex md:hidden`}
      >
        <button onClick={() => handleClick("item")}>
          <FilterLine color={activeButton === "item" ? "#141718" : "#6C7275"} />
        </button>
      </div>
    </div>
  );
};

export default FiltersToolBar;
