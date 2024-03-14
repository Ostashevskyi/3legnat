import React from "react";
import AccordionItem from "./AccordionItem";
import Reviews from "@/containers/product-page/reviews";
import { TProduct } from "@/types/ProductType";

export type ProductPageAccordionProps = {
  additionalInfo: string;
  product: TProduct;
};

const ProductPageAccordion = ({
  additionalInfo,
  product,
}: ProductPageAccordionProps) => {
  return (
    <div className="mb-20">
      <AccordionItem title="Additional Info">
        <div
          dangerouslySetInnerHTML={{ __html: additionalInfo }}
          className="child-p:leading-28 child-p:font-medium child-p:font-poppins"
        />
      </AccordionItem>
      <AccordionItem title="Reviews">
        <Reviews product={product} />
      </AccordionItem>
    </div>
  );
};

export default ProductPageAccordion;
