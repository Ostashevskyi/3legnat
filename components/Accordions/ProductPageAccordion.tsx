import React from "react";
import AccordionItem from "./AccordionItem";
import Reviews from "@/containers/product-page/reviews";

export type ProductPageAccordionProps = {
  additionalInfo: string;
};

const ProductPageAccordion = ({
  additionalInfo,
}: ProductPageAccordionProps) => {
  return (
    <div className="mb-20">
      <AccordionItem title="Additional Info">
        <div
          dangerouslySetInnerHTML={{ __html: additionalInfo }}
          className="child-p:leading-28 child-p:font-medium child-p:font-poppins"
        />
      </AccordionItem>
      <AccordionItem title="Reviews (0)">
        <Reviews />
      </AccordionItem>
    </div>
  );
};

export default ProductPageAccordion;
