"use client";
import DarkButton from "@/components/Buttons/DarkButton";
import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";
import ErrorMessage from "@/components/Shared/ErrorMessage";
import {
  TForgotPasswordEmailSchema,
  forgotPasswordEmailSchema,
} from "@/lib/zodSchema/forgot-password";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<string>();
  const [email, setEmail] = useState<string>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TForgotPasswordEmailSchema>({
    resolver: zodResolver(forgotPasswordEmailSchema),
  });

  const onSubmit = async (data: TForgotPasswordEmailSchema) => {
    try {
      const { email } = data;
      const res = await fetch(`/api/check_email?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setIsValid(true);
        setEmail(email);
      }

      if (!res.ok) {
        setError("Cannot find a user with this email address");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return isValid ? (
    <section className="p-mobile mt-10 lg:mt-0">
      <h4 className="mb-10">Password recovery</h4>
      <ForgotPasswordForm email={email} />
    </section>
  ) : (
    <section className="p-mobile mt-10 lg:mt-0">
      <h4 className="mb-10">Password recovery</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-xs leading-3 uppercase text-neutral_04 font-bold"
          >
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email"
            className="border w-full px-4 py-2 outline-none rounded-md"
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
        <DarkButton>
          <input type="submit" value={"Submit"} />
        </DarkButton>
      </form>
    </section>
  );
};

export default ForgotPassword;
