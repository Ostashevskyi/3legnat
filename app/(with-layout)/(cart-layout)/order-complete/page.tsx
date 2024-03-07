import DarkButton from "@/components/Buttons/DarkButton";
import ImageWithCount from "@/components/Images/ImageWithCount";
import { getOrder } from "@/hooks/getOrder";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import React from "react";

type TProducts = {
  image: string;
  quantity: number;
};

type TOrderCode = {
  id: number;
  order_code: string;
  date: string;
  total: number;
  products: TProducts[];
  user_id: string;
};

const OrderComplete = async () => {
  const orders = (await getOrder()) as TOrderCode[];
  const order = orders[0];
  const { products } = order;

  const formatedDate = formatDate(order.date);
  console.log(formatedDate);

  return (
    <div className="p-mobile lg:max-w-[738px] m-auto">
      <section className="border rounded-md p-4 mb-20 shadow-sm md:py-20 ">
        <div className="flex flex-col gap-4 mb-10 md:text-center">
          <p className="semibold-body-2 text-neutral_04 md:text-28 md:leading-34 md:tracking-tighter">
            Thank you! 🎉
          </p>
          <h5 className="md:text-40 md:leading-44 md:tracking-tighter">
            Your order has been received
          </h5>
        </div>
        <div className="flex gap-4 mb-10 md:justify-center md:gap-14">
          {products.map((product, index) => (
            <ImageWithCount
              count={product.quantity}
              image={product.image}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 mb-10 md:justify-center ">
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Order code:</p>
            <p className="text-neutral_07">{order.order_code}</p>
          </div>
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Date:</p>
            <p className="text-neutral_07">{formatedDate}</p>
          </div>
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Total:</p>
            <p className="text-neutral_07">${order.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="md:max-w-[203px] md:m-auto">
          <Link href={"/"}>
            <DarkButton rounded>Home</DarkButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OrderComplete;
