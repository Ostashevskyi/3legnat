import ProductCard from "@/components/Cards/ProductCard";
import ArrowLink from "@/components/Links/ArrowLink";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="p-mobile">
      <section className="flex justify-between items-end mb-12">
        <h4>
          New <br /> Arrivals
        </h4>
        <ArrowLink color="#000000" text="More Products" />
      </section>
      <div className="flex">
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
