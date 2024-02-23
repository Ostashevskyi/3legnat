"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from "hamburger-react";

import Counter from "@/components/Shared/Counter";
import Discount from "@/components/Shared/Discount";
import SearchInput from "@/components/Inputs/SearchInput";

import {
  HEADER_NAV_ICONS,
  HEADER_NAV_LINKS,
  HEADER_OPEN_ICON,
} from "@/utils/constants";
import DarkButton from "./Buttons/DarkButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? document.documentElement.classList.add("disabled")
      : document.documentElement.classList.remove("disabled");
  }, [isOpen]);

  return (
    <div className="mb-4">
      {!isOpen && <Discount />}

      <nav
        className={
          isOpen
            ? "p-6 h-screen"
            : "max-container py-4 grid grid-cols-1 lg:grid-cols-3 p-mobile"
        }
      >
        <div className="flex justify-between items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={105}
            height={24}
            className="z-50"
          />
          <div className="lg:hidden">
            <Hamburger size={24} toggle={setIsOpen} toggled={isOpen} />
          </div>
        </div>
        <div
          className={
            isOpen
              ? "flex flex-col justify-between h-[90%] "
              : "flex items-center justify-between col-span-2"
          }
        >
          <ul className={isOpen ? "flex flex-col" : "hidden lg:flex gap-10"}>
            {isOpen && <SearchInput />}
            {HEADER_NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <div
                  className={isOpen ? "border-b pb-4 mb-4" : ""}
                  key={link.id}
                >
                  <button onClick={() => setIsOpen(false)}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "text-neutral_07 semibold-body-2"
                          : "text-neutral_04 semibold-body-2"
                      }
                    >
                      {link.title}
                    </Link>
                  </button>
                </div>
              );
            })}
          </ul>
          {!isOpen ? (
            <div className={"items-center gap-1 hidden lg:flex justify-end"}>
              <ul className="flex gap-4 ">
                {HEADER_NAV_ICONS.map((icon) => (
                  <Image
                    src={icon.icon}
                    key={icon.id}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                ))}
              </ul>
              <Counter />
            </div>
          ) : (
            <div>
              <ul className="flex flex-col gap-4 mb-3">
                {HEADER_OPEN_ICON.map((icon) => (
                  <div
                    key={icon.id}
                    className="flex justify-between border-b border-neutral_03 pb-2 "
                  >
                    <p>{icon.title}</p>
                    <div className="flex gap-1 items-center">
                      <Image
                        src={icon.icon}
                        alt={icon.alt}
                        width={24}
                        height={24}
                      />
                      <Counter />
                    </div>
                  </div>
                ))}
              </ul>
              <DarkButton>
                <Link href={"/"}>Sign In</Link>
              </DarkButton>
              <div className="flex gap-6">
                <Image
                  src={"/icons/instagram.svg"}
                  alt="insta"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/facebook.svg"}
                  alt="insta"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/youtube.svg"}
                  alt="insta"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
