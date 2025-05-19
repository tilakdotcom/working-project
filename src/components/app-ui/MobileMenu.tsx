import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu, LuChevronRight } from "react-icons/lu";
import { TbHeartHandshake } from "react-icons/tb";
import { CustomButtonWrapper } from "../common/CustomButtons";
import { Link } from "react-router-dom";
import { HeaderLink } from "@/common/data";
import { MotionDiv } from "../common/Animated";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <LuMenu className="size-8 cursor-pointer text-gray-800 hover:text-gray-950" />
      </SheetTrigger>
      <SheetContent className="bg-gold-50">
        <MotionDiv initialX={-20} delay={0.4}>
          <SheetHeader>
            <SheetTitle className=" flex items-center md:text-xl text-lg font-medium tracking-normal px-0.5 gap-x-2 ">
              <span className={`rounded-full p-2 bg-gold-100`}>
                <TbHeartHandshake className="size-7 text-gold-700 sm:size-8" />
              </span>
              BloomKnot
            </SheetTitle>
          </SheetHeader>
        </MotionDiv>

        <div className=" flex flex-col gap-y-4 w-10/12 mx-auto">
          <div className=" flex flex-col gap-y-4 ">
            {HeaderLink.map((link, i) => (
              <MotionDiv key={i} initialY={20} delay={0.4 + i * 0.2}>
                <SheetClose asChild key={link.name}>
                  <Link
                    className="flex items-center justify-between text-[15px] md:text-base py-2 tracking-wide text-gray-700 font-medium hover:translate-x-1 duration-700 capitalize  text-start transition-transform "
                    to={link.href}
                  >
                    {link.name}
                    <LuChevronRight />
                  </Link>
                </SheetClose>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            initialX={-20}
            delay={0.8}
            className="h-[0.5px] w-9/12 bg-gray-400 mx-auto"
            children={" "}
          />

          <MotionDiv
            initialY={20}
            delay={1}
            className=" flex-col flex gap-y-2 "
          >
            <SheetClose asChild>
              <CustomButtonWrapper
                className="justify-center w-full font-medium"
                children={"Sign up"}
              />
            </SheetClose>
            <SheetClose asChild>
              <CustomButtonWrapper
                className="justify-center w-full font-medium"
                children={"Login"}
              />
            </SheetClose>
          </MotionDiv>
        </div>
      </SheetContent>
    </Sheet>
  );
}
