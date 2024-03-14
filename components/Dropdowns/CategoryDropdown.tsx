import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const CategoryDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <label
        htmlFor="rooms"
        className="uppercase semibold-body-2 text-neutral_04"
      >
        Categories
      </label>
      <select
        id="rooms"
        defaultValue={searchParams.get("category")?.toString()}
        className="border rounded-md h-12 px-4 text-neutral_04 outline outline-neutral_04"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value={""}>All Room</option>
        <option value={"living-room"}>Living Room</option>
        <option value={"bedroom"}>Bedroom</option>
        <option value={"bathroom"}>Bathroom</option>
        <option value={"dinning"}>Dinning</option>
        <option value={"outdoor"}>Outdoor</option>
      </select>
    </div>
  );
};

export default CategoryDropdown;
