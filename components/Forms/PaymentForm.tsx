import React from "react";
import RadioInput from "../Inputs/RadioInput";

const PaymentForm = () => {
  return (
    <form className="border border-neutral_04 py-6 px-4 rounded-md flex flex-col gap-6">
      <p className="semibold-body-2">Payment method</p>
      <div className="flex flex-col gap-6 pb-8 border-b">
        <RadioInput title="Pay by Card Credit" />
        <RadioInput title="PayPal" />
      </div>
      <div>
        <label
          htmlFor="cardNumber"
          className="leading-3 text-xs font-bold uppercase text-neutral_04 "
        >
          Card Number
        </label>
        <input
          type="number"
          name="cardNumber"
          placeholder="Card Number"
          className="border border-neutral_04 rounded-md py-2 px-4 w-full accent-transparent"
        />
      </div>
      <div className="flex gap-[2%]">
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="expirationDate"
            className="leading-3 text-xs font-bold uppercase text-neutral_04"
          >
            Expiration Date
          </label>
          <div className="flex border max-w-full py-2 px-4 rounded-md border-neutral_04">
            <input
              type="number"
              name="expirationDate"
              placeholder="MM"
              className="max-w-[50%] placeholder:text-center text-center outline-none"
              maxLength={2}
              size={2}
            />
            <span>/</span>
            <input
              type="number"
              name="expirationDate"
              placeholder="YY"
              className="max-w-[50%] placeholder:text-center text-center outline-none"
              maxLength={2}
              size={2}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 max-w-[49%] flex-1">
          <label
            htmlFor="cvc"
            className="leading-3 text-xs font-bold uppercase text-neutral_04"
          >
            CVC
          </label>
          <input
            name="cvc"
            placeholder="CVC code"
            className="border border-neutral_04 rounded-md py-2 px-4 "
            maxLength={3}
            size={3}
          />
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
