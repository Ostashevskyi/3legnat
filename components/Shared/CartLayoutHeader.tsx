"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CartSlider from "../Sliders/CartSlider";

const CartLayoutHeader = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setTitle("Cart");
        break;
      case "/checkout":
        setTitle("Check Out");
        break;
      case "/oreder-complete":
        setTitle("Complete!");
        break;
      default:
        break;
    }
  }, []);

  return (
    <section className="p-mobile text-center max-w-[832px] m-auto">
      <h3 className="mb-6">Cart</h3>
      <CartSlider title={title} />
    </section>
  );
};

export default CartLayoutHeader;
