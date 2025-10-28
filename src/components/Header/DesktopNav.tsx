import Link from "next/link";
import HoverDropdown from "../HoverDropdown";

export default function DesktopNav() {
  return (
    <nav className="hidden xl:flex gap-5">
        
      <HoverDropdown
        label="Rooms & Suites"
        href="/RoomsSuites"
        items={[
          { label: "Room & Packages", href: "/RoomsSuites/RoomPackages" },
          { label: "Specialty Suites", href: "/RoomsSuites/SpecialtySuites" },
          { label: "Vintage Themed Suites", href: "/RoomsSuites/VintageThemedSuites" },
          { label: "Specialty Rooms", href: "/RoomsSuites/SpecialtyRooms" },
          { label: "Standard Rooms", href: "/RoomsSuites/StandardRooms" },
        ]}
      />

      <HoverDropdown
        label="Wedding"
        href="/Wedding"
        items={[
          { label: "Wedding Packages", href: "/Wedding/WeddingPackages" },
          { label: "Catering Packages", href: "/Wedding/CateringPackages" },
          { label: "Specialty Weddings", href: "/Wedding/SpecialtyWeddings" },
        ]}
      />

      <HoverDropdown
        label="Meetings & Events "
        href="/MeetingsEvents"
        items={[
            { label: "The Grand Ballroom", href: "/MeetingsEvents/TheGrandBallroom" },
            { label: "The Main Ballroom", href: "/MeetingsEvents/TheMainBallroom" },
            { label: "The Conference Center", href: "/MeetingsEvents/TheConferenceCenter" },
            { label: "The OceanView", href: "/MeetingsEvents/TheOceanView" },
            { label: "South Hampton", href: "/MeetingsEvents/SouthHampton" },
            { label: "Art Gallery", href: "/MeetingsEvents/ArtGallery" },
        ]}
      />
      
      <HoverDropdown
        label="Claridge Events & Promotions"
        href="/ClaridgeEventsAndPromos"
        items={[
            { label: "Promotions", href: "/ClaridgeEventsAndPromos/Promotions" },
            { label: "Events", href: "/ClaridgeEventsAndPromos/Events" },
        ]}
      />

      <HoverDropdown
        label="Dining & Bars"
        href="DiningAndBars"
        items={[
            { label: "Twenties Restaurant", href: "/DiningAndBars/TwentiesRestaurant" },
            { label: "VÜE Rooftop Bar", href: "https://www.vuerooftopbar.com/" },
            { label: "Leavander's 22", href: "/DiningAndBars/Leavander22" },
            { label: "Meet The Chef", href: "/DiningAndBars/MeetTheChef" },
        ]}
      />

      <HoverDropdown
        label="Amenities"
        href="/Amenities"
        items={[
            { label: "In Room Dining", href: "https://www.claridge.com/_files/ugd/0abd97_2c83f9d4f5fb4ce4877861250e24ac62.pdf" },
            { label: "Arcade", href: "/Amenities/Arcade" },
            { label: "The Pool", href: "/Amenities/ThePool" },
            { label: "Fitness Center", href: "/Amenities/FitnessCenter" },
            { label: "Wi-Fi Info", href: "/Amenities/WifiInfo" },
        ]}
      />

      <HoverDropdown
        label="More"
        items={[
            { label: "History", href: "/More/History" },
            { label: "Photo Gallery", href: "/More/PhotoGallery" },
            { label: "Careers", href: "/More/Careers" },
            { label: "In The Media", href: "/More/InTheMedia" },
            { label: "F.A.Q.", href: "/More/FAQ" },
            { label: "Loyalty Program", href: "/More/LoyaltyProgram" },
            { label: "10% 4U Program", href: "/More/10%4UProgram" },
        ]}
      />

    </nav>
  );
}
