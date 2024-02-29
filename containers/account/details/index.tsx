import React from "react";

import { getServerSession } from "next-auth";

import { options } from "@/app/api/auth/[...nextauth]/options";

import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";
import AccountDetailsForm from "@/components/Forms/AccountDetailsForm";

type TUserData = {
  userData: {
    email: string;
    name: string;
    username: string;
    lastName?: string;
    id: number;
    password: string;
    image: string;
  };
};

export const dynamic = "force-dynamic";

const getUserDataById = async () => {
  const session = await getServerSession(options);
  const res = await fetch(
    `http://localhost:3000/api/userinfo?id=${session?.user.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { userData }: TUserData = await res.json();

  return userData;
};

const AccountDetails = async () => {
  const userData = await getUserDataById();

  return (
    <section className="p-mobile flex flex-col gap-10">
      <AccountDetailsForm userData={userData} />
      <ChangePasswordForm password={userData?.password} id={userData?.id} />
    </section>
  );
};

export default AccountDetails;
