import React from "react";

const SubmitFormInput = ({
  value,
  isSubmitting,
}: {
  value: string;
  isSubmitting: boolean;
}) => {
  return (
    <input
      type="submit"
      className={`w-full min-h-12 rounded-md  text-white ${
        isSubmitting ? "bg-gray-300" : "bg-neutral_07"
      }`}
      value={isSubmitting ? "Submitting" : value}
    />
  );
};

export default SubmitFormInput;
