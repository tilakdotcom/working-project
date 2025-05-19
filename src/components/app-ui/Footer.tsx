import { logo } from "@/assets";
import { MotionDiv } from "../common/Animated";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import CommonSection from "../common/CommonSection";
import { getInTouchData, HeaderLink, ServicesLinks } from "@/common/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <CommonSection className="bg-gradient-to-b from-cream-50 to-gray-200  space-y-8 sm:space-y-10 pt-4 pb-0 ">
        {/* Footer content */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-6">
          {/* first */}
          <MotionDiv initialY={40} className="flex flex-col gap-y-3 ">
            <div className="">
              <img src={logo} alt="logo" className="w-52 object-cover" />
            </div>

            <p className="text-sm md:text-sm tracking-wide text-gray-500  lg:text-start py-1.5">
              Let us create the perfect celebration of your love story. From
              intimate gatherings to grand celebrations, we make your dream
              wedding a reality.
            </p>

            <div className="flex px-4 gap-x-5 text-xl md:text-3xl py-3 md:py-4 text-gray-500 hover:text-gray-600">
              <LuInstagram className="cursor-pointer" />
              <LuTwitter className="cursor-pointer" />
            </div>
          </MotionDiv>

          {/* second */}
          <MotionDiv
            initialY={40}
            delay={0.3}
            className="flex flex-col gap-y-3 px-3  sm:mx-auto"
          >
            <span className="md:text-xl text-lg font-medium tracking-normal px-0.5">
              Quick Links
            </span>

            {HeaderLink.map((link) => (
              <Link
                className="text-sm md:text-sm tracking-wide text-gray-600  hover:text-gold transition-colors capitalize hover:underline text-start "
                to={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </MotionDiv>

          {/* third */}
          <MotionDiv
            initialY={40}
            delay={0.6}
            className="flex flex-col gap-y-3 px-3 md:mx-auto"
          >
            <span className="md:text-xl text-lg font-medium tracking-normal px-0.5">
              Our Services
            </span>

            {ServicesLinks.map((link) => (
              <Link
                key={link}
                className="text-sm md:text-sm tracking-wide text-gray-600  hover:text-gold transition-colors capitalize hover:underline text-start"
                to={`/services`}
              >
                {link}
              </Link>
            ))}
          </MotionDiv>

          {/* forth */}
          <MotionDiv
            initialY={40}
            delay={0.9}
            className="flex flex-col gap-y-3 px-3 sm:mx-auto"
          >
            <span className="md:text-xl text-lg font-medium tracking-normal px-0.5">
              Get In Touch
            </span>

            {getInTouchData
              .filter((link) => !link.belong.includes("Business Hours"))
              .map((link) => (
                <div
                  className="text-sm md:text-sm tracking-wide text-gray-600  transition-colors capitalize  text-start flex items-center gap-3"
                  key={link.text}
                >
                  <span>
                    <link.Icon className="size-5 text-gold" />
                  </span>
                  {link.text}
                </div>
              ))}
          </MotionDiv>
        </div>

        <div className="delay-200 text-xs sm:text-sm tracking-wide text-gray-500 text-center lg:text-start h-16">
          © {new Date().getFullYear()} BloomKnot Wedding Planning. All rights
          reserved.
        </div>
      </CommonSection>
    </>
  );
}
