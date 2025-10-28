"use client";

import ItemSection from "@/components/ItemCarousel";
import React from "react";
import meetingEvents from '@/components/JSON/MeetingEvents.json';
import TextSectionCenter from "@/components/TextSectionCenter";


export default function MeetingsEventsPage() {
	return (
        <main className="bg-stone-200">
            <div className="py-20 font-slate-950">
                <TextSectionCenter
                    title="Event Space For Any Occasion"
                    content={`**Welcome to The Claridge Hotel, where your event dreams become a reality. Our elegant venue is ideal for any occasion, from fairy-tale weddings and major corporate events to milestone birthdays and heartfelt family reunions. Our dedicated team prides themselves on providing a personal touch, ensuring your event is as unique as you are. Planning a charity gala? Our spaces are perfect for impactful gatherings. Experience the blend of luxury and personalized service at The Claridge Hotel, where every event is a special occasion.**`}
                    background={{ url: "" }}
                />
                <TextSectionCenter
                    title="Categories of Social Events"
                    content={`### Family Gatherings & More \

Whether you are planning a family reunion, anniversary celebration, or baby shower, our versatile spaces can accommodate gatherings of all sizes. Enjoy a cozy, intimate setting or a grand hall for larger parties.

### Food & Drink

Our culinary team offers a variety of food and drink options to suit every palate. From gourmet dinners to casual buffets, your guests will be treated to an unforgettable dining experience. Customizable menus ensure that dietary preferences and special requests are flawlessly executed.

### Spaces & Venues

Choose from a range of beautifully appointed spaces, each designed to provide the perfect backdrop for your event. Whether you need a ballroom for a wedding, a conference room for a corporate event, or an outdoor setting for a summer party, we have the ideal venue for you.`}
                    background={{ url: "" }}
                />
                
            </div>
            <ItemSection
                title="Meetings & Events"
                items={meetingEvents}
                background={{ url: "" }}
            />
        </main>
	);
}

