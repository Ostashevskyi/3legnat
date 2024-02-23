import Newsletter from "@/containers/home-page/newsletter";
import Filters from "@/containers/shop/filters";
import ShopHeader from "@/containers/shop/shop-header";
import React from "react";

const Shop = () => {
  return (
    <section>
      <ShopHeader />
      <Filters />
      <Newsletter />
    </section>
  );
};

export default Shop;
