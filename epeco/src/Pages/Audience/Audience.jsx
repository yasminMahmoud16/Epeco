import { AiOutlineMail } from "react-icons/ai";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import { FiPrinter } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import ArticleList from "../../Common/ArticleList/ArticleList.jsx";
import ArticleDescription from "../../Common/ArticleDescription/ArticleDescription.jsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Audience() {
    const { t } = useTranslation();
    const list = t("audienceArticle.list", { returnObjects: true });
  const mainTitle = t("audienceArticle.mainTitle");
  console.log("audienceArticle.mainTitle");

    const [activeSlug, setActiveSlug] = useState(
        Array.isArray(list) && list.length > 0 ? list[0].slug : null,
    );

    const activeItem = Array.isArray(list)
        ? list.find((item) => item.slug === activeSlug)
        : null;

    return (
      <>
        <div className="w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
          <ArticleSubNav
            slug={activeItem?.label}
            mainTitle={t("audienceArticle.mainTitle")}
            main={t("audienceArticle.main")}
          />
          <div className=" flex  mt-6 md:flex-row-reverse gap-1.5 items-center">
            <AiOutlineMail className="text-[#1A5C2C]" />
            <FiPrinter
              className="text-[#1A5C2C] hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#31974d]"
              onClick={() => window.print()}
            />
            <MdArrowOutward className="text-[#1A5C2C]" />
          </div>
        </div>
        <section className="flex flex-col lg:flex-row gap-8 py-6 px-16 bg-white">
          <div className="shrink-0">
            <ArticleList
              mainTitle={mainTitle}
              list={list}
              activeSlug={activeSlug}
              onSelect={setActiveSlug}
            />
          </div>

          <div className="flex-1">
            <ArticleDescription list={list} activeSlug={activeSlug} />
          </div>
        </section>
      </>
    );
}