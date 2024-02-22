"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import DarkButton from "@/components/Buttons/DarkButton";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Your name"
        className="border-b w-full pb-3 mb-8 outline-none"
      />
      <input
        type="text"
        placeholder="Username"
        className="border-b w-full pb-3 mb-8 outline-none"
      />
      <input
        type="email"
        placeholder="Your email address"
        className="border-b w-full pb-3 mb-8 outline-none"
        autoComplete="email"
      />
      <div className="flex items-center justify-between border-b pb-3 mb-8">
        <input
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
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="remember" className="w-6 h-6 " />
          <label
            htmlFor="remember"
            className="semibold-caption-2 text-neutral_04"
          >
            I agree with{" "}
            <Link className="text-neutral_07" href={"/privacy-policy"}>
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="text-neutral_07" href={"/terms-of-use"}>
              Terms of Use
            </Link>
          </label>
        </div>
      </div>
      <DarkButton>Sign Up</DarkButton>
    </form>
  );
};

export default RegisterForm;
