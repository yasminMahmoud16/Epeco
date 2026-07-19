import { useTranslation } from "react-i18next";
import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import { Link } from "react-router";
import i18next from "i18next";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CardSec from "../../Common/Card/CardSec.jsx";


import card1 from "../../assets/Images/card1.png"
import card2 from "../../assets/Images/card2.jpg"
import card3 from "../../assets/Images/card3.jpg"
export default function HomePolicy() {
    const isArabic = i18next.language === "ar";

    const { t } = useTranslation("policy")
    return (
      <>
        <TitleSec title={t("secTitle")} />

        <div className="mt-5">
          <p className="font-normal text-lg xl:text-2xl text-center text-[#2D7A45] leading-10">
            {t("description")}
          </p>
          <div className="mt-3">
            <Link
              to={"/"}
              className={`flex items-center justify-center text-[#2D7A45] font-extrabold text-2xl   ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"}`}
            >
              {t("aboutSec")}
              {isArabic ? (
                <IoIosArrowRoundBack className="md:text-lg xl:text-3xl font-extrabold   " />
              ) : (
                <IoIosArrowRoundForward />
              )}
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-2 md:gap-4 mt-4">
          <CardSec
            className="p-7 w-full md:w-1/3"
            titleClassName="text-xl md:text-3xl font-extrabold text-[#2D7A45] leading-none pb-2"
            highlightWord={t("cardTitle1")}
            image={card1}
            description={t("cardDesc1")}
            descriptionClassName={`text-[#2D7A45] font-semibold h-16 ${isArabic ? "text-md lg:text-xl" : "text-lg"}`}
          />
          <CardSec
            className="p-7 w-full md:w-1/3"
            titleClassName="text-xl md:text-3xl font-extrabold text-[#2D7A45] leading-none pb-2"
            highlightWord={t("cardTitle2")}
            image={card2}
            description={t("cardDesc2")}
            descriptionClassName={`text-[#2D7A45] font-semibold h-16 ${isArabic ? "text-md lg:text-xl" : "text-lg"}`}
          />
          <CardSec
            className="p-7 w-full md:w-1/3"
            titleClassName="text-xl md:text-3xl font-extrabold text-[#2D7A45] leading-none pb-2"
            highlightWord={t("cardTitle3")}
            image={card3}
            description={t("cardDesc3")}
            descriptionClassName={`text-[#2D7A45] font-semibold h-16 ${isArabic ? "text-md lg:text-xl" : "text-lg"}`}
          />
        </div>
      </>
    );
}
