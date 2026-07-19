import i18next from "i18next";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

export default function CardAudience({ title, description, linkText = "", href }) {
    const isArabic = i18next.language === "ar";

    return (
      <>
        <div className="bg-white  max-w-sm p-6 border-[0.5px] border-[#5fcf8165] rounded-2xl shadow-xs flex flex-col justify-center">
          <h5
            className={` h-14 mb-3 text-xl font-bold tracking-tight text-heading leading-8 ${isArabic ? "text-[#1A2E1D] text-2xl font-medium" : "text-[#1A5C2C] font-RobotoCondensed font-semibold text-xl"}`}
          >
            {title}
          </h5>
          <div className="h-20">
            <p className={`text-body  text-[#5A7A62] font-bold text-sm `}>
              {description}
            </p>
          </div>

          {/* {href ? (
                    <Link
                        to={href}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        {linkText}
                        {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
                    </Link>
                ) : ( */}
          <Link
            to={href}
            // onClick={onDetailsClick}
            className={`text-[#2D7A45] flex items-center gap-2 text-primary font-medium   ${isArabic ? "duration-300 transition-all ease-in-out hover:-translate-x-2" : "duration-300 transition-all ease-in-out hover:translate-x-2"}`}
          >
            {linkText}
            {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
          </Link>
          {/* )} */}
        </div>
      </>
    );
}



