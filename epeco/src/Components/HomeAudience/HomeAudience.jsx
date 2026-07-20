import { useTranslation } from "react-i18next";
import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import i18next from "i18next";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CardAudience from "./CardAudience.jsx";
import { Link } from "react-router";

export default function HomeAudience() {
  const { t } = useTranslation();
  const isArabic = i18next.language === "ar";
    const items = t("audience.items", { returnObjects: true });

  return (
    <>
      <div className="flex  items-center justify-between mb-10">
        <TitleSec
          title={t("secTitle")}
          className={`text-[#1A2E1D]!  font-normal ${isArabic ? "text-right" : "text-left"} `}
        />
        <Link
          className={`flex items-center justify-center text-[#2D7A45] text-2xl font-light  ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"} `}>
          <p>{t("subTitle")}</p>
          {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
        </Link>
      </div>

      <div className=" flex flex-wrap gap-7">
        {items.map((item) => (
          <CardAudience
            key={item.id}
            title={item.title}
            description={item.description}
            linkText={item.linkText}
            // onDetailsClick={() => console.log("Clicked:", item.id)}
          />
        ))}
      </div>
    </>
  );
}
