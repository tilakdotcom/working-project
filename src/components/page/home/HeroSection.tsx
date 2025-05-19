import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { heroImage1 } from "@/assets";
import { FaHeart } from "react-icons/fa6";
import AnimatedDiv, { BottomLine } from "@/components/common/Animated";
import CommonSection from "@/components/common/CommonSection";
import GradientText from "@/components/common/GradientText";
import Heading from "@/components/common/Heading";
import { CustomButtonWrapper } from "@/components/common/CustomButtons";
import { Link } from "react-router-dom";
export default function HeroSection() {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <CommonSection className="grid grid-cols-1 lg:grid-cols-2 pb-7 gap-y-8 sm:gap-y-5 pt-0 bg-gradient-to-b from-cream-50 to-gray-200 ">
        <div className="flex flex-col justify-center lg:gap-y-5 gap-y-8 order-2 lg:order-1 ">
          <AnimatedDiv
            visible={visible}
            className="flex text-sm lg:text-base 
            justify-center lg:justify-start
            "
            startPosition="-translate-x-10 "
            endPosition="translate-x-0 "
          >
            <p className="uppercase relative text-gold-600 ">
              <span className="ml-5 lg:hidden" />
              Wedding Planning & Design
              <span className="mr-5" />
              <BottomLine className="h-[1px] lg:h-0.5" visible={visible} />
            </p>
          </AnimatedDiv>

          <AnimatedDiv visible={visible} className="text-center lg:text-start">
            <Heading className="lg:text-7xl tracking-wide font-[600] md:text-5xl">
              Your Dream Wedding,{" "}
              <GradientText
                className="lg:text-7xl md:text-5xl"
                children="Our Expertise"
              />
            </Heading>
          </AnimatedDiv>

          <AnimatedDiv
            visible={visible}
            className="delay-200 text-sm sm:text-[17px] tracking-wide text-gray-500 text-center lg:text-start "
          >
            Let us create the perfect celebration of your love story. From
            intimate gatherings to grand celebrations, we craft unforgettable
            moments that reflect your unique journey.
          </AnimatedDiv>

          <AnimatedDiv
            visible={visible}
            className="delay-300 flex justify-center lg:justify-start"
          >
            <Link to={"/contact"}>
              <CustomButtonWrapper className="flex items-center gap-x-2   bg-gradient-to-tr from-gold font-medium text-white to-gold-700  md:px-6 md:py-1.5 transition-transform hover:translate-x-1">
                Book Your Consultation
                <FaArrowRightLong className="text-white" fill="white" />
              </CustomButtonWrapper>
            </Link>
          </AnimatedDiv>
        </div>
        <div className="flex justify-center items-center lg:order-2 order-1">
          <AnimatedDiv
            startPosition="scale-75"
            endPosition="scale-100"
            visible={visible}
            className="delay-300 relative"
          >
            <img
              src={heroImage1}
              alt="image"
              draggable="false"
              className="object-cover  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full overflow-hidden  rounded-xl "
              unselectable="on"
            />
            <AnimatedDiv
              visible={visible}
              className="flex absolute bottom-0 animate-float duration-1000 -left-1 md:-left-3 rounded-2xl bg-gold-50 lg:py-2 lg:px-4 p-2 items-center gap-x-2 "
            >
              <span className="p-2.5 bg-gold-200 rounded-full flex items-center">
                <FaHeart className="lg:size-5 text-gold-800 fill-gold-700 " />
              </span>
              <div className="text-sm lg:text-base font-medium ">
                Trusted by
                <Heading className="lg:text-3xl md:text-3xl ">
                  500+ Couples
                </Heading>
              </div>
            </AnimatedDiv>
          </AnimatedDiv>
        </div>
      </CommonSection>
    </>
  );
}
