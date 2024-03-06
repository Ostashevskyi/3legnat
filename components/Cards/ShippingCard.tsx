"use client";

import Image from "next/image";
import { useState } from "react";
import { TUserShippingAddress } from "@/types/UserAddresses";
import ShippingForm from "../Forms/ShippingForm";

const ShippingCard = ({
  userShippingAddress,
  user_id,
}: {
  userShippingAddress: TUserShippingAddress;
  user_id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 xl:flex-1">
      <section className="border border-neutral_04 p-4 rounded-md">
        <div className="flex justify-between mb-5">
          <p className="semibold-body-2">Shipping Address</p>
          <button
            className="flex items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={"/icons/edit.svg"} alt="edit" width={16} height={16} />
            <p className="semibold-body-2 text-neutral_04">Edit</p>
          </button>
        </div>
        <div>
          {!isOpen && userShippingAddress && (
            <div className="flex flex-col gap-4 regular-caption-1">
              <p>{userShippingAddress.preset_name}</p>
              <p>
                {userShippingAddress.first_name} {userShippingAddress.last_name}
              </p>
            </div>
          )}
        </div>
        <div>
          {isOpen && (
            <ShippingForm
              user_id={user_id}
              userShippingAddress={userShippingAddress}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ShippingCard;
