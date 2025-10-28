import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        
        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">
          Ready to Book Your AC History Trip?
        </h2>

        {/* Sub-headline */}
        <p className="text-lg text-white mb-8">
          Stop researching and start packing. Your legendary AC getaway awaits!
        </p>

        {/* Button */}
        <a
          href="#"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Reserve Your Room
        </a>

      </div>
    </section>
  );
};

export default CallToAction;