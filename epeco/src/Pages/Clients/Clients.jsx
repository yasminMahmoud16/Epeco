import i18next from "i18next";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import { useTranslation } from "react-i18next";
import ClientsImg from "../../Components/ClientsImg/ClientsImg.jsx";
import ClientsReview from "../../Components/ClientsReview/ClientsReview.jsx";


export default function Clients() {

    const isArabic = i18next.language === "ar";
    const { t } = useTranslation();


    return (
      <>
        <section className="bg-[#F5F0E8]">
          <div className="hidden md:block w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
            <ArticleSubNav
              mainTitle={t("clients.mainTitle")}
              main={t("clients.main")}
            />

            <TitleSec
              title={t("clients.mainTitle")}
              className={`hidden md:block ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl mt-2`}
            />
          </div>

          <div className="mt-20 md:mt-5 flex flex-col gap-6 items-center ">
            <TitleSec
              title={t("clients.title")}
              className="text-title font-normal leading-none text-2xl "
            />

            <p className="font-normal text-lg  px-4 xl:text-xl text-center text-[#1A5C2C] leading-10">
              {t("clients.description")}
            </p>
          </div>

          <div className=" flex items-center justify-center my-6 px-5">
            <ClientsImg />
          </div>
          <div className=" bg-[#0D1A10] flex flex-col items-center justify-center my-6 px-20 py-6">
            <ClientsReview />
          </div>
        </section>
      </>
    );
}
