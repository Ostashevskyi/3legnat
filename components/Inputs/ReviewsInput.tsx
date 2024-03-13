"use client";
import React, { useState } from "react";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating as ReactRating } from "@smastrom/react-rating";

import ArrowIcon from "../Icons/ArrowIcon";

import ErrorMessage from "../Shared/ErrorMessage";
import { StarsStyles } from "../Shared/StarsRating";

import { TReviewFormSchema, reviewFormSchema } from "@/lib/zodSchema/review";

import { AppDispatch } from "@/redux/store";
import { fetchReview } from "@/redux/slices/reviewSlice";

import { TProduct } from "@/types/ProductType";

const ReviewsInput = ({ product }: { product: TProduct }) => {
  const { data: session } = useSession();
  const [rating, setRating] = useState<number>(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TReviewFormSchema>({ resolver: zodResolver(reviewFormSchema) });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: TReviewFormSchema) => {
    const { review } = data;
    try {
      if (!session) {
        toast.info("You need to be registered to leave a feedback");
        return;
      }

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          review,
          product: product?.title,
          email: session?.user.email,
          username: session?.user.username,
          user_id: session?.user.user_id,
          user_image: session?.user.image,
        }),
      });

      if (res.ok) {
        reset();
        dispatch(fetchReview(product.title));
        toast.success("Your review has been successfully added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <ReactRating
          style={{ maxWidth: 80 }}
          itemStyles={StarsStyles}
          value={rating}
          onChange={setRating}
          isRequired
        />
      </div>

      <div className="flex justify-around py-4 border rounded-lg sm:justify-between sm:px-4">
        <div>
          <input
            {...register("review")}
            placeholder="Share your thoughts"
            className="outline-none text-neutral_04"
          />
          {errors.review && (
            <ErrorMessage>{errors.review.message}</ErrorMessage>
          )}
        </div>
        <div className="bg-black flex items-center justify-center max-w-8 h-8 rounded-full flex-1 lg:hidden">
          <button>
            <ArrowIcon color="#fff" />
          </button>
        </div>
        <div className="hidden lg:block w-[175px]">
          <button className="w-full border py-1.5 bg-black text-white rounded-full">
            Write Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewsInput;
