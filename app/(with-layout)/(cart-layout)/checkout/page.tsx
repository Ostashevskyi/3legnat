import DarkButton from "@/components/Buttons/DarkButton";
import ContactInformationForm from "@/components/Forms/ContactInformationForm";
import PaymentForm from "@/components/Forms/PaymentForm";
import ShippingAddressForm from "@/components/Forms/ShippingAddressForm";
import OrderSummary from "@/containers/checkout";
import React from "react";

const Checkout = () => {
  return (
    <div className="p-mobile lg:flex lg:gap-16 max-container">
      <div className="flex flex-col gap-6 mb-6">
        <ContactInformationForm />
        <ShippingAddressForm />
        <PaymentForm />
        <div className="hidden lg:block">
          <DarkButton>Place Order</DarkButton>
        </div>
      </div>
      <div>
        <OrderSummary />
        <div className="lg:hidden mb-20">
          <DarkButton>Place Order</DarkButton>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
