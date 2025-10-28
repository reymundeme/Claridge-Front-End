"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

interface DropdownItem {
  label: string;
  href: string;
}

interface HoverDropdownProps {
  label: string;
  items: DropdownItem[];
  href?: string; // optional top-level link for the label
}

const HoverDropdown: React.FC<HoverDropdownProps> = ({ label, items, href }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay prevents flicker when moving between button & menu
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button / Trigger */}
      {href ? (
        <Link
          href={href}
          className={`flex items-center gap-1 whitespace-nowrap text-base hover:text-yellow-400 focus:outline-none transition-colors duration-150 ${open ? 'text-yellow-400' : ''}`}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <span>{label}</span>
          <FaChevronDown className="h-3 w-3 transition-transform duration-150" />
        </Link>
      ) : (
        <button
          className={`flex items-center gap-1 whitespace-nowrap text-base hover:text-yellow-400 focus:outline-none transition-colors duration-150 ${open ? 'text-yellow-400' : ''}`}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <span>{label}</span>
          <FaChevronDown className="h-3 w-3 transition-transform duration-150" />
        </button>
      )}

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute left-0 top-full mt-3 w-50 bg-white text-slate-900 rounded-lg shadow-md border border-gray-200 z-50 animate-fade-in"
        >
          <ul className="py-3">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-slate-300 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
