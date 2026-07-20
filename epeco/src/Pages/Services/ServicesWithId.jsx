import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import { AiOutlineMail } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import ArticleList from "../../Common/ArticleList/ArticleList.jsx";
import ArticleDescriptionWithId from "../../Common/ArticleDescription/ArticleDescriptionWithId.jsx";

export default function ServicesWithId() {
  const { t } = useTranslation();
  const { id } = useParams(); // comes from "/services/:id"

  const list = t("servciesArticle.list", { returnObjects: true });
  const mainTitle = t("servciesArticle.mainTitle");

  // Derived directly on every render — id from URL decides which item is active
  const activeId = id
    ? Number(id)
    : Array.isArray(list) && list.length > 0
      ? list[0].id
      : null;

  const activeItem = Array.isArray(list)
    ? list.find((item) => item.id === activeId)
    : null;

  return (
    <>
      <div className="w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
        <ArticleSubNav
          slug={activeItem?.label}
          mainTitle={t("servciesArticle.mainTitle")}
          main={t("servciesArticle.main")}
        />
        <div className="flex mt-6 md:flex-row-reverse gap-1.5 items-center">
          <AiOutlineMail className="text-[#1A5C2C]" />
          <FiPrinter className="text-[#1A5C2C]" />
          <MdArrowOutward className="text-[#1A5C2C]" />
        </div>
      </div>
      <section className="flex flex-col lg:flex-row gap-8 py-6 px-16 bg-white">
        <div className="shrink-0">
          <ArticleList mainTitle={mainTitle} list={list} activeId={activeId} />
        </div>

        <div className="flex-1">
          <ArticleDescriptionWithId list={list} activeId={activeId} />
        </div>
      </section>
    </>
  );
}
