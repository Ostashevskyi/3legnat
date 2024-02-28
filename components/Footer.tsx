import Image from "next/image";
import React from "react";
import { HEADER_NAV_LINKS, SOCIALS_ICONS } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="min-container bg-neutral_06  py-12">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center items-center gap-4 pb-10 lg:flex-row lg:gap-8">
            <Image
              src={"/logo-white.png"}
              alt="logo-white"
              width={105}
              height={24}
            />
            <div className="w-6 h-px bg-neutral_04 lg:rotate-90"></div>
            <p className="regular-caption-1 text-white">
              Gift & Decoration Store
            </p>
          </div>
          <div className="flex flex-col text-neutral_01 regular-caption_1 justify-center items-center gap-8 mb-10 lg:flex-row lg:gap-10">
            {HEADER_NAV_LINKS.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral_04 flex flex-col items-center m-auto w-fit lg:flex-row lg:justify-between lg:w-auto">
          <div className="flex gap-6 justify-center items-center pt-12 py-8 lg:hidden">
            {SOCIALS_ICONS.map((icon) => (
              <Image
                alt={icon.alt}
                src={icon.icon}
                key={icon.id}
                width={20}
                height={20}
              />
            ))}
          </div>
          <div className="flex flex-col gap-7 lg:flex-row">
            <div className="lg:hidden text-neutral_01 semibold-caption-2 flex gap-7 justify-center items-center">
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Terms of Use</Link>
            </div>

            <p className="regular-caption-1 text-neutral_03 text-center">
              Copyright © 2024 3legant. All rights reserved
            </p>
            <div className="hidden lg:flex text-neutral_01 semibold-caption-2  gap-7 justify-center items-center">
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Terms of Use</Link>
            </div>
          </div>
          <div className="gap-6 justify-center items-center py-8 hidden lg:flex">
            {SOCIALS_ICONS.map((icon) => (
              <Image
                alt={icon.alt}
                src={icon.icon}
                key={icon.id}
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
