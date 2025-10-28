"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to handle scroll behavior, section detection, and body scroll locking
 */
export function useHeaderEffects(open: boolean) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOnLightSection, setIsOnLightSection] = useState<boolean>(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect when header overlaps light sections
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return { isScrolled, isOnLightSection };
}
