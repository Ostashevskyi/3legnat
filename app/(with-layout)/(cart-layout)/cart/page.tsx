"use client";
import CartCard from "@/components/Cards/CartCard";
import CartSummary from "@/containers/cart/cart-summary";
import { fetchShoppingCart } from "@/redux/slices/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { TCartProduct } from "@/types/CartProduct";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { cart, status } = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchShoppingCart(session?.user.user_id));
  }, [dispatch, session]);

  const CardSection = useMemo(() => {
    return cart.map((product, index) => (
      <CartCard product={product} user_id={session?.user.user_id} key={index} />
    ));
  }, [cart]);

  return (
    <section className="p-mobile lg:flex justify-between items-start gap-16 max-container">
      <div className="flex-1 md:mb-12">
        <div className="grid grid-cols-5 flex-1 semibold-body-2 border-b pb-6 semibold-body-2">
          <p className="col-span-2">Product</p>
          <p className="hidden md:block">Quantity</p>
          <p className="hidden md:block">Price</p>
          <p className="hidden md:block">Subtotal</p>
        </div>
        {CardSection}
      </div>
      <CartSummary />
    </section>
  );
};

export default Cart;
