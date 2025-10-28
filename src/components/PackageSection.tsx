"use client";

import Image from "next/image";

type PackageSectionProps = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc: string;
  ctaText?: string;
  ctaHref?: string;
  mirrored?: boolean;
};

export default function PackageSection({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  ctaText = "Book Now",
  ctaHref = "#book",
  mirrored = false,
}: PackageSectionProps) {
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Conditionally render content first or image first when mirrored */}
          {!mirrored && (
            <>
              <div className="md:col-span-2 flex items-center">
                <div className="bg-white/85 backdrop-blur-sm border border-stone-200 rounded-md shadow-xl p-8 md:p-12 w-full">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold mb-3 text-center md:text-left">
                    {title}
                  </h2>
                  {subtitle && (
                    <h3 className="text-lg md:text-2xl text-stone-800 font-semibold mb-6 text-center md:text-left">
                      {subtitle}
                    </h3>
                  )}

                  <div className="prose prose-stone max-w-none text-stone-800 text-center md:text-left">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start mt-6">
                    <a
                      href={ctaHref}
                      className="inline-block bg-stone-900 text-white px-6 py-2 rounded shadow-md hover:opacity-95"
                    >
                      {ctaText}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-auto w-full rounded-md overflow-hidden">
                <Image src={imageSrc} alt={title} fill className="object-cover" priority />
              </div>
            </>
          )}

          {mirrored && (
            <>
              <div className="relative h-64 md:h-auto w-full rounded-md overflow-hidden">
                <Image src={imageSrc} alt={title} fill className="object-cover" priority />
              </div>

              <div className="md:col-span-2 flex items-center">
                <div className="bg-white/85 backdrop-blur-sm border border-stone-200 rounded-md shadow-xl p-8 md:p-12 w-full">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold mb-3 text-center md:text-left">
                    {title}
                  </h2>
                  {subtitle && (
                    <h3 className="text-lg md:text-2xl text-stone-800 font-semibold mb-6 text-center md:text-left">
                      {subtitle}
                    </h3>
                  )}

                  <div className="prose prose-stone max-w-none text-stone-800 text-center md:text-left">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-start mt-6">
                    <a
                      href={ctaHref}
                      className="inline-block bg-stone-900 text-white px-6 py-2 rounded shadow-md hover:opacity-95"
                    >
                      {ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
