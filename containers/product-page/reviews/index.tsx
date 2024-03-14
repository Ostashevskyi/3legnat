import ShowMoreButton from "@/components/Buttons/ShowMoreButton";
import ReviewsFilterDropdown from "@/components/Dropdowns/ReviewsFilterDropdown";
import ReviewsInput from "@/components/Inputs/ReviewsInput";
import ReviewTemplate from "@/components/Shared/ReviewTemplate";
import { TProduct } from "@/types/ProductType";
import React from "react";

const Reviews = ({ product }: { product: TProduct }) => {
  return (
    <section>
      <div className="mb-8">
        <div className="mb-8">
          <h6 className="mb-6">Customer Reviews</h6>
        </div>
        <ReviewsInput product={product} />
      </div>
      <div className="lg:flex lg:justify-between">
        <h6 className="mb-4">Reviews</h6>
        <ReviewsFilterDropdown />
      </div>
      <ReviewTemplate product={product} />
    </section>
  );
};

export default Reviews;
