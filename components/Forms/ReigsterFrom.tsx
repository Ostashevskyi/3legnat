"use client";

import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import { useRouter } from "next/navigation";

import DarkButton from "@/components/Buttons/DarkButton";
import { TRegisterSchema, registerSchema } from "@/lib/zodSchema/register";
import ErrorMessage from "../Shared/ErrorMessage";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: TRegisterSchema) => {
    const { name, username, email, password } = data;

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          user_id: crypto.randomUUID(),
        }),
      });

      if (res.ok) {
        reset();
        push("/login");
      } else {
        console.log("user registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8 mb-8">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="border-b w-full pb-3 outline-none"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
        <div>
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="border-b w-full pb-3 outline-none"
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Your email address"
            className="border-b w-full pb-3 outline-none"
            autoComplete="email"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <div className="flex items-center justify-between border-b pb-3">
            <input
              {...register("password")}
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="outline-none"
              autoComplete="current-password"
            />
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
              <Image
                src={"/icons/eye.svg"}
                alt="show-password"
                height={24}
                width={24}
              />
            </button>
          </div>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
      </div>

      <DarkButton>
        <input type="submit" value={"Sign Up"} />
      </DarkButton>
    </form>
  );
};

export default RegisterForm;
