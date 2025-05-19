import { cn } from "@/common/lib/utils";
import React from "react";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "md:text-4xl text-3xl sm:text-[32px]  font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
