"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Header2 from "@/components/Header2/Header2";

export default function HeaderSwitcher() {
  const pathname = usePathname();

  // If pathname is falsy (during some render phases) or the root path, show the main Header.
  // For all other routes, render Header2.
  if (!pathname || pathname === "/") {
    return <Header />;
  }

  return <Header2 />;
}
