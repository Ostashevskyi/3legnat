import React from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import ErrorMessage from "../Shared/ErrorMessage";

type FormData = {
  first_name: string;
  last_name: string;
  card_number: string;
  cvv: string;
  expiration_date: string;
};

type FormInputProps = {
  label: string;
  registerLabel: keyof FormData;
  type: string;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FormData>;
  defaultValue?: string;
};

const FormInput = ({
  label,
  register,
  registerLabel,
  type,
  errors,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        className="text-xs leading-3 uppercase text-neutral_04 font-bold"
        htmlFor={registerLabel}
      >
        {label}
      </label>
      <input
        {...register(registerLabel)}
        type={type}
        defaultValue={defaultValue}
        name={registerLabel}
        className="border w-full px-4 py-2 outline-none rounded-md"
      />
      {errors[registerLabel] && (
        <ErrorMessage>{errors[registerLabel].message}</ErrorMessage>
      )}
    </div>
  );
};

export default FormInput;
