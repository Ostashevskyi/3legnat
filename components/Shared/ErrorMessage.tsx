import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-secondary_red">{children}</p>;
};

export default ErrorMessage;
