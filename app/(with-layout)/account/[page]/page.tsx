import Address from "@/containers/account/address";
import AccountDetails from "@/containers/account/details";
import React from "react";

const AccountPage = ({ params: { page } }: { params: { page: string } }) => {
  switch (page) {
    case "details":
      return <AccountDetails />;
    case "address":
      return <Address />;
    default:
      return;
  }
};

export default AccountPage;
