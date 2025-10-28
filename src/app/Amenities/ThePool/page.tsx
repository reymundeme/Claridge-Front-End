"use client";

import { useCallback, useEffect, useState } from "react";
import TextSectionCenter from "@/components/TextSectionCenter";

const images = [
	"https://static.wixstatic.com/media/0abd97_ef88429ede8c42baaac5f4757ea5eb41~mv2.jpg/v1/fill/w_562,h_374,al_c,q_80,usm_0.66_1.00_0.01/0abd97_ef88429ede8c42baaac5f4757ea5eb41~mv2.jpg",
	"https://static.wixstatic.com/media/0abd97_e3118fbc9d7a46c7a226a9cd918f3947~mv2.jpg/v1/fill/w_562,h_374,al_c,q_80,usm_0.66_1.00_0.01/0abd97_e3118fbc9d7a46c7a226a9cd918f3947~mv2.jpg",
	"https://static.wixstatic.com/media/0abd97_c2d4c668dc7f407892782b9720b952fb~mv2.jpg/v1/fill/w_562,h_374,al_c,q_80,usm_0.66_1.00_0.01/0abd97_c2d4c668dc7f407892782b9720b952fb~mv2.jpg",
];

export default function ThePool() {
	const content = `
Experience our inviting indoor pool — the perfect place to relax after a day of sightseeing or meetings. The pool area features comfortable lounge seating, warm water, and poolside service for light snacks and beverages.

**Pool hours**
9am-8pm All Hotel Guests
8pm-10pm Adults Only 

**What to expect:**

- Heated indoor pool
- Towels provided
- Lifeguard on duty during busy hours
- Accessible entry and family-friendly environment

Book a stay and enjoy a refreshing swim at The Claridge.`;

	const [isOpen, setIsOpen] = useState(false);
	const [current, setCurrent] = useState(0);

	const openAt = useCallback((index: number) => {
		setCurrent(index);
		setIsOpen(true);
	}, []);

	const close = useCallback(() => setIsOpen(false), []);

	const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);
	const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);

	// keyboard navigation for modal
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen, close, prev, next]);

	return (
		<main className="pt-25 bg-white">
			<TextSectionCenter
				title="Indoor Pool"
				content={content}
				background={{ url: images[0] }}
			/>

			<section className="py-12 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-950">Gallery</h2>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{images.map((src, i) => (
							<button
								key={src}
								onClick={() => openAt(i)}
								className="block w-full h-40 overflow-hidden rounded shadow hover:opacity-90 focus:outline-none"
								aria-label={`Open image ${i + 1}`}
							>
								<img
									src={src}
									alt={`Pool image ${i + 1}`}
									className="w-full h-full object-cover"
								/>
							</button>
						))}
					</div>

					{/* Modal */}
					{isOpen && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
							<div className="relative max-w-4xl w-full">
								<button
									onClick={close}
									className="absolute top-2 right-2 text-white bg-black/40 rounded p-2 hover:bg-black/60"
									aria-label="Close gallery"
								>
									✕
								</button>

								<button
									onClick={prev}
									className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
									aria-label="Previous image"
								>
									‹
								</button>

								<div className="bg-white rounded overflow-hidden">
									<img src={images[current]} alt={`Pool large ${current + 1}`} className="w-full h-[60vh] object-contain bg-black" />
								</div>

								<button
									onClick={next}
									className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
									aria-label="Next image"
								>
									›
								</button>

								<div className="mt-2 flex justify-center gap-2">
									{images.map((s, idx) => (
										<button
											key={s}
											onClick={() => setCurrent(idx)}
											className={`w-12 h-12 overflow-hidden rounded border ${idx === current ? "ring-2 ring-sky-500" : ""}`}
											aria-label={`Show image ${idx + 1}`}
										>
											<img src={s} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
										</button>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}

