import {
  TForgotPasswordSchema,
  forgotPasswordSchema,
} from "@/lib/zodSchema/forgot-password";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Shared/ErrorMessage";
import DarkButton from "../Buttons/DarkButton";
import Link from "next/link";
import { toast } from "sonner";

const ForgotPasswordForm = ({ email }: { email: string | undefined }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: TForgotPasswordSchema) => {
    try {
      const { newPassword } = data;

      const res = await fetch("/api/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword,
          email,
        }),
      });

      if (res.ok) {
        reset();
        toast.success("Password was successfully changed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <label
          htmlFor="newPassword"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          New password
        </label>
        <input
          {...register("newPassword")}
          id="newPassword"
          type="password"
          placeholder="New password"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.newPassword && (
          <div className="max-w-[250px]">
            <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
          </div>
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
          id="repeatNewPassword"
          type="password"
          placeholder="Repeat new password"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.repeatNewPassword && (
          <div className="max-w-[250px]">
            <ErrorMessage>{errors.repeatNewPassword?.message}</ErrorMessage>
          </div>
        )}
      </div>
      <DarkButton>
        <input type="submit" value={"Recover password"} />
      </DarkButton>
      <Link className="text-neutral_04" href={"/login"}>
        Back to login page
      </Link>
    </form>
  );
};

export default ForgotPasswordForm;
