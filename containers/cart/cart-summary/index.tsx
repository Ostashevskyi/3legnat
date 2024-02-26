import DarkButton from "@/components/Buttons/DarkButton";
import RadioInput from "@/components/Inputs/RadioInput";
import React from "react";

const CartSummary = () => {
  return (
    <section className="p-4 border border-black rounded-md mb-20 flex-1 max-w-[413px]">
      <p className="semibold-body-2 mb-4">Cart summary</p>
      <div className="flex flex-col gap-3 mb-4">
        <RadioInput title="Free Shipping" price="$0.00" />
        <RadioInput title="Free Shipping" price="$15.00" />
        <RadioInput title="Free Shipping" price="%21.00" />
      </div>
      <div>
        <div className="flex justify-between bold-caption-1 border-b pb-4 mb-3">
          <p>Subtotal</p>
          <p>$1234.00</p>
        </div>
        <div className="flex justify-between bold-body-2 mb-6">
          <p>Total</p>
          <p>$1234.00</p>
        </div>
        <DarkButton>Checkout</DarkButton>
      </div>
    </section>
  );
};

export default CartSummary;
