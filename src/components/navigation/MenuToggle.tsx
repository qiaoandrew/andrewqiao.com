"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export default function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex flex-col gap-[5px] md:hidden"
    >
      <div
        className={cn(
          "h-[5px] w-[22px] rounded-full transition-transform duration-200 ease-out dark:bg-dark-text-gradient",
          isOpen ? "translate-x-[10px]" : "",
        )}
      />
      <div className="h-[5px] w-8 rounded-full dark:bg-dark-text-gradient" />
      <div
        className={cn(
          "h-[5px] w-[22px] self-end rounded-full transition-transform duration-200 ease-out dark:bg-dark-text-gradient",
          isOpen ? "-translate-x-[10px]" : "",
        )}
      />
    </button>
  );
}
