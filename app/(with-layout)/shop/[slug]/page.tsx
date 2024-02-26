import React from "react";

import ProductHeader from "@/containers/product-page/header";

import { performRequest } from "@/lib/datocms";
import Link from "next/link";
import ProductInfo from "@/containers/product-page/productInfo";
import Newsletter from "@/components/Newsletter";
import AdditionalInfo from "@/containers/product-page/additionalInfoDesktop";

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
    additionalInfo
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

  const { title, additionalInfo } = product;
  return (
    <div>
      <div className="max-container">
        <div className="flex gap-2 semibold-caption-1 text-black/60 mb-4 p-mobile">
          <Link href={"/"}>{"Home >"}</Link>
          <Link href={"/shop"}>{"Shop >"}</Link>
          <p className="text-black/90">{title}</p>
        </div>
        <div className="lg:flex xl:gap-16">
          <ProductHeader productInfo={product} />
          <ProductInfo productInfo={product} />
        </div>
        <div className="hidden lg:block p-mobile mb-10">
          <AdditionalInfo additionalInfo={additionalInfo} />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default ProductPage;
