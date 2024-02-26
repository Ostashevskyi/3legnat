import React from "react";

const ShippingAddressForm = () => {
  return (
    <form className="border border-neutral_04 py-6 px-4 rounded-md flex flex-col gap-6">
      <p className="semibold-body-2">Shipping Address</p>
      <div>
        <label
          htmlFor="streetAddress"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 "
        >
          Street Address *
        </label>
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 "
        >
          Country *
        </label>
        <input
          name="country"
          placeholder="Country"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full"
        />
      </div>
      <div>
        <label
          htmlFor="town/city"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 "
        >
          Town / City *
        </label>
        <input
          type="text"
          name="town/city"
          placeholder="Town / City"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full"
        />
      </div>
      <div className="flex gap-[2%]">
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="state"
            className="leading-3 text-xs font-bold uppercase text-neutral_04"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            placeholder="State"
            className="border border-neutral_04 rounded-md py-2 px-4 w-full"
          />
        </div>
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="zip-input"
            className="leading-3 text-xs font-bold uppercase text-neutral_04"
          >
            Zip Code
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <input
              type="text"
              id="zip-input"
              aria-describedby="helper-text-explanation"
              className=" border border-neutral_04 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Zip Code"
              pattern="^\d{5}(-\d{4})?$"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShippingAddressForm;
