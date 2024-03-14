import ArrowLink from "@/components/Links/ArrowLink";
import ProductCardsSlider from "@/components/Sliders/ProductCardsSlider";
import getProducts from "@/hooks/getProducts";
import { getWishlist } from "@/hooks/getWishlist";
import React from "react";

const NewArrivals = async () => {
  const { allProducts } = await getProducts();
  const wishlist = await getWishlist();

  return (
    <div className="p-mobile max-container">
      <section className="flex justify-between items-end mb-12">
        <h4>
          New <br /> Arrivals
        </h4>
        <ArrowLink color="#000000" text="More Products" href="shop" />
      </section>
      <ProductCardsSlider products={allProducts} wishlist={wishlist} />
    </div>
  );
};

export default NewArrivals;
