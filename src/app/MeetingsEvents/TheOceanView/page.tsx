"use client";

import Section1 from "@/components/Section1"

export default function TheOceanViewPage() {
    return(
        <main className="bg-white">
            <Section1 
                title="The Ocean View"
                image={{ url: "/TheOceanView.avif"}}
                content="The Ocean View Room at The Claridge Hotel in Atlantic City offers a charming and elegant event space, providing a picturesque backdrop with views of the Atlantic Ocean and the Atlantic City Boardwalk. This venue is ideal for a variety of events, accommodating up to 250 guests for banquets, making it a perfect choice for those seeking a unique and scenic setting for their special occasion"
            />
        </main>
    )
}