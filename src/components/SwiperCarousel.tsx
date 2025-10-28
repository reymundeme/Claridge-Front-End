"use client";

import React from "react";

type Props = {
	images: string[]; // array of image URLs
	altTexts?: string[]; // optional alt texts matching images
	titles?: string[]; // optional per-card titles
	descriptions?: string[]; // optional per-card descriptions (back face)
	className?: string;
};

// A lightweight, accessible 3-column responsive flipcard grid.
export default function SwiperCarousel({
	images,
	altTexts = [],
	titles = [],
	descriptions = [],
	className = "",
}: Props) {
	if (!images || images.length === 0) return null;

	return (
		<div className={`w-full px-4 ${className}`}>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{images.map((src, i) => {
					const title = titles?.[i] ?? "";
					const desc = descriptions?.[i] ?? "";
					const alt = altTexts?.[i] ?? `card-${i + 1}`;

					return (
						<article
							key={i}
							className="group perspective"
						>
											<div
												tabIndex={0}
												className="relative w-full h-64 cursor-pointer focus:outline-none"
											>
								{/* card inner (flippable) */}
								<div className="transition-transform duration-500 transform-style-preserve-3d will-change-transform relative w-full h-full card-inner">
									{/* front */}
									  <div className="absolute inset-0 backface-hidden rounded shadow-lg card-front">
										<img src={src} alt={alt} className="w-full h-full object-cover block" />
										{title && (
											<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
												<h3 className="text-sm md:text-lg font-semibold">{title}</h3>
											</div>
										)}
									</div>

									{/* back */}
									  <div className="absolute inset-0 rounded bg-slate-950 shadow-lg bg-white p-4 transform rotate-y-180 backface-hidden card-back">
										<div className="h-full flex flex-col justify-center">
											{title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
											{desc ? (
												<p className="text-sm text-neutral-700">{desc}</p>
											) : (
												<p className="text-sm text-neutral-700">More information</p>
											)}
										</div>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>

							{/* Small inline styles to support flipping on hover/focus */}
							<style jsx>{`
								.perspective { perspective: 1000px; }

								.transform-style-preserve-3d { transform-style: preserve-3d; }
								.card-inner { transition: transform 0.5s; transform-style: preserve-3d; transform: rotateY(0deg); }

								.card-front,
								.card-back {
									backface-visibility: hidden;
									-webkit-backface-visibility: hidden;
									position: absolute;
									inset: 0;
									width: 100%;
									height: 100%;
								}

								.card-front { transform: rotateY(0deg); z-index: 2; }
								.card-back { transform: rotateY(180deg); z-index: 1; }

								.perspective:hover .card-inner,
								.perspective:focus-within .card-inner { transform: rotateY(180deg); }

								.perspective:hover .card-front,
								.perspective:focus-within .card-front { z-index: 1; }
								.perspective:hover .card-back,
								.perspective:focus-within .card-back { z-index: 2; }
							`}</style>
		</div>
	);
}

