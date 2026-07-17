import { useTranslation } from "react-i18next";
import LangSwitchIcon from "../../Components/LangSwitchIcon/LangSwitchIcon.jsx";
import logo from "../../assets/Images/EPECO flayer 2 1.png";
import { Link } from "react-router";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");
  return (
    <>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 shadow-md  ">
        <div className="flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden md:block order-5 md:order-none ml-auto md:ml-0">
            <LangSwitchIcon />
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } order-3 w-full md:block md:w-auto md:order-none`}
          >
            <ul
              className="
    font-medium
    flex
    flex-col
    md:flex-row
    p-4
    md:p-0
    
    rounded-base
    bg-neutral-secondary-soft
    md:bg-neutral-primary
    gap-2
    md:gap-0
    md:space-x-8
    rtl:space-x-reverse
"
            >
              <li className="hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                  aria-current="page"
                >
                  {t("Home")}
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                >
                  {t("About")}
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                >
                  {t("TargetAudience")}
                </Link>
              </li>
              <li className="md:mr-6 hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                >
                  {t("OurServices")}
                </Link>
              </li>
            </ul>

            {/* logo */}
          </div>
          <div
            className={`w-16 h-16 order-6 md:order-none ${
              isOpen ? "hidden md:block" : "block"
            }`}
          >
            <img src={logo} className="w-full object-fill" alt="Logo" />
          </div>

          {/* second links  */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } order-4 w-full md:block md:w-auto md:order-none`}
          >
            <ul
              className="
    font-medium
    flex
    flex-col
    md:flex-row
    md:py-4
    px-4
    md:p-0
    
    rounded-base
    bg-neutral-secondary-soft
    md:bg-neutral-primary
    gap-2
    md:gap-0
    md:space-x-8
    rtl:space-x-reverse
"
            >
              <li className="hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                  aria-current="page"
                >
                  {t("ContactUs")}
                </Link>
              </li>
              <li className="hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                >
                  {t("Certifications")}
                </Link>
              </li>
              <li className="md:mr-6 hover:bg-gray-100 rounded-lg md:hover:bg-transparent">
                <Link
                  href="#"
                  className="relative block py-2 pr-2 md:px-3 text-xl text-title font-medium
transition-all duration-300
hover:text-green-700 hover:translate-x-1
md:hover:translate-x-0
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0
after:bg-green-700
after:transition-all after:duration-300
md:hover:after:w-full"
                >
                  {t("Clients")}
                </Link>
              </li>
            </ul>
            {/* Mobile menu */}
            {isOpen && (
              <div className="md:hidden w-full bg-neutral-secondary-soft rounded-base mt-2 p-4">
                <button className="bg-[#2D7A45] py-2.5 px-5 rounded-2xl text-[#F0EDE6] text-lg font-normal w-full transition-all duration-300 hover:bg-[#25683A]">
                  {t("ConsulationRequest")}
                </button>

                <div className="flex items-center justify-center gap-4 mt-4">
                  <LangSwitchIcon />

                  <img
                    src={logo}
                    alt="Logo"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* requests button */}
          <div>
            <button className="hidden md:block bg-[#2D7A45] py-2.5 px-5 rounded-2xl text-[#F0EDE6] text-xl font-normal transition-all duration-300 hover:bg-[#25683A] hover:cursor-pointer">
              {t("ConsulationRequest")}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
