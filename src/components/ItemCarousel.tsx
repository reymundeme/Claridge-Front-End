"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ItemContent from "@/components/ItemContent";

interface Item {
  id: number;
  title: string;
  description: string;
  icon?: { url: string };
  buttonText?: string;
  buttonURL?: string;
  background?: { url: string };
}

interface ItemSectionProps {
  title: string;
  items: Item[];
  background?: { url: string }; // section-wide background
}

export default function ItemSection({ title, items, background }: ItemSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const clonesCount = 1; // number of slides to clone on each side for seamless looping

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const check = () => {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft + el.clientWidth + 10 < el.scrollWidth);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [items]);

  const scrollByPage = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    // If we're at the end/start and the user navigates further, wrap around for looping behavior.
    const delta = el.clientWidth * 1 * (direction === "right" ? 1 : -1);
    const target = el.scrollLeft + delta;
    if (direction === "right" && el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
      // wrap to start
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === "left" && el.scrollLeft <= 10) {
      // wrap to end
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    // index is logical index into items (0..items.length-1)
    const elIndex = index + clonesCount; // account for leading clone(s)
    const child = el.children[elIndex] as HTMLElement | undefined;
    if (child) {
      el.scrollTo({ left: child.offsetLeft - 8 /* padding */ , behavior: "smooth" });
    }
  };

  // Update active index based on scroll position
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      // Map closest child index to logical index in original items array
      const logical = (closest - clonesCount + items.length) % items.length;
      setActiveIndex(logical);
      // If we're on a leading clone (index < clonesCount) or trailing clone (index >= items.length + clonesCount),
      // jump to the corresponding real slide without animation to keep the loop seamless.
      const totalChildren = children.length;
      const firstRealIndex = clonesCount;
      const lastRealIndex = clonesCount + items.length - 1;
      // When the user scrolls past the last real slide into clones, jump to the corresponding real slide
      if (closest < firstRealIndex) {
        // leading clone(s) -> jump to corresponding real slide near end
        const target = lastRealIndex - (firstRealIndex - closest) + 1;
        const targetChild = children[target];
        if (targetChild) {
          // jump without smooth behavior
          el.scrollTo({ left: targetChild.offsetLeft - 8, behavior: 'auto' });
        }
      } else if (closest > lastRealIndex) {
        // trailing clone(s) -> jump to corresponding real slide near start
        const target = firstRealIndex + (closest - lastRealIndex) - 1;
        const targetChild = children[target];
        if (targetChild) {
          el.scrollTo({ left: targetChild.offsetLeft - 8, behavior: 'auto' });
        }
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [items]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollByPage("left");
      if (e.key === "ArrowRight") scrollByPage("right");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Autoplay
  useEffect(() => {
    const start = () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = window.setInterval(() => {
        if (hoverRef.current) return; // pause on hover
        setActiveIndex((prev) => {
          const next = (prev + 1) % items.length;
          scrollToIndex(next);
          return next;
        });
      }, 4500);
    };
    start();
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [items.length]);

  if (!items || items.length === 0) return null;

  return (
    <section className="relative py-10 md:py-28 text-stone-800">
      {/* Section Background */}
      {background?.url && (
        <Image
          src={background.url}
          alt={title}
          fill
          priority
          className="object-cover brightness-50 -z-10"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl text-stone-800 font-bold text-center mb-8 md:mb-12">{title}</h1>

        {/* Carousel Controls */}
        <div className="relative">
          <button
            aria-label="Previous"
            onClick={() => scrollByPage("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md transition-opacity duration-150 ${
              canScrollLeft ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={() => scrollByPage("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md transition-opacity duration-150 ${
              canScrollRight ? "opacity-100" : "opacity-40 pointer-events-none"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel track */}
          <div className="relative scrollbar-hide">
            <div
              ref={containerRef}
              onMouseEnter={() => (hoverRef.current = true)}
              onMouseLeave={() => (hoverRef.current = false)}
              className="overflow-x-auto scrollbar-hide no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-8 py-6 px-4 md:px-6"
            >
              {/* Build a sequence with clones at both ends: [lastClone, ...items, firstClone] */}
              {[
                ...items.slice(-clonesCount).map((it) => ({ ...it, __isClone: true })),
                ...items.map((it) => ({ ...it, __isClone: false })),
                ...items.slice(0, clonesCount).map((it) => ({ ...it, __isClone: true })),
              ].map((item, idx) => {
                // logical index into original items array
                const logicalIndex = (idx - clonesCount + items.length) % items.length;
                const isActive = logicalIndex === activeIndex;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="snap-center flex-shrink-0 w-[380px] h-[700px] transition-transform duration-300"
                    style={{
                      /* prevent content from overflowing the rounded container */
                      scrollSnapAlign: 'center',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <div className="w-full h-full">
                      <ItemContent {...item} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* dots removed per request */}
          </div>
        </div>
      </div>
    </section>
  );
}
