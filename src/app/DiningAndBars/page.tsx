"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DiningAndBarsPage() {
  // Smooth scroll handler triggered by the hero button
  const scrollToVenues = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("venues")?.scrollIntoView({ behavior: "smooth" });
  };
  const diningVenues = [
    {
      title: "Leavander 22",
      description: "Experience fine dining with modern American cuisine in an elegant setting.",
      image: "/Leavanders.avif",
      link: "/DiningAndBars/Leavander22"
    },
    {
      title: "Twenties Restaurant",
      description: "Step back in time with our signature restaurant featuring classic dishes with a modern twist.",
      image: "/TwentiesRestaurant.avif",
      link: "/DiningAndBars/TwentiesRestaurant"
    },
    {
      title: "Vue Rooftop Bar",
      description: "Enjoy breathtaking ocean views while savoring craft cocktails and light bites.",
      image: "/Vue.avif",
      link: "/DiningAndBars/VueRooftopBar"
    }
  ];

  return (
    <main className="min-h-screen bg-white mt-25">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/TwentiesRestaurant.avif"
            alt="Dining at The Claridge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Dining & Bars
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Discover extraordinary culinary experiences at The Claridge Hotel
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={scrollToVenues}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition"
              >
                Explore Venues
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section id="venues" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Dining Venues
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From fine dining to casual elegance, experience the finest cuisine Atlantic City has to offer.
          </p>
        </div>
      </section>

      {/* Individual Venue Sections */}
      
      {/* Twenties Restaurant Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="/TwentiesRestaurant.avif"
                alt="Twenties Restaurant"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Twenties Restaurant</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Step back in time with our signature restaurant featuring classic dishes with a modern twist. Experience the glamour of the 1920s while enjoying exceptional cuisine in an unforgettable setting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Hours:</span>
                  <span>Breakfast 7AM-11AM | Dinner 5PM-10PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Dress Code:</span>
                  <span>Smart Casual</span>
                </div>
              </div>
              <Link 
                href="/DiningAndBars/TwentiesRestaurant"
                className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VÜE Rooftop Bar Section */}
      <section className="relative min-h-screen flex items-center py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">VÜE Rooftop Bar</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enjoy breathtaking ocean views while savoring craft cocktails and light bites. Our rooftop destination offers an unparalleled atmosphere for memorable evenings under the stars.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Hours:</span>
                  <span>4PM-2AM Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Atmosphere:</span>
                  <span>Upscale Casual</span>
                </div>
              </div>
              <a 
                href="https://www.vuerooftopbar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Visit Website
              </a>
            </div>
            <div className="relative h-[400px] md:h-[600px] order-1 md:order-2">
              <Image
                src="/Vue.avif"
                alt="VÜE Rooftop Bar"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leavander's 22 Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="/Leavanders.avif"
                alt="Leavander's 22"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Leavander's 22</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience fine dining with modern American cuisine in an elegant setting. Our expert chefs create innovative dishes using the finest local ingredients for an unforgettable dining experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Hours:</span>
                  <span>Dinner 5PM-11PM | Closed Mondays</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Dress Code:</span>
                  <span>Business Casual</span>
                </div>
              </div>
              <Link 
                href="/DiningAndBars/Leavander22"
                className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}