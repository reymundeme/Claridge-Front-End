"use client";

import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);
    // exiting toggles the CSS transition for scroll-up + fade-out
    const [exiting, setExiting] = useState(false);
    // videoRef removed since we now show a static image
    const timeoutRef = useRef<number | null>(null);

    // duration must match the CSS transition below (in ms)
    // Use a slightly longer duration for a full-slide exit
    const EXIT_ANIMATION_MS = 700;
    const durationClass = `duration-[${EXIT_ANIMATION_MS}ms]`;

    useEffect(() => {
        // Cleanup any scheduled timeout if the component unmounts early.
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, []);

    // Hide loader when video ends or on click anywhere in the overlay.
    // To animate we set `exiting` first, wait for the transition, then
    // unmount by setting `loading` to false.
    function startExitAnimation() {
        if (exiting) return; // already running
        setExiting(true);
        // schedule unmount after animation
        // store id so we can clear if component unmounts early
        timeoutRef.current = window.setTimeout(() => {
            setLoading(false);
            timeoutRef.current = null;
        }, EXIT_ANIMATION_MS);
    }

    function handleDismiss() {
        startExitAnimation();
    }

    function handleVideoEnded() {
        startExitAnimation();
    }

    if (!loading) return null;

    const containerStyle: React.CSSProperties = {
        transition: `transform ${EXIT_ANIMATION_MS}ms ease-in-out, opacity ${EXIT_ANIMATION_MS}ms ease-in-out`,
        transform: exiting ? `translateY(-100vh)` : `translateY(0)`,
        opacity: exiting ? 0 : 1,
    };

    return (
        <div
            onClick={handleDismiss}
            role="button"
            aria-label="Close welcome overlay"
            className={`fixed inset-0 z-[9999] flex items-stretch bg-black/60`}
            style={containerStyle}
        >
            {/* Left: 60% image (replaced video) */}
            <div className="flex-none w-[60%] relative overflow-hidden">
                <img
                    src="/Claridge_hotel.jpg"
                    alt="Welcome to The Claridge Hotel"
                    className="w-full h-full object-cover block"
                    style={{ objectPosition: "20% center" }}
                />
            </div>

            {/* Right: 40% logo and text */}
            <div className="flex-1 bg-[#0b1220] text-white flex flex-col justify-center items-center p-8">
                <img src="/Logo-New.avif" alt="The Claridge Hotel logo" className="max-w-[60%] h-auto mb-4" />

                <h1 className="m-0 text-[1.6rem] text-center leading-[1.2]">Welcome to The Claridge Hotel</h1>

                <p className="opacity-80 mt-2 text-center">Click anywhere to continue</p>
            </div>
            
        
        </div>
    );
}