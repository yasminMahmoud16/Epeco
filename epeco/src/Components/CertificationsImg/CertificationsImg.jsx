
import certification1 from "../../assets/Images/certification1.png"
import certification2 from "../../assets/Images/certification2.png"
export default function CertificationsImg() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
                <div className="w-xs ">
                    <img
                        src={certification2}
                        alt="Certification 1"
                        className="w-full  object-contain rounded-lg"
                    />
                </div>

                <div>
                    <img
                        src={certification1}
                        alt="Certification 2"
                        className="w-full  object-contain rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
