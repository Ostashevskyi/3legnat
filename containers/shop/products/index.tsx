import React from "react";
import CardSection from "./CardSection";
import getProducts from "@/hooks/getProducts";

const ProductsSection = async () => {
  const { allProducts } = await getProducts();
  return <CardSection data={allProducts} />;
};

export default ProductsSection;
