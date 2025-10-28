"use client";

import { useEffect, useState } from "react";
import HoverDropdown from "../HoverDropdown";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: DropdownItem[];
}

export default function DesktopNav() {
  const [menu, setMenu] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const [pagesRes, childPagesRes] = await Promise.all([
          fetch(
            "https://bold-actor-3210be8303.strapiapp.com/api/pages?populate=Sections.background&populate=Sections.image&populate=Sections.BackgroundImage&populate=Sections.item.icon&populate=Sections.column_item_content.image"
          ),
          fetch(
            "https://bold-actor-3210be8303.strapiapp.com/api/childpages?populate=page&populate=sections.background&populate=sections.image&populate=sections.BackgroundImage&populate=sections.item.icon&populate=sections.column_item_content.image"
          ),
        ]);

        const [pagesData, childPagesData] = await Promise.all([
          pagesRes.json(),
          childPagesRes.json(),
        ]);

        const pages = pagesData?.data || [];
        const childPages = childPagesData?.data || [];

        // Map each page to its related child pages
        const formattedMenu: NavItem[] = pages.map((page: any) => {
          const pageTitle = page.attributes?.Title || "Untitled";
          const pageSlug = page.attributes?.Slug || "#";

          const relatedChildren = childPages
            .filter(
              (child: any) =>
                child.attributes?.page?.data?.id === page.id // match parent
            )
            .map((child: any) => ({
              label: child.attributes?.Title || "Unnamed",
              href: `/${child.attributes?.Slug || ""}`,
            }));

          return {
            label: pageTitle,
            href: `/${pageSlug}`,
            children: relatedChildren,
          };
        });

        setMenu(formattedMenu);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  if (loading) {
    return <nav className="hidden xl:flex gap-5 text-white">Loading...</nav>;
  }

  return (
    <nav className="hidden xl:flex gap-5">
      {menu.map((item) =>
        item.children && item.children.length > 0 ? (
          <HoverDropdown
            key={item.label}
            label={item.label}
            items={item.children}
          />
        ) : (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-gray-300 transition-colors"
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
