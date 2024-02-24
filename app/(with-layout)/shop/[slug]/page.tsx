import React from "react";

import ProductHeader from "@/containers/product-page/header";

import { performRequest } from "@/lib/datocms";
import Link from "next/link";
import ProductInfo from "@/containers/product-page/productInfo";

const PRODUCT = `
query Product($slug: String) {
  product(filter: {slug: {eq: $slug}}) {
    title
    id
    description
    mainPhoto {
      url
      height
      width
    }
    additionalPhoto {
      url
      height
      width
    }
    colors {
      alt
      customData
      url
      width
      height
    }
    measurements
    oldPrice
    onsale
    discountNumber
    price
    category
    slug
    sku
  }
}`;

const ProductPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const {
    data: { product },
  } = await performRequest({
    query: PRODUCT,
    variables: { slug: slug },
  });

  const { title } = product;
  return (
    <div className="max-container">
      <div className="flex gap-2 semibold-caption-1 text-black/60 mb-4 p-mobile">
        <Link href={"/"}>{"Home >"}</Link>
        <Link href={"/shop"}>{"Shop >"}</Link>
        <p className="text-black/90">{title}</p>
      </div>
      <div className="lg:flex">
        <ProductHeader productInfo={product} />
        <ProductInfo productInfo={product} />
      </div>
    </div>
  );
};

export default ProductPage;
