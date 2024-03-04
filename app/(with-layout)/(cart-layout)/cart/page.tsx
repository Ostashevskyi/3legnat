import CartCard from "@/components/Cards/CartCard";
import CartSummary from "@/containers/cart/cart-summary";
import React from "react";

const Cart = () => {
  return (
    <section className="p-mobile lg:flex justify-between items-start gap-16 max-container">
      <div className="flex-1 md:mb-12">
        <div className="grid grid-cols-5 flex-1 semibold-body-2 border-b pb-6 semibold-body-2">
          <p className="col-span-2">Product</p>
          <p className="hidden md:block">Quantity</p>
          <p className="hidden md:block">Price</p>
          <p className="hidden md:block">Subtotal</p>
        </div>
      </div>
      <CartSummary />
    </section>
  );
};

export default Cart;
