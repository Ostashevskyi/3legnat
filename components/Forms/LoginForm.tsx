"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import { TLoginSchema, loginSchema } from "@/lib/zodSchema/login";

import DarkButton from "@/components/Buttons/DarkButton";
import ErrorMessage from "../Shared/ErrorMessage";

type TCredentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    try {
      const credentials: TCredentials = {
        email: data.email,
        password: data.password,
      };

      const res = await signIn("credentials", credentials);

      if (res?.error) {
        throw Error("Error during login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8 mb-8">
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Your email address"
            className="border-b w-full pb-3  outline-none"
            autoComplete="email"
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </div>
        <div>
          <div className="flex items-center justify-between border-b pb-3 ">
            <input
              {...register("password")}
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="outline-none"
              autoComplete="current-password"
            />
            <button onClick={() => setIsVisible(!isVisible)}>
              <Image
                src={"/icons/eye.svg"}
                alt="show-password"
                height={24}
                width={24}
              />
            </button>
          </div>
          {errors.password && (
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <Link href={"/"} className="semibold-caption-2 text-neutral_07">
          Forgot password?
        </Link>
      </div>
      <DarkButton>Sign In</DarkButton>
    </form>
  );
};

export default LoginForm;
