"use client";
import React from "react";
import { toast } from "sonner";

const DeleteFormButton = ({
  form,
  user_id,
}: {
  form: string;
  user_id: string | undefined;
}) => {
  const handleClick = async () => {
    try {
      const res = await fetch(`/api/${form}_address`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
        }),
      });

      if (res.ok) {
        toast.success(`Form has been deleted successfully`);
      }
    } catch (error) {}
  };
  return (
    <button
      type="button"
      className="w-full min-h-12 bg-neutral_07 rounded-md text-white"
      onClick={handleClick}
    >
      Delete
    </button>
  );
};

export default DeleteFormButton;
