import React from "react";

import { TProduct } from "@/types/ProductType";

import ProductPageSlider from "@/components/Sliders/ProductPageSlider";

const ProductHeader = ({ productInfo }: { productInfo: TProduct }) => {
  const { additionalPhoto, mainPhoto } = productInfo;

  const allPhotos = [mainPhoto, ...additionalPhoto];

  return <ProductPageSlider photos={allPhotos} />;
};

export default ProductHeader;
