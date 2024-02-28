"use client";
import {
  TChangePasswordSchema,
  changePasswordSchema,
} from "@/lib/zodSchema/change-password";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Shared/ErrorMessage";
import DarkButton from "../Buttons/DarkButton";

const ChangePasswordForm = ({
  password,
  id,
}: {
  password: string;
  id: number;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: TChangePasswordSchema) => {
    const { oldPassword, newPassword } = data;

    try {
      await fetch("/api/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          currentPassword: password,
          newPassword,
          id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mb-20"
    >
      <p className="semibold-body-1">Password</p>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="oldPassword"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Old password
        </label>
        <input
          {...register("oldPassword")}
          name="oldPassword"
          type="password"
          placeholder="Old password"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.oldPassword && (
          <ErrorMessage>{errors.oldPassword?.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="newPassword"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          New password
        </label>
        <input
          {...register("newPassword")}
          name="newPassword"
          type="password"
          placeholder="New password"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.newPassword && (
          <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="repeatNewPassword"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Repeat new password
        </label>
        <input
          {...register("repeatNewPassword")}
          name="repeatNewPassword"
          type="password"
          placeholder="Repeat new password"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.repeatNewPassword && (
          <ErrorMessage>{errors.repeatNewPassword?.message}</ErrorMessage>
        )}
      </div>

      <div className="max-w-[183px]">
        <DarkButton>
          <input type="submit" value={"Save changes"} />
        </DarkButton>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
