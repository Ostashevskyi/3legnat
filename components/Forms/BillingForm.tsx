"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../Inputs/FormInput";
import SubmitFormInput from "../Inputs/SubmitFormInput";

import {
  TBillingFormSchema,
  billingFormSchema,
} from "@/lib/zodSchema/billing-form";

import { TUserBillingAddress } from "@/types/UserAddresses";

import { maskCardNumber } from "@/utils/maskCardNumber";

const BillingForm = ({
  user_id,
  userBillingAddress,
}: {
  user_id?: string;
  userBillingAddress: TUserBillingAddress;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TBillingFormSchema>({ resolver: zodResolver(billingFormSchema) });

  const onSubmit = (data: TBillingFormSchema) => {
    const { card_number, cvv, expiration_date, first_name, last_name } = data;

    const maskedNumber = maskCardNumber(card_number);
    const preset_name =
      card_number[0] === "4"
        ? `VISA ${maskedNumber}`
        : card_number[0] === "2" || card_number[0] === "5"
        ? `MasterCard ${maskedNumber}`
        : "";

    try {
      if (data) {
        const res = fetch("/api/billing_address", {
          method: userBillingAddress ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            card_number,
            cvv,
            expiration_date,
            first_name,
            last_name,
            preset_name,
            user_id,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <FormInput
        label="First name"
        register={register}
        registerLabel="first_name"
        type="text"
        errors={errors}
        defaultValue={userBillingAddress?.first_name}
      />
      <FormInput
        label="Last name"
        register={register}
        registerLabel="last_name"
        type="text"
        errors={errors}
        defaultValue={userBillingAddress?.last_name}
      />
      <FormInput
        label="Card number"
        register={register}
        registerLabel="card_number"
        type="text"
        errors={errors}
        defaultValue={userBillingAddress?.card_number}
      />
      <FormInput
        label="CVV"
        register={register}
        registerLabel="cvv"
        type="text"
        errors={errors}
        defaultValue={userBillingAddress?.cvv}
      />
      <FormInput
        label="Expiration Date"
        register={register}
        registerLabel="expiration_date"
        type="text"
        errors={errors}
        defaultValue={userBillingAddress?.expiration_date}
      />

      <SubmitFormInput isSubmitting={isSubmitting} value="Submit" />
    </form>
  );
};

export default BillingForm;
