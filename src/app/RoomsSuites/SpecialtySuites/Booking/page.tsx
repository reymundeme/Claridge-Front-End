"use client";

import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";
import { Sofa } from "lucide-react";

export default function SpecialtySuitesBooking() {
    const MonacoData = {
        title: "Monaco King Suite",
    content: `
- 715 Sq Ft
- Sitting area with Sofa
- Television
- Telephone
- Private Bathroom
- Executive Shower
- Closet or Wardrobe
- Desk and Chair
- Wake-Up Service
- Hairdryer
- Iron and Ironing Board
- Coffee Maker
- Mini-Fridge
- Safe
- Wi-Fi Access
- Room Service: Available during certain hours.
`,
        image: { url: "/Monaco2.avif" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "#",
    };

    const HoneymoonData = {
        title: "Honeymoon Suite",
        content: `
- 595 Sq Ft
- Whirlpool Tub
- Television
- Telephone
- Private Bathroom
- Closet or Wardrobe
- Desk and Chair
- Wake-Up Service
- Hairdryer
- Iron and Ironing Board
- Coffee Maker
- Mini-Fridge
- Safe
- Wi-Fi Access
- Room Service: Available during certain hours.
        `,
        image : { url: "/HoneyMoon2.avif" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "#",
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
