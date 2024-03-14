import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SortByDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);

    if (sortBy) {
      params.set("sortBy", sortBy);
    } else {
      params.delete("sortBy");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <select
        className="outline-none"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get("sortBy")?.toString()}
      >
        <option value={""} className="semibold-body-2">
          Sort by
        </option>
        <option value={"price-up"}>Price ↑</option>
        <option value={"price-down"}>Price ↓</option>
      </select>
    </div>
  );
};

export default SortByDropdown;
