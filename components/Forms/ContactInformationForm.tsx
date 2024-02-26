import React from "react";

const ContactInformationForm = () => {
  return (
    <form className="border border-neutral_04 py-6 px-4 rounded-md flex flex-col gap-6">
      <p className="semibold-body-2">Contact Information</p>
      <div className="flex gap-[2%]">
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="firstName"
            className="leading-3 text-xs font-bold uppercase text-neutral_04"
          >
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            className="border border-neutral_04 rounded-md py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="lastName"
            className="leading-3 text-xs font-bold uppercase text-neutral_04 "
          >
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            className="border border-neutral_04 rounded-md py-2 px-4 "
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 "
        >
          Phone number
        </label>
        <input
          name="phoneNumber"
          type="tel"
          placeholder="Phone number"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 w-full"
        >
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full"
        />
      </div>
    </form>
  );
};

export default ContactInformationForm;
