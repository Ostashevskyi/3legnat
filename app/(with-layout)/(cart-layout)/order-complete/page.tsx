import DarkButton from "@/components/Buttons/DarkButton";
import ImageWithCount from "@/components/Images/ImageWithCount";
import React from "react";

const OrderComplete = () => {
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
          <ImageWithCount count={2} />
          <ImageWithCount count={1} />
          <ImageWithCount count={3} />
        </div>
        <div className="flex flex-col gap-4 mb-10 md:justify-center ">
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Order code:</p>
            <p className="text-neutral_07">#0123_45678</p>
          </div>
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Date:</p>
            <p className="text-neutral_07">October 19, 2023</p>
          </div>
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Total:</p>
            <p className="text-neutral_07">$1,345.00</p>
          </div>
          <div className="semibold-caption-1 grid grid-cols-1 gap-y-2 pb-4 border-b md:border-none md:grid-cols-2 md:w-[300px] md:m-auto md:gap-8">
            <p className="text-neutral_04">Payment method:</p>
            <p className="text-neutral_07">Credit Card</p>
          </div>
        </div>
        <div className="md:max-w-[203px] md:m-auto">
          <DarkButton rounded>Purchase history</DarkButton>
        </div>
      </section>
    </div>
  );
};

export default OrderComplete;
