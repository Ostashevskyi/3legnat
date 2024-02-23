"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const PriceDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (price: string) => {
    const params = new URLSearchParams(searchParams);

    if (price) {
      params.set("price", price);
    } else {
      params.delete("price");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2 mb-8">
      <label
        htmlFor="price"
        className="uppercase semibold-body-2 text-neutral_04"
      >
        Price
      </label>
      <select
        name="price"
        onChange={(e) => handleChange(e.target.value)}
        className="border rounded-md h-12 px-4 text-neutral_04 outline outline-neutral_04"
        defaultValue={searchParams.get("price")?.toString()}
      >
        <option value={""}>All Price</option>
        <option value={"99.99"}>$0.00 - 99.99</option>
        <option value={"199.99"}>$100.00 - 199.99</option>
        <option value={"299.99"}>$200.00 - 299.99</option>
        <option value={"399.99"}>$300.00 - 399.99</option>
        <option value={"400.00+"}>$400.00+</option>
      </select>
    </div>
  );
};

export default PriceDropdown;
