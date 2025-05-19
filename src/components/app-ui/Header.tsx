import { logo } from "@/assets";
import { Link } from "react-router-dom";
import { HeaderLink } from "@/common/data";
import { MobileMenu } from "./MobileMenu";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[70px] flex items-center justify-between shadow-sm px-4 md:px-7 bg-opacity-80 backdrop-blur-md  overflow-hidden transform duration-500 bg-white/60">
      <div className=" overflow-hidden p-2 rounded-md ">
        <Link to="/" className="block">
          <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
        </Link>
      </div>

      <div className="lg:flex hidden gap-x-3 justify-between items-center text-sm font-medium capitalize">
        {HeaderLink.map((link, i) => (
          <div key={i} className="relative  items-start">
            <Link to={link.href} className="px-4 py-2 peer relative z-10">
              {link.name}
            </Link>

            <span
              className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-tr 
              from-amber-300
              to-amber-600 origin-left scale-x-0 peer-hover:scale-x-100 transition-transform duration-1000 ease-out rounded-full "
            />
          </div>
        ))}
      </div>

      <div className=" lg:flex hidden gap-x-3">
        {/* Phone Button */}
        <Link
          to="tel:+919999999999"
          className="group flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#30C04F] hover:bg-[#2bac47] shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Call Us"
        >
          <FaPhoneAlt  className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
        </Link>

        {/* WhatsApp Button */}
        <Link
          to="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#25D366] hover:bg-[#1ebc57] shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>

      <div className="lg:hidden ">
        <MobileMenu />
      </div>
    </header>
  );
}
