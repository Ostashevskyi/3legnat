import React from "react";
import CardSection from "./CardSection";
import { performRequest } from "@/lib/datocms";
import type { TProduct } from "@/types/ProductType";

const PRODUCTS = `
query Products {
  allProducts {
    title
    id
    description
    mainPhoto {
      url
      height
      width
    }
    measurements
    oldPrice
    onsale
    price
    slug
  }
}`;

const ProductsSection = async () => {
  const {
    data: { allProducts },
  } = await performRequest({ query: PRODUCTS });

  return <CardSection data={allProducts} />;
};

export default ProductsSection;
