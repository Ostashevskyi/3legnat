"use client";
import React from "react";

import { signOut } from "next-auth/react";

import DarkButton from "@/components/Buttons/DarkButton";

const Logout = () => {
  return (
    <DarkButton handleClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </DarkButton>
  );
};

export default Logout;
