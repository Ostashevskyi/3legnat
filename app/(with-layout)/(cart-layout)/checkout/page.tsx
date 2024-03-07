import React from "react";

import Link from "next/link";

import OrderSummary from "@/containers/checkout";

import { getUserDataById } from "@/hooks/getUserDataById";
import { getUserBillingAddressById } from "@/hooks/getUserBillingAddressById";
import { getUserShippingAddressById } from "@/hooks/getUserShippingAddressById";

import BillingCard from "@/components/Cards/BillingCard";
import ShippingCard from "@/components/Cards/ShippingCard";
import PlaceOrderButton from "@/components/Buttons/PlaceOrderButton";
import ShippingAddressForm from "@/components/Forms/ShippingAddressForm";
import ContactInformationForm from "@/components/Forms/ContactInformationForm";

const Checkout = async () => {
  const userInfo = await getUserDataById();
  const { userBillingAddress } = await getUserBillingAddressById();
  const { userShippingAddress } = await getUserShippingAddressById();

  return (
    <div className="p-mobile lg:flex lg:gap-16 max-container">
      <div className="flex flex-col flex-1 gap-6 mb-6">
        {userBillingAddress ? (
          <BillingCard
            userBillingAddress={userBillingAddress}
            user_id={userInfo?.user_id}
          />
        ) : (
          <ContactInformationForm />
        )}
        {userShippingAddress ? (
          <ShippingCard
            userShippingAddress={userShippingAddress}
            user_id={userInfo?.user_id}
          />
        ) : (
          <ShippingAddressForm />
        )}
        <Link href={"/order-complete"} className="hidden lg:block">
          <PlaceOrderButton user_id={userInfo.user_id} />
        </Link>
      </div>
      <div>
        <OrderSummary user_id={userInfo?.user_id} />
        <Link href={"/order-complete"} className="lg:hidden mb-20">
          <PlaceOrderButton user_id={userInfo.user_id} />
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
