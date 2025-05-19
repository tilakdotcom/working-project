import { advantageData } from "@/common/data";
import AdvantageCard from "@/components/card/AdvantageCard";
import { BottomLine, MotionDiv } from "@/components/common/Animated";
import CommonSection from "@/components/common/CommonSection";
import GradientText from "@/components/common/GradientText";
import Heading from "@/components/common/Heading";
import { useEffect, useState } from "react";
export default function AdvantageSection() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <CommonSection className="  bg-gradient-to-b from-cream-50 to-gray-200  space-y-7 sm:space-y-7 sm:py-28 ">
        <MotionDiv
          className="flex text-sm lg:text-base 
                  justify-center 
                  "
          initialX={-10}
        >
          <p className="uppercase relative  ">
            <span className="mx-5 text-gold-600">Our Advantages</span>
            <BottomLine
              className="h-[1px] -bottom-1 lg:h-0.5"
              visible={visible}
            />
          </p>
        </MotionDiv>

        <MotionDiv initialY={40} className="text-center ">
          <Heading className="lg:text-5xl tracking-wide font-bold md:text-5xl">
            Why Choose{" "}
            <GradientText className="lg:text-5xl md:text-4xl" children="Us" />
          </Heading>
        </MotionDiv>

        <MotionDiv
          initialY={40}
          className="text-sm sm:text-[17px] tracking-wide flex justify-center"
        >
          <p className="text-gray-500 text-center sm:max-w-2xl ">
            We power your projects with precision, reliability, and innovation —
            delivering cable glands engineered for performance.
          </p>
        </MotionDiv>

        <MotionDiv initialY={40} className="flex justify-center ">
          <span className=" bg-gradient-to-r block from-transparent via-gold-600 to-transparent h-0.5 w-1/12" />
        </MotionDiv>

        <MotionDiv className=" grid grid-cols-1 gap-3  sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 mt-8">
          {advantageData.map((item, i) => (
            <MotionDiv initialX={10} key={i} delay={i * 0.5} className="flex">
              <AdvantageCard
                Icon={item.icon}
                iconColor={item.iconColor}
                description={item.decription}
                spanColor={item.spanColor}
                title={item.title}
                key={i}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </CommonSection>
    </>
  );
}
