import React from "react";
import CardSection from "./CardSection";
import getProducts from "@/hooks/getProducts";
import { getWishlist } from "@/hooks/getWishlist";

const ProductsSection = async () => {
  const { allProducts } = await getProducts();
  const wishlist = await getWishlist();

  return <CardSection data={allProducts} wishlist={wishlist} />;
};

export default ProductsSection;
