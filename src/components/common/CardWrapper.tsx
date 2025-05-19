import { cn } from "@/common/lib/utils";
import React from "react";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all lg:p-6 sm:py-3 sm:px-4 px-4 py-3 ",
        className
      )}
    >
      {children}
    </div>
  );
}
