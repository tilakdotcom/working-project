import { cn } from "@/common/lib/utils";
import CardWrapper from "../common/CardWrapper";
import { IconType } from "react-icons";

type AdvantageCardProps = {
  className?: string;
  Icon: IconType;
  title: string;
  description: string;
  spanColor: string;
  iconColor: string;
};

export default function AdvantageCard({
  description,
  Icon,
  title,
  iconColor,
  spanColor,
  className,
}: AdvantageCardProps) {
  return (
    <CardWrapper
      className={cn(
        " flex flex-col justify-center items-start bg-cream-100  shadow-sm sm:gap-3  gap-1.5 hover:shadow-md cursor-default hover:bg-gold-50",
        className
      )}
    >
      <span
        className={`rounded-full p-4`}
        style={{
          backgroundColor: spanColor,
        }}
      >
        <Icon className="size-5 sm:size-6" style={{ color: iconColor }} />
      </span>
      <div className="lg:text-lg text-base font-medium">{title}</div>
      <div className="text-[13px] sm:text-sm tracking-wide text-gray-500 font-normal ">
        {description}
      </div>
    </CardWrapper>
  );
}
