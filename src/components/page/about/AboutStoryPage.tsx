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

          <p className="text-gray-500  sm:max-w-2xl ">
            Founded in 2020, BloomKnot emerged from a passion for creating
            magical moments. Our journey began with a simple belief: every
            couple deserves a wedding day that perfectly reflects their unique
            love story.
          </p>
          <p className="text-gray-500  sm:max-w-2xl ">
            What started as a small team of dedicated planners has blossomed
            into a full-service wedding planning company, orchestrating
            breathtaking celebrations across the country.
          </p>
          <p className="text-gray-500  sm:max-w-2xl ">
            Our name "BloomKnot" represents the beautiful union of two lives
            coming together, like flowers blooming and intertwining in perfect
            harmony.
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
