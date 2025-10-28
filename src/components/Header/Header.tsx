"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useHeaderEffects } from "./useHeaderEffects";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { isScrolled, isOnLightSection } = useHeaderEffects(open);

  const imageOpacityClass = isScrolled 
    ? "opacity-100" 
    : "opacity-0 pointer-events-none";
  const textColor = isScrolled || isOnLightSection 
    ? "text-slate-50" 
    : "text-transparent";
  const headerBackground = isScrolled
    ? "bg-slate-950 shadow-md"
    : "transparent";
  const headerPointerEvents = isScrolled || isOnLightSection || open 
    ? "" 
    : "pointer-events-none";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBackground} ${textColor} ${headerPointerEvents}`}
      aria-hidden={(!isScrolled && !isOnLightSection && !open) ? "true" : "false"}
    >
      <div className="w-full max-w-6xl mx-auto px-2 flex items-center justify-center py-8">
        <div className="md:items-start pr-10">
          <a href="/" aria-label="Home">
            <img
              src="/Logo-New.avif"
              alt="The Claridge Hotel Logo"
              className={`h-15 object-contain transition-opacity duration-300 ease-in-out ${imageOpacityClass}`}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Toggle Button */}
        <div className="xl:hidden absolute right-4 top-6">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
}
