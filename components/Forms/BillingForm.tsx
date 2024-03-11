"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SubmitFormInput from "../Inputs/SubmitFormInput";

import {
  TBillingFormSchema,
  billingFormSchema,
} from "@/lib/zodSchema/billing-form";

import { TUserBillingAddress } from "@/types/UserAddresses";

import { maskCardNumber } from "@/utils/maskCardNumber";
import ErrorMessage from "../Shared/ErrorMessage";
import { toast } from "sonner";
import DeleteFormButton from "../Buttons/DeleteFormButton";

const BillingForm = ({
  user_id,
  userBillingAddress,
  withoutButtons,
}: {
  user_id?: string;
  userBillingAddress: TUserBillingAddress;
  withoutButtons?: boolean;
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

        toast.promise(res, {
          loading: "Updating your billing form...",
          success: `Your billing form has been successfully updated`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"first_name"}
        >
          First name
        </label>
        <input
          {...register("first_name")}
          type={"text"}
          defaultValue={userBillingAddress?.first_name}
          name={"first_name"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["first_name"] && (
          <ErrorMessage>{errors["first_name"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"last_name"}
        >
          Last name
        </label>
        <input
          {...register("last_name")}
          type={"text"}
          defaultValue={userBillingAddress?.last_name}
          name={"last_name"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["last_name"] && (
          <ErrorMessage>{errors["last_name"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"card_number"}
        >
          Card number
        </label>
        <input
          {...register("card_number")}
          type={"text"}
          defaultValue={userBillingAddress?.card_number}
          name={"card_number"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["card_number"] && (
          <ErrorMessage>{errors["card_number"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"cvv"}
        >
          CVV
        </label>
        <input
          {...register("cvv")}
          type={"text"}
          defaultValue={userBillingAddress?.cvv}
          name={"cvv"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["cvv"] && <ErrorMessage>{errors["cvv"].message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"expiration_date"}
        >
          Expiration Date
        </label>
        <input
          {...register("expiration_date")}
          type={"text"}
          defaultValue={userBillingAddress?.expiration_date}
          name={"expiration_date"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["expiration_date"] && (
          <ErrorMessage>{errors["expiration_date"].message}</ErrorMessage>
        )}
      </div>
      {!withoutButtons && (
        <div className="flex gap-2">
          <SubmitFormInput isSubmitting={isSubmitting} value="Submit" />
          <DeleteFormButton user_id={user_id} form="billing" />
        </div>
      )}
    </form>
  );
};

export default BillingForm;
