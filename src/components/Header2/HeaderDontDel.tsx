"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HoverDropdown from "../HoverDropdown";

export default function Header() {
  // State for the mobile menu toggle
  const [open, setOpen] = useState(false);
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // State to track if the header is currently over a light section
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  // Effect to handle scroll detection for background changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for the Intersection Observer to detect light sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        setIsOnLightSection(entry?.isIntersecting || false);
      },
      { threshold: 0.1 }
    );
    const lightSections = document.querySelectorAll(".light-section");
    lightSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Effect to lock body scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Determine final styles based on scroll state and section color
  const textColor = isScrolled || isOnLightSection ? 'text-slate-50' : 'text-white';
  const headerBackground = isScrolled ? 'bg-slate-950/95 shadow-md' : 'bg-white/10 backdrop-blur-xl';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground} ${textColor}`}>
      
      

      <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-center py-8">
        <div className="md:items-start pr-30">
          <img src="/Logo-New.avif" alt="The Claridge Hotel Logo" className="h-15 object-contain" />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5">
          <HoverDropdown
            label="Rooms & Suites"
            items={[
              { label: "Monaco King Suite", href: "/rooms/monaco" },
              { label: "Honeymoon Suite", href: "/rooms/honeymoon" },
              { label: "Sinatra King Suite", href: "/rooms/sinatra" },
            ]}
          />
          {/* <Link href="#" className="text-base hover:underline">Rooms &amp; Suites</Link> */}
          <Link href="#" className="text-base hover:underline">Wedding</Link>
          <Link href="#" className="text-base hover:underline">Meeting &amp; Events</Link>
          <Link href="#" className="text-base hover:underline">Claridge Events &amp; Promotions</Link>
          <Link href="#" className="text-base hover:underline">Dining &amp; Bars</Link>
          <Link href="#" className="text-base hover:underline">Amenities</Link>
          <Link href="#" className="text-base hover:underline">More</Link>

        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md"
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-lg text-slate-900">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Rooms &amp; Suites</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Wedding</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Meeting &amp; Events</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Claridge Events &amp; Promotions</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Dining &amp; Bars</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">Amenities</Link>
            <Link href="#" onClick={() => setOpen(false)} className="text-base hover:underline">More</Link>
          </div>
        </div>
      )}
    </header>
  );
}