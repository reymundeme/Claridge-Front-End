"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
	images?: string[];
	className?: string;
};

const defaultImages = [
	"/Arcade.avif",
	"/ArtGallery.avif",
	"/Background.avif",
	"/BoardwalkEmpire1.avif",
	"/BoardwalkEmpire2.avif",
	"/CelebrityTheatre.avif",
	"/fb.avif",
	"/GatsbyWhirlpool.avif",
	"/HoneyMoon.avif",
	"/HoneyMoon2.avif",
	"/insta.avif",
	"/Leavanders.avif",
	"/Logo-New.avif",
	"/Monaco2.avif",
	"/Sinatra1.avif",
	"/Sinatra2.avif",
	"/Southampton.avif",
	"/SuperiorDouble.avif",
	"/SuperiorKing.avif",
	"/TheConferenceCenter.avif",
	"/TheGrandBallroom.avif",
	"/TheMainBallroom.avif",
	"/TheOceanView.avif",
	"/ThePool.avif",
	"/tripadvisor.avif",
	"/TwentiesRestaurant.avif",
	"/VintageDoubleOceanfront.avif",
	"/VintageKingOceanfront.avif",
	"/Vue.avif",
	"/WhirlpoolKing.avif",
	"/ClaridgeForGallery.jpeg",
	"/ClaridgeForGallery2.jpeg",
	"/ClaridgeForGallery3.jpeg",
	"/ClaridgeForGallery4.jpeg",
	"/ClaridgeForGallery5.jpeg",
	"/ClaridgeForGallery6.jpeg",
	"/ClaridgeForGallery7.jpeg",
	"/ClaridgeForGallery8.jpeg",
	"/ClaridgeForGallery9.jpeg",
	"/ClaridgeForGallery10.jpeg",
	"/ClaridgeForGallery11.jpeg",
	"/ClaridgeForGallery12.jpeg",
	"/ClaridgeForGallery13.jpeg",
	"/ClaridgeForGallery14.jpeg",
	"/ClaridgeForGallery15.jpeg",
	"/ClaridgeForGallery16.jpeg",
];

export default function Gallery({ images = defaultImages, className = "" }: Props) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});

	const open = (i: number) => setOpenIndex(i);
	const close = () => setOpenIndex(null);

	const next = () =>
		setOpenIndex((idx) => {
			if (idx === null) return null;
			return (idx + 1) % images.length;
		});

	const prev = () =>
		setOpenIndex((idx) => {
			if (idx === null) return null;
			return (idx - 1 + images.length) % images.length;
		});

	useEffect(() => {
		if (openIndex === null) return;

		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};

		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [openIndex, images.length]);

	return (
		<div className={className}>
			<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
				{images.map((src, i) => (
					<button
						key={src + i}
						onClick={() => open(i)}
						className="group overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-label={`Open photo ${i + 1}`}
					>
						<Image
							src={failedSrcs[src] ? "/file.svg" : src}
							alt={`Gallery image ${i + 1}`}
							width={400}
							height={240}
							className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200"
							onError={() => {
								console.warn(`Failed to load image: ${src}`);
								setFailedSrcs((p) => ({ ...p, [src]: true }));
							}}
							priority={false}
						/>
					</button>
				))}
			</div>

			{openIndex !== null && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Image viewer"
					className="fixed inset-0 z-50 flex items-center justify-center"
				>
					<div
						className="absolute inset-0 bg-black/70"
						onClick={close}
						aria-hidden
					/>

					<div className="relative max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center">
						<button
							onClick={close}
							className="absolute top-2 right-2 z-60 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
							aria-label="Close viewer"
						>
							✕
						</button>

						<button
							onClick={prev}
							className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
							aria-label="Previous image"
						>
							‹
						</button>

						<Image
								src={failedSrcs[images[openIndex]] ? "/file.svg" : images[openIndex]}
								alt={`Viewing image ${openIndex + 1}`}
								width={1200}
								height={800}
								className="max-w-[90vw] max-h-[80vh] object-contain rounded"
								onError={() => {
									console.warn(`Failed to load viewer image: ${images[openIndex]}`);
									setFailedSrcs((p) => ({ ...p, [images[openIndex]]: true }));
								}}
							/>

						<button
							onClick={next}
							className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
							aria-label="Next image"
						>
							›
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

