import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  if (!open) return null;

  // Define menu items with dropdowns
  const menuItems = [
    {
      label: "Rooms & Suites",
      children: [
        { label: "Room & Packages", href: "/RoomsSuites/RoomPackages" },
        { label: "Specialty Suites", href: "/RoomsSuites/SpecialtySuites" },
        { label: "Vintage Themed Suites", href: "/RoomsSuites/VintageThemedSuites" },
        { label: "Specialty Rooms", href: "/RoomsSuites/SpecialtyRooms" },
        { label: "Standard Rooms", href: "/RoomsSuites/StandardRooms" },
      ],
    },
    {
      label: "Wedding",
      children: [
        { label: "Wedding Packages", href: "/Wedding/WeddingPackages" },
        { label: "Catering Packages", href: "/Wedding/CateringPackages" },
        { label: "Specialty Weddings", href: "/Wedding/SpecialtyWeddings" },
      ],
    },
    {
      label: "Meeting & Events",
      children: [
        { label: "The Grand Ballroom", href: "/MeetingsEvents/TheGrandBallroom" },
        { label: "The Main Ballroom", href: "/MeetingsEvents/TheMainBallroom" },
        { label: "The Conference Center", href: "/MeetingsEvents/TheConferenceCenter" },
        { label: "The OceanView", href: "/MeetingsEvents/TheOceanView" },
        { label: "South Hampton", href: "/MeetingsEvents/SouthHampton" },
        { label: "Art Gallery", href: "/MeetingsEvents/ArtGallery" },
      ],
    },
    {
      label: "Claridge Events & Promotions",
      children: [
        { label: "Promotions", href: "/ClaridgeEventsAndPromos/Promotions" },
        { label: "Events", href: "/ClaridgeEventsAndPromos/Events" },
      ],
    },
    {
      label: "Dining & Bars",
      children: [
        { label: "Twenties Restaurant", href: "/DiningAndBars/TwentiesRestaurant" },
        { label: "VÜE Rooftop Bar", href: "/DiningAndBars/VueRooftopBar" },
        { label: "Leavander's 22", href: "/DiningAndBars/Leavander22" },
        { label: "Meet The Chef", href: "/DiningAndBars/MeetTheChef" },
      ],
    },
    {
      label: "Amenities",
      children: [
        { label: "In Room Dining", href: "/Amenities/InRoomDining" },
        { label: "Arcade", href: "/Amenities/Arcade" },
        { label: "The Pool", href: "/Amenities/ThePool" },
        { label: "Fitness Center", href: "/Amenities/FitnessCenter" },
        { label: "Wi-Fi Info", href: "/Amenities/WifiInfo" },
      ],
    },
    {
      label: "More",
      children: [
        { label: "History", href: "/More/History" },
        { label: "Photo Gallery", href: "/More/PhotoGallery" },
        { label: "Careers", href: "/More/Careers" },
        { label: "In The Media", href: "/More/InTheMedia" },
        { label: "F.A.Q.", href: "/More/FAQ" },
        { label: "Loyalty Program", href: "/More/LoyaltyProgram" },
        { label: "10% 4U Program", href: "/More/10%4UProgram" },
      ],
    },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="xl:hidden bg-white w-full shadow-lg text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col">
            <button
              className="flex items-center justify-between text-base font-medium py-2 px-2 rounded hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
              aria-expanded={openDropdown === item.label}
              type="button"
            >
              <span>{item.label}</span>
              <FaChevronDown className={`ml-2 h-4 w-4 transition-transform duration-150 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === item.label && (
              <div className="pl-4 flex flex-col gap-2 py-2">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="text-base hover:underline"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
