export default function Hero() {
  return (
    <section
        className="relative h-screen w-full bg-cover bg-position-[20%]"
      style={{
        backgroundImage: "url('/Claridge_inside_look.jpg')", // put image in /public
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          The CLARIDGE Hotel
        </h1>

        {/* Subtitle */}
        <p className="text-xl italic mb-8">
          Historic Luxury Meets the Legendary Boardwalk
        </p>

        {/* CTA Button */}
        <a href="#" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          Book Your Stay
        </a>
      </div>
    </section>
  );
}
