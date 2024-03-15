"use client";

import React from "react";

import CategoryDropdown from "@/components/Dropdowns/CategoryDropdown";
import FiltersToolBar from "@/components/Buttons/FiltersToolBar";

const Filters = () => {
  return (
    <div className="p-mobile max-container">
      <div className="md:flex md:items-center md:justify-between mb-16">
        <div className="md:flex md:gap-6">
          <CategoryDropdown />
        </div>
        <div className="py-2 border-y flex justify-between items-center md:gap-8 md:border-none">
          <FiltersToolBar />
        </div>
      </div>
    </div>
  );
};

export default Filters;
