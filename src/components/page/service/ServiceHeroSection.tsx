import { serviceImage } from "@/assets";
import CommonSection from "../../common/CommonSection";
import GradientText from "../../common/GradientText";
import Heading from "../../common/Heading";

export default function ServiceHeroSection() {
  return (
    <>
      <CommonSection className=" flex  flex-col bg-gradient-to-b from-cream-50 to-gray-200 space-y-6 sm:space-y-8 max-w-7xl mx-auto pt-0 py-8 lg:px-16">
        <div className="text-center ">
          <Heading className="lg:text-5xl tracking-normal font-bold md:text-5xl">
            Our Cable Gland{" "}
            <GradientText
              className="lg:text-5xl md:text-4xl text-3xl"
              children="Solutions"
            />{" "}
            & Services
          </Heading>
        </div>

        <div className=" text-sm sm:text-[17px] tracking-wide flex justify-center -mt-3">
          <p className="text-gray-500 text-center sm:max-w-2xl ">
           From compact enclosures to large-scale industrial setups, we offer customized cable gland solutions to ensure reliable, secure, and efficient cable management.
          </p>
        </div>

        <div className="relative w-full h-[50vh] rounded-xl overflow-hidden my-10">
          <img
            src={serviceImage}
            className="absolute object-cover top-0 bottom-0 right-0 left-0 h-full w-full bg-transparent"
          />
        </div>
      </CommonSection>
    </>
  );
}
