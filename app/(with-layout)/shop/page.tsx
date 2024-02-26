import ShowMoreButton from "@/components/Buttons/ShowMoreButton";
import Newsletter from "@/components/Newsletter";
import Filters from "@/containers/shop/filters";
import ProductsSection from "@/containers/shop/products";
import ShopHeader from "@/containers/shop/shop-header";
import React from "react";

const Shop = () => {
  return (
    <section>
      <ShopHeader />
      <Filters />
      <ProductsSection />
      <div className="flex justify-center mb-20 md:24">
        <ShowMoreButton>Show More</ShowMoreButton>
      </div>
      <Newsletter />
    </section>
  );
};

export default Shop;
