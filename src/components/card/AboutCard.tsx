import { cn } from "@/common/lib/utils";
import CardWrapper from "../common/CardWrapper";
import { LuSparkles } from "react-icons/lu";

type AboutCardProps = {
  className?: string;
  title: string;
  description: string;
};

export default function AboutCard({
  description,
  title,
  className,
}: AboutCardProps) {
  return (
    <CardWrapper
      className={cn(
        " flex flex-col justify-center items-center bg-cream-50  shadow-sm sm:gap-3  gap-1.5 hover:shadow-md cursor-default hover:bg-cream-100  lg:p-8 sm:py-4 sm:px-5 px-5 py-4 space-y-2",
        className
      )}
    >
      <span className={`rounded-full p-4 bg-gold-100`}>
        <LuSparkles className="size-5 sm:size-6 text-gold-600" />
      </span>
      <div className="lg:text-xl text-lg text-center font-medium">{title}</div>
      <div className="text-sm sm:text-base tracking-wide text-gray-500 font-normal text-center">
        {description}
      </div>
    </CardWrapper>
  );
}
