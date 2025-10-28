"use client";

import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";


export default function StandardRoomsPage() {
	const SuperiorKing = {
		title: "Superior King",
		content:
			"The Superior King room at The Claridge Hotel in Atlantic City offers a blend of comfort, style, and convenience, designed to meet the needs of the modern traveler while providing a touch of luxury. This room features a spacious king-sized bed with premium bedding, ensuring a restful night's sleep in an elegantly appointed setting. \
				​Superior King Rooms are larger than standard rooms, often offering more living space or a more spacious layout. Some may even include a separate living area or a small seating area. ",
		image : { url: "/SuperiorKing.avif" },
		background: { url: "/backgroundd" },
		buttonText: "Book Now",
		buttonURL: "#",
		};
		
		const SuperiorDouble = {
		title: "Superior Double",
		content:
			"The Superior Double room at The Claridge Hotel in Atlantic City offers a harmonious blend of comfort and practicality, making it an excellent choice for friends, families, or travelers seeking a shared accommodation without compromising on luxury. This room is furnished with two comfortable double beds, each dressed in premium bedding, ensuring a restful sleep for all guests.",
		image : { url: "/SuperiorDouble.avif" },
		background: { url: "/backgroundd" },
		buttonText: "Book Now",
		buttonURL: "#",		
		};


	return (
		<main className="bg-stone-200">
			<div className="">
				<Section1
					title={SuperiorKing.title}
					content={SuperiorKing.content}
					image={SuperiorKing.image}
					background={SuperiorKing.background}
					buttonText={SuperiorKing.buttonText}
					buttonURL={SuperiorKing.buttonURL}
				/>
			</div>
			<div className="">
				<Section2
					title={SuperiorDouble.title}
					content={SuperiorDouble.content}
					image={SuperiorDouble.image}
					background={SuperiorDouble.background}
					buttonText={SuperiorDouble.buttonText}
					buttonURL={SuperiorDouble.buttonURL}
				/>
			</div>
		</main>
	);
}

