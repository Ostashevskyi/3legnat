"use client";

import React, { useEffect, useState } from "react";

import PriceDropdown from "@/components/Dropdowns/PriceDropdown";
import SortByDropdown from "@/components/Dropdowns/SortByDropdown";
import CategoryDropdown from "@/components/Dropdowns/CategoryDropdown";
import FiltersToolBar from "@/components/Buttons/FiltersToolBar";
import ProductCard from "@/components/Cards/ProductCard";
import { useSearchParams } from "next/navigation";
import ShowMoreButton from "@/components/Buttons/ShowMoreButton";

const Filters = () => {
  const [grid, setGrid] = useState<unknown>();

  const searchParams = useSearchParams();

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    <div className="p-mobile max-container">
      <div className="md:flex md:items-center md:justify-between mb-16">
        <div className="md:flex md:gap-6">
          <CategoryDropdown />
          <PriceDropdown />
        </div>
        <div className="py-2 border-y flex justify-between items-center md:gap-8 md:border-none">
          <SortByDropdown />
          <FiltersToolBar />
        </div>
      </div>

      <div
        className={`mb-8 grid gap-6 justify-items-center md:mb-20
        ${grid === null && "md:grid-cols-3 grid-cols-2"}
      ${grid === "row" && "grid-cols-2"} 
      ${grid === "grid4" && "grid-cols-4"} 
      ${grid === "grid9" && "grid-cols-6"} 
      `}
      >
        {/* temporary */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center mb-20 md:24">
        <ShowMoreButton>Show More</ShowMoreButton>
      </div>
    </div>
  );
};

export default Filters;
