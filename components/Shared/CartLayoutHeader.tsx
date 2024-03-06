"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CartSlider from "../Sliders/CartSlider";

export type TInfo = {
  title: string;
  completed: boolean;
};

const CartLayoutHeader = () => {
  const pathname = usePathname();
  const [info, setInfo] = useState<TInfo>({ title: "", completed: false });

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setInfo({ title: "Shopping cart", completed: false });
        break;
      case "/checkout":
        setInfo({ title: "Check Out", completed: false });
        break;
      case "/order-complete":
        setInfo({ title: "Complete!", completed: false });
        break;
      default:
        break;
    }
  }, []);

  return (
    <section className="p-mobile text-center max-w-[832px] m-auto">
      <h3 className="mb-6">{info.title}</h3>
      <CartSlider title={info.title} completed={info.completed} />
    </section>
  );
};

export default CartLayoutHeader;
