import { useTranslation } from "react-i18next";
import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import i18next from "i18next";

import gallery1 from "../../assets/Images/Gallery1.png";
import gallery2 from "../../assets/Images/Gallery2.jpg";
import gallery3 from "../../assets/Images/Gallery3.png";
import gallery4 from "../../assets/Images/Gallery4.jpg";
import gallery5 from "../../assets/Images/Gallery5.jpg";
import gallery6 from "../../assets/Images/Gallery6.png";
import { MdArrowOutward } from "react-icons/md";

export default function HomeService() {
    const { t } = useTranslation("services");
    const isArabic = i18next.language === "ar";

    return (
        <>
            <div className="flex justify-between items-center py-2.5">
                <di className="flex flex-col  w-auto ">
                    <h5
                        className={`text-title text-xl font-semibold pb-2.5  ${isArabic ? "" : "font-RobotoCondensed capitalize"} `}
                    >
                        {t("subTitle")}
                    </h5>
                    <TitleSec
                        title={t("secTitle")}
                        className={`font-normal text-2xl text-[#F0EDE6] ${isArabic ? "text-right" : "text-left text-2xl"}`}
                    />
                </di>
                <div>
                    <p
                        className={`text-[#F0EDE6] text-xl font-light ${isArabic ? "" : "font-RobotoCondensed"}`}
                    >
                        {t("description")}
                    </p>
                </div>
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="grid gap-4">
                    <div className="relative  overflow-hidden  rounded-3xl">
                        <img
                            className="h-full max-w-full rounded-base object-fill"
                            src={gallery1}
                            alt="gallery1"
                        />
                        {/* dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />

                        {/* top-left icon badge */}
                        <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm">
                            <MdArrowOutward className="h-4 w-4 text-white" />
                        </div>

                        {/* text content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl leading-tight font-bold text-white ">
                                {t("gallery1")}
                            </h3>
                            <p className="text-sm font-bold text-white mt-1">
                                {isArabic ? t("galleryDesc1") : t("gallery1")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-3.5">
                    <div className="relative aspect-[4/3] overflow-hidden  rounded-3xl">
                        <img
                            className="h-full w-full object-cover"
                            src={gallery2}
                            alt="gallery2"
                        />
                        {/* dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />

                        {/* top-left icon badge */}
                        <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm">
                            <MdArrowOutward className="h-4 w-4 text-white" />
                        </div>

                        {/* text content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl leading-tight font-bold text-white">
                                {t("gallery2")}
                            </h3>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                        <img
                            className="h-full w-full object-cover"
                            src={gallery3}
                            alt="gallery3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />
                        <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm">
                            <MdArrowOutward className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl leading-tight font-bold text-white">
                                {t("gallery3")}
                            </h3>

                            <p className="text-sm font-bold text-white mt-1 mt-1">
                                {t("galleryDesc3")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-3.5">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-base rounded-3xl">
                        <img
                            className="h-full w-full object-cover"
                            src={gallery4}
                            alt="gallery4"
                        />
                        {/* dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />

                        {/* top-left icon badge */}
                        <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm">
                            <MdArrowOutward className="h-4 w-4 text-white" />
                        </div>

                        {/* text content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl leading-tight font-bold text-white">
                                {t("gallery4")}
                            </h3>
                            <p className="text-sm font-bold text-white mt-1 mt-1">
                                {t("galleryDesc4")}
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                        <img
                            className="h-full w-full object-cover"
                            src={gallery5}
                            alt="gallery5"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />
                        <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/50 backdrop-blur-sm">
                            <MdArrowOutward className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-bold text-white leading-tight">
                                {t("gallery5")}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4  items-center relative overflow-hidden rounded-3xl">
                    <div className="rounded-3xl">
                        <img
                            className="h-auto max-w-full rounded-base "
                            src={gallery6}
                            alt="gallery6"
                        />
                    </div>
                    {/* dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2D7A45]/80 to-[#7AAB87]/40 " />

                    {/* top-left icon badge */}
                    <div className="absolute top-3 left-3 flex h-8 w-4 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-sm">
                        <MdArrowOutward className="h-4 w-4 text-white" />
                    </div>

                    {/* text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl leading-tight font-bold text-white">
                            {t("gallery6")}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}
