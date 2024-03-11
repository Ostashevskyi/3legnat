import React from "react";

import { getServerSession } from "next-auth";

import { options } from "@/app/api/auth/[...nextauth]/options";

import { getUserBillingAddressById } from "@/hooks/getUserBillingAddressById";

import BillingCard from "@/components/Cards/BillingCard";
import ShippingCard from "@/components/Cards/ShippingCard";
import { getUserShippingAddressById } from "@/hooks/getUserShippingAddressById";

const Address = async () => {
  const session = await getServerSession(options);
  const { userBillingAddress } = await getUserBillingAddressById();
  const { userShippingAddress } = await getUserShippingAddressById();

  return (
    <div className="p-mobile">
      <p className="semibold-body-1 mb-5">Address</p>

      <div className="flex flex-col gap-6 mb-20 xl:flex-row">
        <BillingCard
          userBillingAddress={userBillingAddress}
          user_id={session?.user.user_id}
        />
        <ShippingCard
          user_id={session?.user.user_id}
          userShippingAddress={userShippingAddress}
        />
      </div>
    </div>
  );
};

export default Address;
