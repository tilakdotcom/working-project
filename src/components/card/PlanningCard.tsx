import { cn } from "@/common/lib/utils";
import CardWrapper from "../common/CardWrapper";
import { IconType } from "react-icons";

type PlanningCardProps = {
  className?: string;
  Icon: IconType;
  title: string;
  description: string;
  spanColor: string;
  iconColor: string;
  id?: number;
};

export default function PlanningCard({
  description,
  Icon,
  title,
  iconColor,
  spanColor,
  id = 1,
  className,
}: PlanningCardProps) {
  return (
    <CardWrapper
      className={cn(
        " flex gap-3 sm:gap-y-5 sm:gap-x-7 cursor-default bg-transparent items-center",
        className
      )}
    >
      <span
        className={`z-10 rounded-full p-4 sm:p-6`}
        style={{
          backgroundColor: spanColor,
        }}
      >
        <Icon className="size-5 sm:size-7" style={{ color: iconColor }} />
      </span>
      <div className="flex flex-col gap-1">
        <div className="lg:text-2xl text-xl font-medium flex gap-x-2 items-center">
          <span className="text-sm md:text-[15px]">step {id + 1}</span> {title}
        </div>
        <div className="text-sm sm:text-base tracking-wide text-gray-500 font-normal ">
          {description}
        </div>
      </div>
    </CardWrapper>
  );
}
