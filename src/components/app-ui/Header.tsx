import { logo } from "@/assets";
import { Link } from "react-router-dom";
import { contactData, HeaderLink } from "@/common/data";
import { MobileMenu } from "./MobileMenu";

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

      <div className="hidden lg:flex gap-4 text-sm font-semibold">
        {/* Phone Button */}

        {contactData.map(({ id, label, href, icon: Icon, color }) => (
          <Link
            key={id}
            to={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 bg-gradient-to-r ${color} text-white px-5 py-2 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
      </div>

      <div className="lg:hidden ">
        <MobileMenu />
      </div>
    </header>
  );
}
