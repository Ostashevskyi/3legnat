import React from "react";

import { getServerSession } from "next-auth";

import { options } from "@/app/api/auth/[...nextauth]/options";

import { getUserBillingAddressById } from "@/hooks/getUserBillingAddressById";

import BillingCard from "@/components/Cards/BillingCard";

const Address = async () => {
  const session = await getServerSession(options);
  const { userBillingAddress } = await getUserBillingAddressById();

  return (
    <div className="p-mobile">
      <p className="semibold-body-1">Address</p>

      <BillingCard userBillingAddress={userBillingAddress} session={session} />
    </div>
  );
};

export default Address;
