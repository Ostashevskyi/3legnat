"use client";

import React, { useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import CartSummary from "@/containers/cart/cart-summary";

import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  calculateTotalPrice,
  fetchShoppingCart,
  fillCompletedStages,
  setTotalPrice,
} from "@/redux/slices/cartSlice";

import CartCard from "@/components/Cards/CartCard";
import Empty from "@/components/Shared/Empty";

const Cart = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { cart, deliveryPrice, totalPrice } = useAppSelector(
    (state) => state.cartReducer
  );

  useEffect(() => {
    dispatch(fetchShoppingCart(session?.user.user_id));
    dispatch(fillCompletedStages([]));
  }, [dispatch, session]);

  useEffect(() => {
    if (cart.length) {
      const total = cart
        ?.map((product) => product.total_price)
        ?.reduce((prev, next) => prev + next);

      dispatch(setTotalPrice(total));
      dispatch(calculateTotalPrice(total));
    }
  }, [cart.length, deliveryPrice]);

  const CardSection = useMemo(() => {
    const sortedArray = cart.slice().sort((a, b) => a.id - b.id);

    return sortedArray.map((product, index) => (
      <CartCard product={product} user_id={session?.user.user_id} key={index} />
    ));
  }, [cart]);

  const SummarySection = useMemo(() => {
    return <CartSummary />;
  }, [deliveryPrice, cart, totalPrice]);

  return (
    <section className="p-mobile lg:flex justify-between items-start gap-16 max-container">
      {!cart.length && <Empty section="cart" />}
      {!!cart.length && (
        <div className="flex-1 md:mb-12">
          <div className="grid grid-cols-5 flex-1 semibold-body-2 border-b pb-6 semibold-body-2">
            <p className="col-span-2">Product</p>
            <p className="hidden md:block">Quantity</p>
            <p className="hidden md:block">Price</p>
            <p className="hidden md:block">Subtotal</p>
          </div>
          <div>{CardSection}</div>
        </div>
      )}

      {SummarySection}
    </section>
  );
};

export default Cart;
