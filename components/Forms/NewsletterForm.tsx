"use client";
import {
  TNewsletterFormSchema,
  newsletterFormSchema,
} from "@/lib/zodSchema/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ErrorMessage from "../Shared/ErrorMessage";

const NewsletterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TNewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
  });

  const onSubmit = (data: TNewsletterFormSchema) => {
    reset();
    toast.success("You have been successfully sign up to our news");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-fit m-auto text-neutral_04"
    >
      <div className="flex items-center gap-2 justify-center border-b pb-3 border-neutral_04/50 mb-1">
        <Image src={"/icons/mail.svg"} alt="mail" width={24} height={24} />
        <input
          {...register("email")}
          type="email"
          placeholder="Email address"
          className="bg-transparent outline-none max-w-[180px] sm:max-lg:max-w-fit lg:min-w-[396px] placeholder:text-neutral_04"
        />
        <input type="submit" value={"Signup"} className="cursor-pointer" />
      </div>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
    </form>
  );
};

export default NewsletterForm;
