"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const ReviewsFilterDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (sort: string) => {
    const params = new URLSearchParams(searchParams);

    if (sort) {
      params.set("reviewSort", sort);
    } else {
      params.delete("reviewSort");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      defaultValue={"newest"}
      onChange={(e) => handleChange(e.target.value)}
      className="border w-full py-3 px-4 rounded-md mb-10 lg:max-w-[256px]"
    >
      <option value="">Newest</option>
      <option value="higher">Higher rating</option>
      <option value="lower">Lower rating </option>
    </select>
  );
};

export default ReviewsFilterDropdown;
