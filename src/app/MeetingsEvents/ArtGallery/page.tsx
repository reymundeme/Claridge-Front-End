"use client";

import Section1 from "@/components/Section1"

export default function ArtGalleryPage() {
    return (
        <main className="bg-white">
            <Section1 
                title = "Art Gallery"
                image= {{ url: "/ArtGallery.avif" }}
                content="Our unique art gallery has a contemporary vibe, with high ceilings and original chandeliers from the casino era, the minimalist design and elegant ambiance, combined with Malcolm’s Lounge adjacent to the art gallery gives you the perfect atmosphere for cocktail hour."
            />
        </main>
    )
}