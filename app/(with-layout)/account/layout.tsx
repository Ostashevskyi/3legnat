import LayoutMenu from "@/containers/account/LayoutMenu";
import React from "react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LayoutMenu />
      {children}
    </section>
  );
}
