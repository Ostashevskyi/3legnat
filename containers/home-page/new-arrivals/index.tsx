import ArrowLink from "@/components/Links/ArrowLink";
import ProductCardsSlider from "@/components/Sliders/ProductCardsSlider";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="p-mobile max-container">
      <section className="flex justify-between items-end mb-12">
        <h4>
          New <br /> Arrivals
        </h4>
        <ArrowLink color="#000000" text="More Products" />
      </section>
      <ProductCardsSlider />
    </div>
  );
};

export default NewArrivals;
