import Address from "@/containers/account/address";
import AccountDetails from "@/containers/account/details";
import Logout from "@/containers/account/logout";
import Orders from "@/containers/account/orders";
import Wishlist from "@/containers/account/wishlist";
import React from "react";

const AccountPage = ({ params: { page } }: { params: { page: string } }) => {
  switch (page) {
    case "details":
      return <AccountDetails />;
    case "address":
      return <Address />;
    case "orders":
      return <Orders />;
    case "wishlist":
      return <Wishlist />;
    case "logout":
      return <Logout />;
    default:
      return;
  }
};

export default AccountPage;
