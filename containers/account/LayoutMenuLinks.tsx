"use client";

import { PROFILE_LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LayoutMenuLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col px-4 gap-3 semibold-body-2 ">
      {PROFILE_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={`pb-2  ${
            pathname === link.href
              ? "border-b border-neutral_07 text-neutral_07"
              : "text-neutral_04"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default LayoutMenuLinks;
