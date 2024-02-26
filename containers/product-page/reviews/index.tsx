import ShowMoreButton from "@/components/Buttons/ShowMoreButton";
import ReviewsFilterDropdown from "@/components/Dropdowns/ReviewsFilterDropdown";
import ReviewsInput from "@/components/Inputs/ReviewsInput";
import ReviewTemplate from "@/components/Shared/ReviewTemplate";
import StarsRating from "@/components/Shared/StarsRating";
import React from "react";

const Reviews = () => {
  return (
    <section>
      <div className="mb-8">
        <div className="mb-8">
          <h6 className="mb-6">Customer Reviews</h6>
          <StarsRating readOnly={false} />
        </div>
        <ReviewsInput />
      </div>
      <div>
        <h6 className="mb-4">0 Reviews</h6>
        <ReviewsFilterDropdown />
        <ReviewTemplate />
      </div>
      <div className="flex justify-center">
        <ShowMoreButton>Load More</ShowMoreButton>
      </div>
    </section>
  );
};

export default Reviews;
