import { AccordionCard } from "@/components/card/AccordionCard";
import { BottomLine, MotionDiv } from "@/components/common/Animated";
import CardWrapper from "@/components/common/CardWrapper";
import CommonSection from "@/components/common/CommonSection";
import { CustomButtonWrapper } from "@/components/common/CustomButtons";
import GradientText from "@/components/common/GradientText";
import Heading from "@/components/common/Heading";
import { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function GetInformedSection() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <CommonSection className=" bg-gradient-to-b from-cream-50 to-gray-100 space-y-5 sm:space-y-7 sm:py-28 *:">
        <MotionDiv
          className="flex text-sm lg:text-base 
                  justify-center 
                  "
          initialX={-10}
        >
          <p className="uppercase relative  ">
            <span className="mx-5 text-gold-600">Get Informed</span>
            <BottomLine
              className="h-[1px] -bottom-1 lg:h-0.5"
              visible={visible}
            />
          </p>
        </MotionDiv>

        <MotionDiv initialY={40} className="text-center ">
          <Heading className="lg:text-5xl tracking-wide font-bold md:text-5xl">
            Frequently Asked{" "}
            <GradientText
              className="lg:text-5xl md:text-4xl"
              children="Questions"
            />
          </Heading>
        </MotionDiv>

        <MotionDiv
          initialY={40}
          className="text-sm sm:text-[17px] tracking-wide flex justify-center"
        >
          <p className="text-gray-500 text-center sm:max-w-2xl ">
          Everything you need to know about our cable gland solutions.
          </p>
        </MotionDiv>

        <MotionDiv initialY={40} className="flex justify-center ">
          <span className=" bg-gradient-to-r block from-transparent via-gold-600 to-transparent h-0.5 w-1/12" />
        </MotionDiv>

        <MotionDiv
          initialY={50}
          className="sm:mt-16 mt-8 max-w-5xl mx-auto last:mb-0"
        >
          <AccordionCard />
        </MotionDiv>

        <MotionDiv
          initialY={50}
          className="sm:mt-16 mt-8 max-w-5xl mx-auto  last:mb-0"
        >
          <CardWrapper className="flex flex-col md:flex-row justify-between  items-center bg-cream-50  shadow-sm sm:gap-3  md:gap-1.5 gap-3 hover:shadow-md cursor-default hover:bg-cream-100 py-4">
            <div className="flex items-center gap-2 justify-between flex-col md:flex-row">
              <span className={`rounded-full p-4 bg-[#fbf7eb]`}>
                <AiOutlineQuestionCircle className="size-5 sm:size-6 text-[#d4af37] " />
              </span>

              <div className="lg:text-lg text-base font-medium text-center md:text-start">
                Still have questions?
                <div className="text-[13px] sm:text-sm tracking-wide text-gray-500 font-normal text-center md:text-start">
                  We're here to help you find the perfect cable gland solution.
                </div>
              </div>
            </div>
            <Link to={"/contact"}>
              <CustomButtonWrapper className="flex items-center gap-x-2   bg-gradient-to-tr from-gold font-medium text-white to-gold-600 hover:to-gold-700  md:px-6 md:py-1.5 sm:text-[15px] ">
                Contact Us
              </CustomButtonWrapper>
            </Link>
          </CardWrapper>
        </MotionDiv>
      </CommonSection>
    </>
  );
}
