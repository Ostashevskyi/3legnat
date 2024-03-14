"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  calculateTotalPrice,
  calculateTotalPriceWithDiscount,
  fetchShoppingCart,
  fillCompletedStages,
  setDeliveryPrice,
} from "@/redux/slices/cartSlice";

import CouponForm from "@/components/Forms/CouponForm";
import DeleteCouponButton from "@/components/Buttons/DeleteCouponButton";

const OrderSummary = ({ user_id }: { user_id: string | undefined }) => {
  const { cart, totalPriceWithDelivery, totalPriceWithDiscount } =
    useAppSelector((state) => state.cartReducer);
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [totalPrice, setTotalPrice] = useState(0);

  const deliveryPrice = cart[0]?.delivery_price;
  const coupon_title = cart[0]?.coupon_title;
  const coupon_discount = cart[0]?.coupon_discount;

  useEffect(() => {
    if (cart.length) {
      const total = cart
        ?.map((product) => product.total_price)
        ?.reduce((prev, next) => prev + next);

      setTotalPrice(total);
      dispatch(calculateTotalPrice(total));
      dispatch(setDeliveryPrice(cart[0]?.delivery_price));
      dispatch(calculateTotalPriceWithDiscount(coupon_discount));
    }
  }, [cart]);

  useEffect(() => {
    dispatch(fetchShoppingCart(user_id));
    dispatch(fillCompletedStages(["Cart"]));
  }, [dispatch, user_id]);

  return (
    <div className="border border-neutral_04 p-4 rounded-md flex flex-col gap-4 mb-6 max-h-fit">
      <p className="semibold-body-2">Order Summary</p>
      <div className="mb-6">
        {cart.map((product, index) => {
          const { color, price, product_name, quantity, slug, photoUrl } =
            product;
          const totalPrice = price * quantity;
          return (
            <div className="flex gap-4 border-b py-6" key={index}>
              <Link href={`/shop/${product.slug}`}>
                <Image src={photoUrl} alt="chair" width={80} height={96} />
              </Link>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between semibold-caption-1">
                  <Link href={`/shop/${slug}`}>
                    <p className="max-w-[60px]">{product_name}</p>
                  </Link>
                  <p>{quantity}</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between regular-caption-2 text-neutral_04">
                  <p>Color: {color}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CouponForm user_id={session?.user.user_id} />
      {coupon_title && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center pb-3 border-b">
            <div className="flex gap-2 regular-body-2">
              <Image
                alt="coupon"
                src={"/icons/ticket-percent.svg"}
                width={20}
                height={18}
              />
              <p>{coupon_title}</p>
            </div>
            <p className="text-secondary_green semibold-body-2">
              -${coupon_discount?.toFixed(2)}{" "}
              <DeleteCouponButton user_id={session?.user.user_id} />
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pb-3 border-b regular-body-2">
        <p>Shipping</p>
        <p className="text-neutral_07 semibold-body-2">
          ${deliveryPrice?.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between items-center pb-3 border-b regular-body-2">
        <p>Subtotal</p>
        <p className="text-neutral_07 semibold-body-2">
          ${totalPrice?.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between items-center font-bold">
        <p>Total</p>
        <p className="text-neutral_07 ">
          {coupon_title
            ? `$${totalPriceWithDiscount.toFixed(2)}`
            : `$${totalPriceWithDelivery.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
