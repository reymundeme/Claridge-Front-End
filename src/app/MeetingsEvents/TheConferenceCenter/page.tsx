"use client";

import Section1 from "@/components/Section1";

export default function TheConferenceCenterPage() {
    return(
        <main className="bg-white">
            <Section1 
                title="The Conference Center"
                image={{ url: "/TheConferenceCenter.avif"}}
                content="Elevate your next meeting with our expert services and innovative tools and technology. We provide everything you need to make your event a success. Here's how we help you shine: Expert Services: Our team of professionals is dedicated to assisting you with every detail, ensuring a seamless experience. Innovative Tools: Utilize our advanced equipment to enhance your presentations and engage your audience. Technology: Enjoy high-speed internet and standard audio-visual equipment, to support your event's technical needs."
            />
        </main>
    )
}