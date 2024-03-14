import React from "react";

import Link from "next/link";

import OrderSummary from "@/containers/checkout";

import { getUserDataById } from "@/hooks/getUserDataById";
import { getUserBillingAddressById } from "@/hooks/getUserBillingAddressById";
import { getUserShippingAddressById } from "@/hooks/getUserShippingAddressById";

import BillingCard from "@/components/Cards/BillingCard";
import ShippingCard from "@/components/Cards/ShippingCard";
import PlaceOrderButton from "@/components/Buttons/PlaceOrderButton";

const Checkout = async () => {
  const userInfo = await getUserDataById();
  const { userBillingAddress } = await getUserBillingAddressById();
  const { userShippingAddress } = await getUserShippingAddressById();

  return (
    <div className="p-mobile lg:flex lg:gap-16 max-container">
      <form className="flex flex-col flex-1 gap-6 mb-6">
        {userBillingAddress && (
          <BillingCard
            userBillingAddress={userBillingAddress}
            user_id={userInfo?.user_id}
          />
        )}
        {userShippingAddress && (
          <ShippingCard
            userShippingAddress={userShippingAddress}
            user_id={userInfo?.user_id}
          />
        )}

        {(!userBillingAddress || !userShippingAddress) && (
          <div>
            <p>
              You need to fill your{" "}
              <Link href={"/account/address"} className="text-secondary_blue">
                Billing address
              </Link>{" "}
              and{" "}
              <Link href={"/account/address"} className="text-secondary_blue">
                Shipping address
              </Link>{" "}
              to create an order.
            </p>
          </div>
        )}

        {userBillingAddress && userShippingAddress && (
          <Link href={"/order-complete"} className="hidden lg:block">
            <PlaceOrderButton user_id={userInfo.user_id} />
          </Link>
        )}
      </form>
      <div className="mb-20">
        <OrderSummary user_id={userInfo?.user_id} />
        {userBillingAddress && userShippingAddress && (
          <Link href={"/order-complete"} className="lg:hidden">
            <PlaceOrderButton user_id={userInfo.user_id} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
