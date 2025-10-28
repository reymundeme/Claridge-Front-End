"use client";
import Footer from "@/components/Footer";
import { useState } from "react";

interface PackageType {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  inclusions?: string[];
  price: string;
  image: string;
}

export default function RoomPackagesPage() {
  // Placeholder packages; will be replaced by Strapi data later
  const packages: PackageType[] = [
    {
      id: 1,
      title: "Haunted Hotel Party",
      subtitle: "Thrills & Fun",
      description:
        "Experience a spooky night with DJ, cocktails, buffet, and overnight stay.",
      inclusions: [
        "Party admission for two",
        "4-hour open bar",
        "Buffet dinner",
        "Overnight stay",
      ],
      price: "$299",
      image: "/images/haunted-hotel.jpg",
    },
    {
      id: 2,
      title: "Romantic Getaway",
      subtitle: "Couples Special",
      description:
        "Perfect for couples: dinner, spa session, and luxury suite stay included.",
      inclusions: ["Dinner for two", "Spa session", "Luxury suite", "Complimentary breakfast"],
      price: "$399",
      image: "/images/romantic-getaway.jpg",
    },
    {
      id: 3,
      title: "Romantic Getaway",
      subtitle: "Couples Special",
      description:
        "Perfect for couples: dinner, spa session, and luxury suite stay included.",
      inclusions: ["Dinner for two", "Spa session", "Luxury suite", "Complimentary breakfast"],
      price: "$399",
      image: "/images/romantic-getaway.jpg",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

  return (
    <div className="font-sans">
      {/* Hero */}
      
      <section
        className="relative w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("Claridge_inside_look.jpg")' }}
      > 
      
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Room Packages
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Explore our exclusive packages crafted for every type of guest.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            onClick={() => setSelectedPackage(pkg)}
          >
            <div className="relative h-72 md:h-96">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {pkg.subtitle && (
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.subtitle}
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{pkg.title}</h2>
              <p className="text-gray-700 mb-4">{pkg.description}</p>
              {pkg.inclusions && (
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <p className="text-blue-600 font-bold text-2xl">{pkg.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl w-11/12 md:w-2/3 p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 text-2xl font-bold hover:text-gray-900"
              onClick={() => setSelectedPackage(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedPackage.title}</h2>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedPackage.description}</p>
            {selectedPackage.inclusions && (
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {selectedPackage.inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <p className="text-blue-600 font-bold text-2xl mb-4">
              {selectedPackage.price}
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
    
  );
}
