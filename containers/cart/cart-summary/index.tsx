"use client";
import React from "react";

import RadioInput from "@/components/Inputs/RadioInput";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import DarkButton from "@/components/Buttons/DarkButton";

const CartSummary = () => {
  const { totalPriceWithDelivery, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );

  return (
    <section className="p-4 border border-black rounded-md mb-20 flex-1 max-w-[413px]">
      <p className="semibold-body-2 mb-4">Cart summary</p>
      <div className="flex flex-col gap-3 mb-4">
        <RadioInput title="Free Shipping" price={0} checked />
        <RadioInput title="Express shipping" price={15} />
        <RadioInput title="Package Delivery" price={30} />
      </div>
      <div>
        <div className="flex justify-between bold-caption-1 border-b pb-4 mb-3">
          <p>Subtotal</p>
          <p>{totalPrice ? `${totalPrice?.toFixed(2)}` : "$0.00"}</p>
        </div>
        <div className="flex justify-between bold-body-2 mb-6">
          <p>Total</p>
          <p>${totalPriceWithDelivery?.toFixed(2)}</p>
        </div>
        <Link href="/checkout">
          <DarkButton>Checkout</DarkButton>
        </Link>
      </div>
    </section>
  );
};

export default CartSummary;
