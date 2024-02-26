"use client";
import React from "react";

import { useState } from "react";
import ChevronIcon from "@/components/Icons/Chevron";

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`border-b ${isOpen && "border-none"}`}>
      <div
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={() => {
          toggleAccordion();
          if (!activeSection) {
            setActiveSection(title);
          } else {
            setActiveSection("");
          }
        }}
      >
        <h3
          className={`buttonM-text font-semibold ${
            isOpen ? "text-neutral_07" : "text-neutral_04"
          }`}
        >
          {title}
        </h3>
        <ChevronIcon
          color={isOpen ? "#141718" : "#6C7275"}
          rotate={isOpen ? "rotate-180" : ""}
        />
      </div>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

export default AccordionItem;
