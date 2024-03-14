import React from "react";
import Image from "next/image";
import AccountDropdown from "@/components/Dropdowns/AccountDropdown";
import { getUserDataById } from "@/hooks/getUserDataById";
import LayoutMenuLinks from "./LayoutMenuLinks";

const LayoutMenu = async () => {
  const userData = await getUserDataById();
  return (
    <section className="p-mobile flex-1 lg:max-w-[262px] ">
      <div className=" bg-neutral_02 rounded-md mb-10 py-10">
        <div className="flex flex-col justify-center items-center gap-1.5 pb-10">
          <div className="flex items-end relative">
            <Image
              src={userData?.image || ""}
              alt="userIcon"
              width={80}
              height={80}
            />
          </div>
          <p className="semibold-body-1">{userData?.username}</p>
        </div>
        <div className="flex justify-center items-center pb-10 px-4 lg:hidden">
          <AccountDropdown />
        </div>
        <LayoutMenuLinks />
      </div>
    </section>
  );
};

export default LayoutMenu;
