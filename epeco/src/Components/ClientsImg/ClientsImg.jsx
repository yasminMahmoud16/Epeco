import client1 from "../../assets/Images/client1.png";
import client2 from "../../assets/Images/client2.png";
import client3 from "../../assets/Images/client3.png";
import client4 from "../../assets/Images/client4.png";
import client5 from "../../assets/Images/client5.png";
import client6 from "../../assets/Images/client6.png";
import client7 from "../../assets/Images/client7.png";
import client8 from "../../assets/Images/client8.png";
import client9 from "../../assets/Images/client9.png";
import client10 from "../../assets/Images/client10.png";
import client11 from "../../assets/Images/client11.png";
import client12 from "../../assets/Images/client12.png";
import client13 from "../../assets/Images/client13.png";
import client14 from "../../assets/Images/client14.png";
import client15 from "../../assets/Images/client15.png";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
export default function ClientsImg() {
        const { t } = useTranslation();
    
    const images = [
        {
            src: client1,
            alt: "client1",
        },
        {
            src: client2,
            alt: "client2",
        },
        {
            src: client3,
            alt: "client3",
        },
        {
            src: client4,
            alt: "client4",
        },
        {
            src: client5,
            alt: "client5",
        },
        {
            src: client6,
            alt: "client6",
        },
        {
            src: client7,
            alt: "client7",
        },
        {
            src: client8,
            alt: "client8",
        },
        {
            src: client9,
            alt: "client9",
        },
        {
            src: client10,

            alt: "client10",
        },
        {
            src: client11,

            alt: "client11",
        },
        {
            src: client12,

            alt: "client12",
        },
        {
            src: client13,

            alt: "client13",
        },
        {
            src: client14,

            alt: "client14",
        },
        {
            src: client15,

            alt: "client15",
        },
    ];
    return (
      <>
        <div className="w-6xl flex flex-wrap items-center justify-center gap-12">
          {images.map((img, index) => (
            <Link to={t("navbarPath.clientsDetails")}>
              <img key={index} src={img.src} alt={img.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </>
    );
}
