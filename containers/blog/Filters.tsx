"use client";
import FiltersToolBar from "@/components/Buttons/FiltersToolBar";
import BlogFilterDropdown from "@/components/Dropdowns/BlogFilterDropdown";
import React from "react";

const Filters = () => {
  return (
    <div className="flex gap-8 items-center">
      <BlogFilterDropdown />
      <FiltersToolBar />
    </div>
  );
};

export default Filters;
