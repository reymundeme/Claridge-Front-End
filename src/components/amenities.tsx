import { Coffee, Dumbbell, Palette, Building2, BedDouble, MonitorPlay, Theater } from "lucide-react";
import CardWithIcon from "@/components/cardForamenities";
import { MdPool } from "react-icons/md";
import { SiStarbucks } from "react-icons/si";
import { FaSwimmingPool } from "react-icons/fa";
import { PiSwimmingPool } from "react-icons/pi";

export default function Amenities() {
  const amenities = [
    {
      title: "Indoor Heated Pool",
      description: "Relax and unwind in our modern pool facilities",
      icon: <FaSwimmingPool className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Fitness Center",
      description: "Stay active with our state-of-the-art equipment",
      icon: <Dumbbell className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Starbucks On-Site",
      description: "Get your caffeine fix without leaving the building",
      icon: <SiStarbucks className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Art Gallery",
      description: "Explore culture and entertainment beyond gaming",
      icon: <Palette className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Celebrity Theatre",
      description: "World-class entertainment at your doorstep",
      icon: <Theater className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Specialty Suites",
      description: "Vintage-themed rooms with thoughtful touches",
      icon: <BedDouble className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white text-center light-section">
      <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Luxury Amenities</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
        You’re signing up for an experience that’s both refined and totally comfortable—
        like staying at your most stylish friend’s incredibly elegant beach house.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {amenities.map((item) => (
          <CardWithIcon
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
