"use client";

import Gallery from "@/components/Gallery";

export default function PhotoGalleryPage() {
	const images = [
		"/Arcade.avif",
		"/ArtGallery.avif",
		"/Background.avif",
		"/BoardwalkEmpire1.avif",
		"/BoardwalkEmpire2.avif",
		"/CelebrityTheatre.avif",
		"/GatsbyWhirlpool.avif",
		"/HoneyMoon.avif",
		"/HoneyMoon2.avif",
		"/Leavanders.avif",
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

	return (
		<main className="min-h-screen p-8">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
				<p className="text-lg text-gray-700 mb-8">A selection of photos showcasing the property and our spaces. Click any image to view it larger.</p>

				<Gallery images={images} />
			</div>
		</main>
	);
}

