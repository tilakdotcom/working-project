import { serviceCardData } from "@/common/data";
import CommonSection from "../../common/CommonSection";
import Heading from "../../common/Heading";
import { CustomButtonWrapper } from "../../common/CustomButtons";
import ServiceCard from "@/components/card/ServiceCard";
import { Link } from "react-router-dom";

export default function OurServiceSection() {
  return (
    <>
      <CommonSection className=" flex  flex-col bg-gradient-to-b from-cream-50 to-gray-200 space-y-6 sm:space-y-8 max-w-7xl mx-auto pt-0 py-8 lg:px-16  lg:py-16">
        <Heading className="lg:text-3xl  py-4 text-2xl text-center">
          Our Approach
        </Heading>

        <div className=" grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-3  sm:mt-8">
          {serviceCardData.map((item, i) => (
            <ServiceCard
              Icon={item.icon}
              iconColor={"#f1ad3b"}
              description={item.decription}
              spanColor={"#fef1c7"}
              title={item.title}
              key={i}
            />
          ))}
        </div>
      </CommonSection>

      <CommonSection className="mx-auto pt-0 py-8 lg:px-16  lg:py-16 justify-center items-center">
        <div className=" bg-gradient-to-l space-y-5 sm:space-y-6 max-w-7xl  flex flex-col justify-center items-center from-cream-200 py-12 px-6 to-cream-200 rounded-2xl">
          <Heading className="font-semibold md:text-3xl text-2xl sm:text-2xl text-center">
            Ready to Begin Your Wedding Journey?
          </Heading>

          <p className="text-base sm:text-lg tracking-wide text-gray-500 font-normal text-center max-w-2xl">
            Let's create a celebration that reflects your unique love story and
            exceeds your expectations.
          </p>
          <Link to={"/contact"}>
            <CustomButtonWrapper className="  bg-gold hover:bg-gold-600 text-white">
              Book Your Free Consultation
            </CustomButtonWrapper>
          </Link>
        </div>
      </CommonSection>
    </>
  );
}
