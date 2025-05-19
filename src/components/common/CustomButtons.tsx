import { cn } from "@/common/lib/utils";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
export function CustomButtonWrapper({
  children,
  className,
  type = "button",
  ...rest
}: CustomButtonProps) {
  return (
    <button
      className={cn(
        "py-[5px] px-4 rounded-md border-gold-600 border-[1px] shadow-2xs hover:shadow-sm transition duration-300 ease-in-out cursor-pointer flex items-center gap-1 text-sm sm:text-[15px]  hover:bg-gold-50 font-normal",
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
