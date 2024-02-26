"use client";

import React from "react";

import PriceDropdown from "@/components/Dropdowns/PriceDropdown";
import SortByDropdown from "@/components/Dropdowns/SortByDropdown";
import CategoryDropdown from "@/components/Dropdowns/CategoryDropdown";
import FiltersToolBar from "@/components/Buttons/FiltersToolBar";

const Filters = () => {
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
    </div>
  );
};

export default Filters;
