import i18next from "i18next";
import { CgFormatSlash } from "react-icons/cg";
import { TbBackslash } from "react-icons/tb";
import TitleSec from "../TitleSec/TitleSEC.jsx";

export default function ArticleSubNav({ slug, mainTitle, main }) {
  const isArabic = i18next.language === "ar";

  return (
    <>
      <div className="flex flex-col justify-between  gap-2">
        <nav className="flex " aria-label="Breadcrumb">
          <ol className="hidden md:flex items-center space-x-1 rtl:space-x-reverse text-[#1A5C2C] font-bold text-sm">
            <li aria-current="page">
              <div className="flex items-center space-x-1.5">
                <span className="inline-flex items-center text-sm font-medium text-body-subtle">
                  {slug}
                </span>
              </div>
            </li>
            {isArabic ? <CgFormatSlash /> : <TbBackslash />}

            <li className="inline-flex items-center">
              <p className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                {/* {t("aboutArticle.mainTitle")} */}
                {mainTitle}
              </p>
            </li>
            {isArabic ? <CgFormatSlash /> : <TbBackslash />}
            <li>
              <div className="flex items-center space-x-1.5">
                <p className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                  {/* {t("aboutArticle.main")} */}
                  {main}
                </p>
              </div>
            </li>
          </ol>
        </nav>
        <div>
          <TitleSec
            title={slug?.slice(0, 30) + "..."}
            className={`block md:hidden mt-2 ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl`}
          />

          {/* Full version - visible from md breakpoint up */}
          <TitleSec
            title={slug}
            className={`hidden md:block ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl mt-2`}
          />
        </div>
      </div>
    </>
  );
}
