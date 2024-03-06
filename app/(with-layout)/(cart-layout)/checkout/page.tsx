import DarkButton from "@/components/Buttons/DarkButton";
import BillingCard from "@/components/Cards/BillingCard";
import ShippingCard from "@/components/Cards/ShippingCard";
import ContactInformationForm from "@/components/Forms/ContactInformationForm";
import ShippingAddressForm from "@/components/Forms/ShippingAddressForm";
import OrderSummary from "@/containers/checkout";
import { getUserBillingAddressById } from "@/hooks/getUserBillingAddressById";
import { getUserDataById } from "@/hooks/getUserDataById";
import { getUserShippingAddressById } from "@/hooks/getUserShippingAddressById";
import React from "react";

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
        <div className="hidden lg:block">
          <DarkButton>Place Order</DarkButton>
        </div>
      </div>
      <div>
        <OrderSummary user_id={userInfo?.user_id} />
        <div className="lg:hidden mb-20">
          <DarkButton>Place Order</DarkButton>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
