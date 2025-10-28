"use client";

import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function SpecialtyRoomsPage() {
	const vintageDoubleOceanfront = {
		title: "Vintage Double Oceanfront",
		content:
			"The Vintage Double Oceanfront room at The Claridge Hotel in Atlantic City offers a charming and nostalgic retreat with an unbeatable view of the Atlantic Ocean. Designed to evoke the classic allure of Atlantic City's storied past, this room blends historical elegance with the serene beauty of the oceanfront, providing guests with a peaceful and picturesque escape.",
		image: { url: "/VintageDoubleOceanfront.avif" },
		background: { url: "/Background.avif" },
		buttonText: "Book Now",
		buttonURL: "#",
	};

	const GatsbyWhirlpool = {
		title: "Gatsby Whirlpool King",
		content:
			"The Gatsby Whirlpool King room at The Claridge Hotel in Atlantic City is a luxurious and romantic escape that transports guests to the opulent era of the 1920s, reminiscent of the lavish lifestyle celebrated in F. Scott Fitzgerald's iconic novel, ''The Great Gatsby.'' This room is designed for those seeking a blend of historical glamour and modern indulgence, offering an unforgettable experience of luxury and relaxation.",
		image: { url: "/GatsbyWhirlpool.avif" },
		background: { url: "/Background.avif" },
		buttonText: "Book Now",
		buttonURL: "#",
	};

	const vintageKingOceanfront = {
		title: "Vintage King Oceanfront",
		content:
			"The Vintage King Oceanfront room at The Claridge Hotel in Atlantic City combines the timeless elegance of the past with stunning oceanfront views for a truly memorable stay. This room features a luxurious king-sized bed, high-quality linens, and classic decor that pays homage to the golden era of Atlantic City, all while providing guests with a comfortable and stylish space to relax.",
		image: { url: "/VintageKingOceanfront.avif" },
		background: { url: "/Background.avif" },
		buttonText: "Book Now",
		buttonURL: "#",
	};

	const whirlpoolKing = {
		title: "Whirlpool King",
		content:
			"Indulge in our Whirlpool King Room, a haven of traditional elegance and modern luxury. Nestle into the plush king-sized bed or unwind in the spacious whirlpool tub. Complete with a wet bar, in-room safe, refrigerator, and flat-screen TV, it’s designed for your ultimate comfort. The bathroom features a convenient tub/shower combo, large vanity, complimentary toiletries, and a hair dryer, ensuring a seamless and pampering stay.",
		image: { url: "/WhirlpoolKing.avif" },
		background: { url: "/Background.avif" },
		buttonText: "Book Now",
		buttonURL: "#",
	};

	return (
		<main className="bg-stone-200">
			<div className="">
				<Section1
					title={vintageDoubleOceanfront.title}
					content={vintageDoubleOceanfront.content}
					image={vintageDoubleOceanfront.image}
					background={vintageDoubleOceanfront.background}
					buttonText={vintageDoubleOceanfront.buttonText}
					buttonURL={vintageDoubleOceanfront.buttonURL}
				/>
			</div>

			<div className="">
				<Section2
					title={GatsbyWhirlpool.title}
					content={GatsbyWhirlpool.content}
					image={GatsbyWhirlpool.image}
					background={GatsbyWhirlpool.background}
					buttonText={GatsbyWhirlpool.buttonText}
					buttonURL={GatsbyWhirlpool.buttonURL}
				/>
			</div>

			<div className="">
				<Section1
					title={vintageKingOceanfront.title}
					content={vintageKingOceanfront.content}
					image={vintageKingOceanfront.image}
					background={vintageKingOceanfront.background}
					buttonText={vintageKingOceanfront.buttonText}
					buttonURL={vintageKingOceanfront.buttonURL}
				/>
			</div>

			<div className="">
				<Section2
					title={whirlpoolKing.title}
					content={whirlpoolKing.content}
					image={whirlpoolKing.image}
					background={whirlpoolKing.background}
					buttonText={whirlpoolKing.buttonText}
					buttonURL={whirlpoolKing.buttonURL}
				/>
			</div>
		</main>
	);
}

