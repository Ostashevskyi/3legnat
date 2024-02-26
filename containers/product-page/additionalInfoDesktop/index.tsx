"use client";
import { ProductPageAccordionProps } from "@/components/Accordions/ProductPageAccordion";
import React, { useMemo, useState } from "react";
import Reviews from "../reviews";

const AdditionalInfo = ({ additionalInfo }: ProductPageAccordionProps) => {
  const [isActive, setIsActive] = useState("");

  const handleClick = (name: string) => {
    setIsActive(name);
  };

  const section = useMemo(() => {
    switch (isActive) {
      case "additional":
        return (
          <div
            dangerouslySetInnerHTML={{ __html: additionalInfo }}
            className="child-p:leading-28 child-p:font-medium child-p:font-poppins"
          />
        );
      case "reviews":
        return <Reviews />;
      default:
        return;
    }
  }, [isActive]);
  return (
    <div>
      <div className="border-b flex gap-20 text-black/50 buttonM-text mb-12">
        <button
          onClick={() => handleClick("additional")}
          className={`relative ${
            isActive === "additional" &&
            "after:absolute after:-bottom-px after:left-0 after:w-full after:h-[0.5px] after:border after:border-black"
          }  `}
        >
          <p>Additional Info</p>
        </button>
        <button
          onClick={() => handleClick("reviews")}
          className={`relative ${
            isActive === "reviews" &&
            "after:absolute after:-bottom-px after:left-0 after:w-full after:h-[0.5px] after:border after:border-black text-neutral_07"
          }  `}
        >
          <p>Reviews</p>
        </button>
      </div>
      {section}
    </div>
  );
};

export default AdditionalInfo;
