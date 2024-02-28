import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import AccountDropdown from "@/components/Dropdowns/AccountDropdown";

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

const LayoutMenu = async () => {
  const userData = await getUserDataById();
  return (
    <section className="p-mobile">
      <h4 className="lg:text-54 lg:leading-58 mb-10 lg:mb-20 text-center">
        My account
      </h4>
      <div className=" bg-neutral_02 rounded-md mb-10">
        <div className="pt-10 flex flex-col justify-center items-center gap-1.5 pb-10">
          <Image
            src={userData?.image || ""}
            alt="userIcon"
            width={80}
            height={80}
          />
          <p className="semibold-body-1">{userData?.username}</p>
        </div>
        <div className="flex justify-center items-center pb-10 px-4">
          <AccountDropdown />
        </div>
      </div>
    </section>
  );
};

export default LayoutMenu;
