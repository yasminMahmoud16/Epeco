
import i18next from "i18next";
import certification1 from "../../assets/Images/certification1.png"
import certification2 from "../../assets/Images/certification2.png"
export default function CertificationsImg() {
      const isArabic = i18next.language === "ar";

    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center ">
          <div className={` lg:w-lg md:pl-0  ${isArabic ? "" : "pr-10 "}`}>
            <img
              src={certification2}
              alt="Certification 1"
              loading="lazy"
              className="w-full  object-contain rounded-lg"
            />
          </div>

          <div className="pb-8 lg:w-lg">
            <img
              src={certification1}
              alt="Certification 2"
              loading="lazy"
              className="w-full  object-contain rounded-lg"
            />
          </div>
        </div>
      </>
    );
}
