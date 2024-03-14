"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarsRating from "./StarsRating";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { fetchReview } from "@/redux/slices/reviewSlice";
import { TProduct } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { TReview } from "@/types/Review";

const ReviewTemplate = ({ product }: { product: TProduct }) => {
  const { reviews } = useAppSelector((state) => state.reviewReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [filteredReviews, setFilteredReviews] = useState<TReview[]>();

  useEffect(() => {
    dispatch(fetchReview(product.title));
  }, [dispatch]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get("reviewSort");

    switch (filter) {
      case "higher":
        const higherReview = reviews
          .slice()
          .sort((a, b) => b.rating - a.rating);
        setFilteredReviews(higherReview);
        break;
      case "lower":
        const lowerReview = reviews.slice().sort((a, b) => a.rating - b.rating);
        setFilteredReviews(lowerReview);
        break;
      default:
        setFilteredReviews(reviews.slice().reverse());
        break;
    }
  }, [searchParams, reviews]);

  return (
    <section className=" mb-6 flex flex-col gap-6">
      {filteredReviews?.map((el, index) => {
        const { rating, review, username, user_image } = el;
        return (
          <div key={index} className="border-b pb-4">
            <div className="flex gap-4 mb-4">
              <Image src={user_image} alt="alt" width={72} height={72} />
              <div className="flex flex-col gap-4">
                <p className="semibold-body-1">{username}</p>
                <StarsRating readOnly rating={rating} />
              </div>
            </div>
            <p className="regular-body-2 text-neutral_05">{review}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ReviewTemplate;
