"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { generateOrderCode } from "@/utils/generateOrderCode";
import { Prisma } from "@prisma/client";

const PlaceOrderButton = ({ user_id }: { user_id: string | undefined }) => {
  const { totalPriceWithDiscount, cart } = useAppSelector(
    (state) => state.cartReducer
  );
  const handleClick = async () => {
    const order_code = generateOrderCode();
    const total = totalPriceWithDiscount;

    const products = cart?.map((product) => ({
      image: product.photoUrl,
      quantity: product.quantity,
    })) as Prisma.JsonArray;

    if (products.length) {
      try {
        const res = await fetch("/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_code,
            total,
            products,
            user_id,
          }),
        });

        if (!res.ok) {
          throw Error("Error during generating a order");
        }

        if (res.ok) {
          const res = await fetch("/api/cart", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id,
            }),
          });

          if (!res.ok) {
            throw Error("Error during delete a cart");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <button
      className="w-full min-h-12 bg-neutral_07 rounded-md text-white"
      onClick={handleClick}
    >
      Place Order
    </button>
  );
};

export default PlaceOrderButton;
