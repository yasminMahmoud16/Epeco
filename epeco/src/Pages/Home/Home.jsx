import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel.jsx";
import HomePolicy from "../../Components/HomePolicy/HomePolicy.jsx";

export default function Home() {
    return <>
        
        <main>
            <section className="mt-16">
                <HomeCarousel />
            </section>

            <section className="flex flex-col items-center justify-center my-6 mx-16 gap-0.5">
                <HomePolicy/>
            </section>
        </main>
    </>
}
