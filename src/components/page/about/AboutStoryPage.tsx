import { aboutImage2 } from "@/assets";
import CommonSection from "../../common/CommonSection";
import Heading from "../../common/Heading";
import { LuSparkles } from "react-icons/lu";

export default function AboutStorySection() {
  return (
    <>
      <CommonSection className=" grid grid-cols-1 md:grid-cols-2 space-y-5 sm:space-y-8 max-w-7xl mx-auto pt-0 py-8 gap-x-6 items-center lg:px-16 lg:py-12 ">
        <div className=" text-sm sm:text-base tracking-wide flex flex-col space-y-3 ">
          <Heading className="lg:text-3xl text-2xl flex items-center gap-x-2">
            <LuSparkles className="text-gold-600 size-6" />
            Our Story
          </Heading>
          <p className="text-gray-500 sm:max-w-2xl">
            Founded in 2020,VE began with a mission to deliver
            durable, high-performance cable glands that meet the evolving needs
            of modern industries.
          </p>
          <p className="text-gray-500 sm:max-w-2xl">
            What started as a small unit of passionate engineers and product
            specialists has grown into a trusted name in cable management
            solutions, serving clients across electrical, telecom, and
            industrial sectors.
          </p>
          <p className="text-gray-500 sm:max-w-2xl">
            The name VE symbolizes strength, precision, and
            connectivity—values we bring to every product we manufacture and
            every project we support.
          </p>
        </div>

        <div className="relative w-full h-[50vh] md:h-full rounded-xl overflow-hidden">
          <img
            src={aboutImage2}
            className="absolute object-cover top-0 bottom-0 right-0 left-0 h-full w-full bg-transparent"
          />
        </div>
      </CommonSection>
    </>
  );
}
