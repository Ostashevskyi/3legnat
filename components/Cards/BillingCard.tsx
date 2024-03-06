"use client";

import Image from "next/image";
import { useState } from "react";
import BillingForm from "../Forms/BillingForm";
import { TUserBillingAddress } from "@/types/UserAddresses";

const BillingCard = ({
  userBillingAddress,
  user_id,
}: {
  userBillingAddress: TUserBillingAddress;
  user_id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 xl:flex-1 xl:min-w-[342px]">
      <section className="border border-neutral_04 p-4 rounded-md">
        <div className="flex justify-between mb-5">
          <p className="semibold-body-2">Billing Address</p>
          <button
            className="flex items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={"/icons/edit.svg"} alt="edit" width={16} height={16} />
            <p className="semibold-body-2 text-neutral_04">Edit</p>
          </button>
        </div>
        <div>
          {!isOpen && userBillingAddress && (
            <div className="flex flex-col gap-4 regular-caption-1">
              <p>{userBillingAddress.preset_name}</p>
              <p>
                {userBillingAddress.first_name} {userBillingAddress.last_name}
              </p>
            </div>
          )}
        </div>
        <div>
          {isOpen && (
            <BillingForm
              user_id={user_id}
              userBillingAddress={userBillingAddress}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default BillingCard;
