import AccountDetails from "@/containers/account/details";
import React from "react";

const AccountPage = ({ params: { page } }: { params: { page: string } }) => {
  switch (page) {
    case "details":
      return <AccountDetails />;
    default:
      return;
  }
};

export default AccountPage;
