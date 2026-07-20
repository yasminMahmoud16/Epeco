import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaTiktok,
    FaFacebookF,
} from "react-icons/fa6";
import KSA from "../../assets/Images/السعوديه.png"
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function SocialMediaContact() {
    const { t } = useTranslation();
    const emails = t(
        "contactInfo.email.emails",
        {
            returnObjects: true,
        },
    );
    const phones = t("contactInfo.complaints.phones", {
        returnObjects: true,
    });
    const headsNums = t("contactInfo.headOffice.phones", {
        returnObjects: true,
    });

    const isArabic = i18next.language === "ar";

    return (
      <>
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6 md:space-y-8">
          {/* Intro paragraph */}
          <p
            className={`text-body leading-[1.8] text-sm md:text-lg text-[#1A5C2C] font-normal   ${isArabic ? "text-right" : "text-left"}  max-w-2xl`}
          >
            {t("contactInfo.successMessage")}
          </p>

          {/* Email + Complaints cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {/*  complains  */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3
                className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
              >
                {t("contactInfo.complaints.title")}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {phones.map((phone) => (
                  <div className="flex items-center gap-2">
                    <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                    <span
                      className="text-xs md:text-sm text-gray-600"
                      dir="ltr"
                    >
                      {phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* email*/}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3
                className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
              >
                {t("contactInfo.email.title")}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {emails.map((email) => (
                  <div className="flex items-center gap-2">
                    <HiOutlineMail className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600 truncate">
                      {email}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Head office and eastern region*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Head office */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col  gap-3 mb-3 md:mb-4">
                <h3
                  className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {t("contactInfo.headOffice.title")}
                </h3>
                <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                  <HiOutlineLocationMarker className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                  <p>{t("contactInfo.headOffice.address")}</p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {headsNums.map((phone) => (
                    <div className="flex items-center gap-2">
                      <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                      <p className="text-xs md:text-sm text-gray-600" dir="ltr">
                        {phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* eastern region  */}
            <div className="border border-gray-200 rounded-2xl p-4 md:p-6">
              <div className="flex flex-col   gap-3 mb-3 md:mb-4">
                <h3
                  className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {t("contactInfo.easternRegion.title")}
                </h3>
                <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500 ">
                  <HiOutlineLocationMarker className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                  <p>{t("contactInfo.easternRegion.address")}</p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2">
                    <FiPhone className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                    <p className="text-xs md:text-sm text-gray-600" dir="ltr">
                      {t("contactInfo.easternRegion.phone")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineMail className="h-4 w-4 md:h-5 md:w-5 text-[#2D7A45] shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">
                      {t("contactInfo.easternRegion.email")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* workingHours*/}
          <div className="border border-gray-200 rounded-2xl p-4 md:p-6 text-right">
            <h3
              className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
            >
              {t("contactInfo.workingHours.title")}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-6 md:leading-7">
              {t("contactInfo.workingHours.days")}
              <br />
              {t("contactInfo.workingHours.hours")}
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <p
              className={`text-sm md:text-lg font-bold text-[#1A5C2C] mb-3 md:mb-4 ${isArabic ? "text-right" : "text-left"}`}
            >
              {t("contactInfo.social.title")}
            </p>
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-[#1A2E1D] text-white hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src={KSA}
            alt="Saudi Arabia"
            className="w-full h-auto object-contain"
          />
        </div>
      </>
    );
    
}
