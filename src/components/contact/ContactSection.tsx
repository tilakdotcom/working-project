import { getInTouchData } from "@/common/data";
import { ContactUsForm } from "../app-ui/ContactUsForm";
import { MotionDiv } from "../common/Animated";
import CardWrapper from "../common/CardWrapper";
import CommonSection from "../common/CommonSection";
import GradientText from "../common/GradientText";
import Heading from "../common/Heading";
import { TbHeartHandshake } from "react-icons/tb";

export default function ContactSection() {
  return (
    <CommonSection className=" bg-gradient-to-b 0 space-y-5 sm:space-y-7">
      <MotionDiv initialY={40} className="text-center ">
        <Heading className="lg:text-5xl tracking-wide font-bold md:text-5xl">
          Get in{" "}
          <GradientText className="lg:text-5xl md:text-4xl" children="Touch" />
        </Heading>
      </MotionDiv>

      <MotionDiv initialY={40} delay={0.25} className="flex justify-center ">
        <span className=" bg-gradient-to-r block from-transparent via-gold-600 to-transparent h-0.5 w-1/12" />
      </MotionDiv>

      <MotionDiv
        initialY={40}
        delay={0.5}
        className="text-sm sm:text-[17px] tracking-wide flex justify-center"
      >
        <p className="text-gray-500 text-center sm:max-w-2xl ">
          Have questions about our cable gland solutions? We'd love to hear from
          you and help ensure your installations are secure, efficient, and
          built to last.
        </p>
      </MotionDiv>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-10">
        <MotionDiv initialX={-50} delay={0.4} className="lg:col-span-3">
          <ContactUsForm />
        </MotionDiv>

        <MotionDiv
          initialX={50}
          delay={0.6}
          className="lg:col-span-2  space-y-5"
        >
          <CardWrapper className="border-[1px] shadow-sm hover:shadow-md  mx-auto w-full bg-cream-50 lg:py-9 sm:py-8 py-8 lg:px-7 sm:px-5 px-4 space-y-1 flex flex-col">
            <Heading className=" md:text-2xl sm:text-2xl text-xl font-semibold text-gray-700 mb-2">
              Contact Information
            </Heading>

            {getInTouchData.map((link) => (
              <div
                className="flex items-center gap-4 gap-x-6 py-2"
                key={link.belong}
              >
                <span className="p-3 bg-gold-50 rounded-full">
                  <link.Icon className="size-5 text-gold" />
                </span>
                <div className="text-sm md:text-base tracking-wide text-gray-600  transition-colors capitalize  text-start flex flex-col">
                  <span className="font-semibold">{link.belong}</span>
                  <p>{link.text}</p>
                </div>
              </div>
            ))}
          </CardWrapper>

          <CardWrapper className="flex flex-col bg-cream-50  shadow-sm sm:gap-3 space-y-2 md:gap-1.5 gap-3 hover:shadow-md cursor-default hover:bg-cream-100 py-4 ">
            <div className="flex items-center gap-2.5 md:gap-4 flex-row px-3">
              <TbHeartHandshake className="size-7 text-[#d4af37] " />

              <p className="lg:text-lg text-base font-medium text-start">
                Our Promise
              </p>
            </div>

            <div className="text-sm px-3 sm:text-[15px] tracking-wide text-gray-500 font-normal text-start">
              We’ll respond to your inquiry within 24 hours. Your project
              matters to us, and we’re committed to making every step of the
              cable management process seamless, efficient, and reliable.
            </div>
          </CardWrapper>
        </MotionDiv>
      </div>
    </CommonSection>
  );
}
