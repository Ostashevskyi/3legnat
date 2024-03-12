"use client";
import {
  TContactUsFormSchema,
  contactUsFormSchema,
} from "@/lib/zodSchema/contact-us";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Shared/ErrorMessage";
import DarkButton from "../Buttons/DarkButton";

const ContactUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
  });

  const onSubmit = (data: TContactUsFormSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mb-10 flex-1"
    >
      <div className="flex flex-col gap-3">
        <label
          htmlFor="name"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Full Name
        </label>
        <input
          {...register("name")}
          name="name"
          type="text"
          placeholder="Your Name"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Email Address
        </label>
        <input
          {...register("email")}
          name="email"
          type="text"
          placeholder="Your Email"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="message"
          className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          name="message"
          placeholder="Your message"
          className="border w-full px-4 py-2 outline-none rounded-md"
        />
        {errors.message && (
          <ErrorMessage>{errors.message?.message}</ErrorMessage>
        )}
      </div>

      <div className="w-[189px] m-auto">
        <DarkButton>
          <input type="submit" value={"Send Message"} />
        </DarkButton>
      </div>
    </form>
  );
};

export default ContactUsForm;
