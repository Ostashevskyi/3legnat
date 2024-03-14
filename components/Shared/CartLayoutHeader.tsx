"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CartSlider from "../Sliders/CartSlider";

export type TInfo = {
  title: string;
};

const CartLayoutHeader = () => {
  const pathname = usePathname();
  const [info, setInfo] = useState<TInfo>({ title: "" });

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setInfo({ title: "Shopping cart" });
        break;
      case "/checkout":
        setInfo({ title: "Checkout" });
        break;
      case "/order-complete":
        setInfo({ title: "Complete!" });
        break;
      default:
        break;
    }
  }, []);

  return (
    <section className="p-mobile text-center max-w-[832px] m-auto">
      <h3 className="mb-6">{info.title}</h3>
      <CartSlider title={info.title} />
    </section>
  );
};

export default CartLayoutHeader;
