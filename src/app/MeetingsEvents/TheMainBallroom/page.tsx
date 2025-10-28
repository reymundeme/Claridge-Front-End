"use client";

import Section1 from "@/components/Section1"

export default function TheMainBallroomPage() {
    return(
        <main className="bg-white">
            <Section1 
                title="The Main Ballroom"
                image={{ url: "/TheMainBallroom.avif"}}
                content="The Claridge Is a Classy and timeless destination to host a party, special event or wedding. The Main Ballroom and pre-function space on the sixth floor is adaptable for any use."
            />
        </main>
    )
}