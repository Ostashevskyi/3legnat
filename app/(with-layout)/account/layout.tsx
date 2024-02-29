import LayoutMenu from "@/containers/account/LayoutMenu";
import React from "react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="lg:mt-20">
      <h4 className="lg:text-54 lg:leading-58 mb-10 lg:mb-20 text-center">
        My account
      </h4>
      <div className="lg:flex lg:gap-20">
        <LayoutMenu />
        <div className="lg:flex-1 lg:max-w-[707px]">{children}</div>
      </div>
    </section>
  );
}
