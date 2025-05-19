import { ourApproachData } from "@/common/data";
import CommonSection from "../../common/CommonSection";
import Heading from "../../common/Heading";
import AboutCard from "../../card/AboutCard";
import { CustomButtonWrapper } from "../../common/CustomButtons";
import { Link } from "react-router-dom";

export default function AboutApproach() {
  return (
    <>
      <CommonSection className=" flex  flex-col bg-gradient-to-b from-cream-50 to-gray-200 space-y-5 sm:space-y-8 max-w-7xl mx-auto pt-0 py-8 lg:px-16  lg:py-16">
        <Heading className="lg:text-3xl md:py-6 py-4 text-2xl text-center">
          Our Approach
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ourApproachData.map((item, i) => (
            <AboutCard
              title={item.title}
              key={i}
              description={item.description}
            />
          ))}
        </div>
      </CommonSection>

      <CommonSection className="mx-auto pt-0 py-8 lg:px-16  lg:py-16 justify-center items-center">
        <div className=" bg-gradient-to-l space-y-5 sm:space-y-6 max-w-7xl  flex flex-col justify-center items-center from-cream-200 py-12 to-cream-200 rounded-2xl px-6">
          <Heading className="font-semibold md:text-3xl text-2xl sm:text-3xl text-center">
            Ready to Secure Your Cables with Confidence?
          </Heading>

          <p className="text-base sm:text-lg tracking-wide text-gray-500 font-normal text-center max-w-2xl">
            Let's create a secure, reliable solution that meets your unique
            connection needs and exceeds expectations."
          </p>

          <Link to={"/contact"}>
            <CustomButtonWrapper className="  bg-gold hover:bg-gold-600 text-white">
              Get Started
            </CustomButtonWrapper>
          </Link>
        </div>
      </CommonSection>
    </>
  );
}
