import React from "react";

import ChangePasswordForm from "@/components/Forms/ChangePasswordForm";
import AccountDetailsForm from "@/components/Forms/AccountDetailsForm";
import { getUserDataById } from "@/hooks/getUserDataById";

const AccountDetails = async () => {
  const userData = await getUserDataById();

  return (
    <section className="p-mobile flex flex-col gap-10">
      <AccountDetailsForm userData={userData} />
      <ChangePasswordForm
        password={userData?.password}
        email={userData?.email}
      />
    </section>
  );
};

export default AccountDetails;
