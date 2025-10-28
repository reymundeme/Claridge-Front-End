"use client";

import Section1 from "@/components/Section1"

export default function SouthHamptonPage() {
    return(
        <main className="bg-white">
            <Section1 
                title="Southampton"
                image={{ url: "/Southampton.avif"}}
                content="The Southampton room is a versatile space, making it an ideal location for a variety of events including corporate conferences, small conventions, receptions, and more. Conveniently located adjacent to the Main Ballroom."
            />
        </main>
    )
}