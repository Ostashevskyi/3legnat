"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCouponsSchema, couponsSchema } from "@/lib/zodSchema/coupons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchShoppingCart } from "@/redux/slices/cartSlice";

type TCoupon = {
  id: number;
  title: string;
  discount_amount: number;
};

const CouponForm = ({ user_id }: { user_id: string | undefined }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TCouponsSchema>({ resolver: zodResolver(couponsSchema) });
  const [coupons, setCoupons] = useState<TCoupon[]>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const res = await fetch("/api/coupons", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: {
            revalidate: 10,
          },
        });

        const { coupons } = await res.json();

        setCoupons(coupons);

        if (!res.ok) {
          throw Error("Error during fetching a coupons");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoupons();
  }, []);

  const onSubmit = async (data: TCouponsSchema) => {
    const { title } = data;

    const validCoupon = coupons?.filter((coupon) => coupon.title === title)[0];
    if (validCoupon) {
      try {
        const { title, discount_amount } = validCoupon;
        const res = await fetch("/api/cart/coupon", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            discount_amount,
            user_id,
          }),
        });

        if (!res.ok) {
          throw Error("Error");
        }

        if (res.ok) {
          dispatch(fetchShoppingCart(user_id));
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title")}
        type="text"
        placeholder="Coupon"
        className="outline-none py-3 px-4 border rounded-md max-w-[173px]"
      />
      <div className="flex-1 ">
        <button
          className={`${
            isSubmitting ? "bg-neutral_03" : "bg-black"
          } w-full min-h-12 text-white rounded-md px-5`}
        >
          <input
            type="submit"
            value={`${isSubmitting ? "Submitting" : "Apply"}`}
          />
        </button>
      </div>
    </form>
  );
};

export default CouponForm;
