import { planningCardData } from "@/common/data";
import PlanningCard from "@/components/card/PlanningCard";
import { MotionDiv } from "@/components/common/Animated";
import CommonSection from "@/components/common/CommonSection";
import GradientText from "@/components/common/GradientText";
import Heading from "@/components/common/Heading";

export default function PlanningSection() {
  return (
    <>
      <CommonSection className=" bg-gradient-to-b from-cream-50 to-gray-200  space-y-6 sm:space-y-7 sm:py-28 ">
        <MotionDiv initialY={50} className="text-center ">
          <Heading className="lg:text-5xl tracking-wide font-bold md:text-5xl ">
            Our{" "}
            <GradientText
              className="lg:text-5xl md:text-4xl"
              children="Planning"
            />{" "}
            Process
          </Heading>
        </MotionDiv>

        <MotionDiv
          initialY={50}
          className=" text-sm sm:text-[17px] tracking-wide flex justify-center"
        >
          <p className="text-gray-500 text-center sm:max-w-2xl ">
           From initial consultation to final installation, our streamlined process ensures reliable cable gland integration with zero stress.
          </p>
        </MotionDiv>

        <MotionDiv
          initialY={50}
          className=" max-w-5xl mx-auto  sm:mt-16 mt-8"
        >
          {planningCardData.map((item, i) => (
            <MotionDiv
              key={i}
              initialY={50}
              delay={i * 0.2}
              className="relative flex p-1"
            >
              <PlanningCard
                id={i}
                Icon={item.icon}
                iconColor={item.iconColor}
                description={item.decription}
                spanColor={item.spanColor}
                title={item.title}
                key={i}
              />
            </MotionDiv>
          ))}{" "}
        </MotionDiv>
      </CommonSection>
    </>
  );
}
