import React from "react";

import Filters from "@/containers/shop/filters";
import ShopHeader from "@/containers/shop/shop-header";
import ProductsSection from "@/containers/shop/products";

import Newsletter from "@/components/Newsletter";

const Shop = () => {
  return (
    <section>
      <ShopHeader />
      <Filters />
      <ProductsSection />
      <Newsletter />
    </section>
  );
};

export default Shop;
