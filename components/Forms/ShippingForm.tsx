"use client";
import React from "react";

import { useForm } from "react-hook-form";
import countries from "i18n-iso-countries";
import { zodResolver } from "@hookform/resolvers/zod";
import enLocale from "i18n-iso-countries/langs/en.json";

import SubmitFormInput from "../Inputs/SubmitFormInput";

import ErrorMessage from "../Shared/ErrorMessage";

import {
  TShippingFormSchema,
  shippingFormSchema,
} from "@/lib/zodSchema/shipping-form";

import { TUserShippingAddress } from "@/types/UserAddresses";
import { toast } from "sonner";
import DeleteFormButton from "../Buttons/DeleteFormButton";

const ShippingForm = ({
  user_id,
  userShippingAddress,
  withoutButtons,
}: {
  user_id?: string;
  userShippingAddress: TUserShippingAddress;
  withoutButtons?: boolean;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TShippingFormSchema>({
    resolver: zodResolver(shippingFormSchema),
  });

  countries.registerLocale(enLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const onSubmit = (data: TShippingFormSchema) => {
    const {
      first_name,
      last_name,
      city,
      country,
      email,
      phone,
      postcode,
      street_address,
    } = data;

    const preset_name = `${country}, ${street_address}`;

    try {
      if (data) {
        const res = fetch("/api/shipping_address", {
          method: userShippingAddress ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            city,
            country,
            email,
            phone,
            postcode,
            street_address,
            preset_name,
            user_id,
          }),
        });

        toast.promise(res, {
          loading: "Updating your shipping form...",
          success: `Your shipping form has been successfully updated`,
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
          defaultValue={userShippingAddress?.first_name}
          id={"first_name"}
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
          defaultValue={userShippingAddress?.last_name}
          id={"last_name"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["last_name"] && (
          <ErrorMessage>{errors["last_name"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3 text-neutral_04">
        <label
          htmlFor="country"
          className="leading-3 text-xs font-bold uppercase"
        >
          Country
        </label>
        <select
          {...register("country")}
          id="country"
          defaultValue={userShippingAddress?.country}
          className="border border-neutral_04 rounded-md py-2 px-4"
        >
          <option value={"country"} hidden>
            Country
          </option>
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <option key={value} value={value} className="">
                {label}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"street_address"}
        >
          Street Address
        </label>
        <input
          {...register("street_address")}
          type={"text"}
          defaultValue={userShippingAddress?.street_address}
          id={"street_address"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["street_address"] && (
          <ErrorMessage>{errors["street_address"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"postcode"}
        >
          Zip code
        </label>
        <input
          {...register("postcode")}
          type={"text"}
          defaultValue={userShippingAddress?.postcode}
          id={"postcode"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["postcode"] && (
          <ErrorMessage>{errors["postcode"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"city"}
        >
          Town / City
        </label>
        <input
          {...register("city")}
          type={"text"}
          defaultValue={userShippingAddress?.city}
          id={"city"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["city"] && (
          <ErrorMessage>{errors["city"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"phone"}
        >
          Phone number
        </label>
        <input
          {...register("phone")}
          type={"tel"}
          defaultValue={userShippingAddress?.phone}
          id={"phone"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["phone"] && (
          <ErrorMessage>{errors["phone"].message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          htmlFor={"email"}
        >
          Email
        </label>
        <input
          {...register("email")}
          type={"email"}
          defaultValue={userShippingAddress?.email}
          id={"email"}
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors["email"] && (
          <ErrorMessage>{errors["email"].message}</ErrorMessage>
        )}
      </div>
      {!withoutButtons && (
        <div className="flex gap-2">
          <SubmitFormInput isSubmitting={isSubmitting} value="Submit" />
          <DeleteFormButton user_id={user_id} form="shipping" />
        </div>
      )}
    </form>
  );
};

export default ShippingForm;
