"use client";

import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";

export default function SpecialtySuitesPage() {
    const MonacoData = {
        title: "Monaco King Suite",
        content:
            "The Monaco King Suite at The Claridge Hotel in Atlantic City epitomizes luxury and comfort, offering guests a lavish retreat amidst the excitement of the city. This elegantly appointed suite features a spacious king-sized bed with plush bedding, ensuring a restful night's sleep. The living area, distinguished by its tasteful decor and comfortable seating, provides the perfect setting for relaxation or entertainment. Large windows flood the space with natural light, offering stunning views of the Atlantic Ocean.",
        image : { url: "/MonacoKingSuite.jpg" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "./SpecialtySuites/Booking",
    };

    const HoneymoonData = {
        title: "Honeymoon Suite",
        content:
            "The Honeymoon Suite at The Claridge Hotel in Atlantic City is a sanctuary of romance and luxury, designed to provide newlyweds with an unforgettable start to their life together. This exquisite suite envelops its guests in an atmosphere of elegance and intimacy, featuring a sumptuous king-sized bed adorned with the finest linens for an added touch of romance. The suite's decor is a harmonious blend of classic sophistication and contemporary style, creating a serene and inviting environment.",
        image : { url: "/HoneyMoon.avif" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "./SpecialtySuites/Booking",
    };

    return (
        <main className="bg-stone-200">
            <div className="">
                <Section1
                    title={MonacoData.title}
                    content={MonacoData.content}
                    image={MonacoData.image}
                    background={MonacoData.background}
                    buttonText={MonacoData.buttonText}
                    buttonURL={MonacoData.buttonURL}
                    />
            </div>
            <div className="">
                <Section2
                    title={HoneymoonData.title}
                    content={HoneymoonData.content}
                    image={HoneymoonData.image}
                    background={HoneymoonData.background}
                    buttonText={HoneymoonData.buttonText}
                    buttonURL={HoneymoonData.buttonURL}
                    />
            </div>
        </main>
    );
}
