"use client";
import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const AccountDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (page: string) => {
    const array = pathname.split("/");

    array[2] = page;

    const pathnameString = array.join("/");

    replace(`${pathnameString}`);
  };
  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      defaultValue={pathname.split("/")[2]}
      className="w-full px-4 py-3 rounded-md border-neutral_04 border-2 semibold-body-2"
    >
      <option value={"details"}>Account</option>
      <option value={"address"}>Address</option>
      <option value={"orders"}>Orders</option>
      <option value={"wishlist"}>Wishlist</option>
      <option value={"logout"}>Log out</option>
    </select>
  );
};

export default AccountDropdown;
