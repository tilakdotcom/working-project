import { cn } from "@/common/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientText({ children, className }: Props) {
  return (
    <span
      className={cn(
        "text-2xl sm:text-3xl  font-bold cursor-pointer bg-gradient-to-r from-gold to-gold-700 bg-clip-text text-transparent hover:via-70% pb-2 ",
        className
      )}
    >
      {children}
    </span>
  );
}
