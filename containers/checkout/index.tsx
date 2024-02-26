import QuantityButton from "@/components/Buttons/QuantityButton";
import CouponForm from "@/components/Forms/CouponForm";
import Image from "next/image";
import React from "react";

const OrderSummary = () => {
  return (
    <div className="border border-neutral_04 p-4 rounded-md flex flex-col gap-4 mb-6">
      <p className="semibold-body-2">Order Summary</p>
      {/*  */}
      <div className="mb-6">
        <div className="flex gap-4 border-b py-6 ">
          <Image src={"/chair.png"} alt="chair" width={80} height={96} />
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between semibold-caption-1">
              <p>Tray Table</p>
              <p>$19.19</p>
            </div>
            <div className="flex justify-between regular-caption-2 text-neutral_04">
              <p>Color: Black</p>
              <button>✖</button>
            </div>
            <QuantityButton number={2} bg="white" />
          </div>
        </div>
        <div className="flex gap-4 border-b py-6">
          <Image src={"/chair.png"} alt="chair" width={80} height={96} />
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between semibold-caption-1">
              <p>Tray Table</p>
              <p>$19.19</p>
            </div>
            <div className="flex justify-between regular-caption-2 text-neutral_04">
              <p>Color: Black</p>
              <button>✖</button>
            </div>
            <QuantityButton number={2} bg="white" />
          </div>
        </div>
      </div>
      <CouponForm />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center pb-3 border-b">
          <div className="flex gap-2 regular-body-2">
            <Image
              alt="coupon"
              src={"/icons/ticket-percent.svg"}
              width={20}
              height={18}
            />
            <p>JenkateMW</p>
          </div>
          <p className="text-secondary_green semibold-body-2">
            -$25.00 <button className="text-secondary_red">{"[Remove]"}</button>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pb-3 border-b regular-body-2">
        <p>Shipping</p>
        <p className="text-neutral_07 semibold-body-2">Free</p>
      </div>
      <div className="flex justify-between items-center pb-3 border-b regular-body-2">
        <p>Subtotal</p>
        <p className="text-neutral_07 semibold-body-2">$99.00</p>
      </div>
      <div className="flex justify-between items-center h7">
        <p>Total</p>
        <p className="text-neutral_07 ">$99.00</p>
      </div>
    </div>
  );
};

export default OrderSummary;
