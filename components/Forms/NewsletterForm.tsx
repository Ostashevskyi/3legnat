"use client";
import Image from "next/image";
import React, { FormEvent } from "react";

const NewsletterForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-fit m-auto text-neutral_04 flex items-center gap-2 justify-center border-b pb-3 border-neutral_04/50 "
    >
      <Image src={"/icons/mail.svg"} alt="mail" width={24} height={24} />
      <input
        type="email"
        placeholder="Email address"
        className="bg-transparent outline-none max-w-[180px] sm:max-lg:max-w-fit lg:min-w-[396px] placeholder:text-neutral_04"
      />
      <input type="submit" value={"Signup"} className="cursor-pointer" />
    </form>
  );
};

export default NewsletterForm;
