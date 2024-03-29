"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  TAccountDetailsSchema,
  accountDetailsSchema,
} from "@/lib/zodSchema/account-details";

import ErrorMessage from "@/components/Shared/ErrorMessage";
import SubmitFormInput from "../Inputs/SubmitFormInput";
import { toast } from "sonner";

const AccountDetailsForm = ({ userData }: TUserData) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<TAccountDetailsSchema>({
    resolver: zodResolver(accountDetailsSchema),
  });

  const onSubmit = async (data: TAccountDetailsSchema) => {
    const { email, lastName, name, username } = data;
    try {
      if (
        email !== userData?.email ||
        lastName !== userData?.lastName ||
        name !== userData?.name ||
        username !== userData?.username
      ) {
        const user_id = userData?.user_id;

        const res = await fetch("/api/userinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id,
            email,
            lastName,
            name,
            username,
          }),
        });

        if (res.ok) {
          toast.success("User data was changed successfully");
        }
      }
    } catch (error) {
      toast.error("An error occurred while changing user data ");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <p className="semibold-body-1">Account Details</p>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="name"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          First Name
        </label>
        <input
          {...register("name", { value: userData?.name })}
          id="name"
          type="text"
          defaultValue={userData?.name}
          placeholder="First Name"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="lastName"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Last Name
        </label>
        <input
          {...register("lastName", { value: userData?.lastName })}
          id="lastName"
          type="text"
          defaultValue={userData?.lastName}
          placeholder="Last Name"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="username"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Display Name
        </label>
        <input
          {...register("username", { value: userData?.username })}
          id="username"
          type="text"
          defaultValue={userData?.username}
          placeholder="Display Name"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.username ? (
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        ) : (
          <p className="regular-caption-2 italic">
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Email
        </label>
        <input
          {...register("email", { value: userData?.email })}
          id="email"
          type="email"
          defaultValue={userData?.email}
          placeholder="Email"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      </div>

      <div className="max-w-[183px]">
        <SubmitFormInput isSubmitting={isSubmitting} value="Save changes" />
      </div>
    </form>
  );
};

export default AccountDetailsForm;
