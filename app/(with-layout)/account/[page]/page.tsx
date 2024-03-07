import Address from "@/containers/account/address";
import AccountDetails from "@/containers/account/details";
import Orders from "@/containers/account/orders";
import React from "react";

const AccountPage = ({ params: { page } }: { params: { page: string } }) => {
  switch (page) {
    case "details":
      return <AccountDetails />;
    case "address":
      return <Address />;
    case "orders":
      return <Orders />;
    default:
      return;
  }
};

export default AccountPage;
