"use client";

import Section1 from "@/components/Section1"
import Section2 from "@/components/Section2";


export default function VintageThemedSuitesPage() {
	const SinatraKingSuite = {
		title: "Sinatra King Suite",
		content:
			"The Sinatra Suite at The Claridge Hotel in Atlantic City is a tribute to the timeless elegance and charm of Frank Sinatra, offering guests an immersive experience into the world of this iconic entertainer. This suite exudes a classic vibe, reminiscent of Sinatra's sophisticated style and his deep connection with Atlantic City. Upon entering, guests are greeted by a decor that blends vintage glamour with modern luxury.",
		image : { url: "/Sinatra1.avif" },
		background: { url: "/backgroundd" },
		buttonText: "Book Now",
		buttonURL: "#",
		};
		
		const BoardwalkEmpireSuite = {
		title: "Boardwalk Empire Suite",
		content:
			"The Boardwalk Empire King Suite at The Claridge Hotel in Atlantic City is a captivating tribute to the rich history and vibrant energy of the city's famed Boardwalk, harkening back to the roaring twenties and the era of prohibition. This suite is a luxurious nod to the opulence and intrigue of the time, offering guests an immersive experience into a world where vintage charm meets modern luxury.",
		image : { url: "/BoardwalkEmpire1.avif" },
		background: { url: "/backgroundd" },
		buttonText: "Book Now",
		buttonURL: "#",		
		};


	return (
		<main className="bg-stone-200">
			<div className="">
				<Section1
					title={SinatraKingSuite.title}
					content={SinatraKingSuite.content}
					image={SinatraKingSuite.image}
					background={SinatraKingSuite.background}
					buttonText={SinatraKingSuite.buttonText}
					buttonURL={SinatraKingSuite.buttonURL}
				/>
			</div>
			<div className="">
				<Section2
					title={BoardwalkEmpireSuite.title}
					content={BoardwalkEmpireSuite.content}
					image={BoardwalkEmpireSuite.image}
					background={BoardwalkEmpireSuite.background}
					buttonText={BoardwalkEmpireSuite.buttonText}
					buttonURL={BoardwalkEmpireSuite.buttonURL}
				/>
			</div>
		</main>
	);
}

