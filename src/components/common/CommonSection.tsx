import { cn } from "@/common/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CommonSection({ children, className }: ContainerProps) {
  return (
    <div className={cn("px-2 xs:px-4 sm:px-6 overflow-hidden lg:px-10 py-6 ", className)}>
      {children}
    </div>
  );
}
