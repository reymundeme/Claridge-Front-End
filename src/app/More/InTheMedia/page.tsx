import Image from "next/image";
import Link from "next/link";

const mediaHighlights = [
	{
		title: "Forbes: Best Non-Gaming Hotel",
		logo: "https://static.wixstatic.com/media/0abd97_7701afae2f6047c18a771366f999bf81~mv2.png/v1/fill/w_1008,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/forbes-logo-black-transparent.png",
		image: "https://static.wixstatic.com/media/24f8cb_9b3a66661ef74e48a72853e510113786~mv2.jpg/v1/crop/x_0,y_0,w_1003,h_768/fill/w_726,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/24f8cb_9b3a66661ef74e48a72853e510113786~mv2.jpg",
		excerpt:
			"The Claridge Hotel brought a new level of opulence to Atlantic City—Princess Grace of Monaco was a frequent guest. The chic clientele appreciates the historic ambience and visits to experience Atlantic City’s beaches, the Boardwalk and the nightlife.",
		link: "https://www.forbes.com/sites/forbes-personal-shopper/2023/08/14/best-hotels-in-atlantic-city/?sh=3c6d0359b79e",
	},
	{
		title: "Travel + Leisure: Best Hotels In Atlantic City NJ",
		logo: "https://www.travelandleisure.com/hotels-resorts/atlantic-city-hotels-to-book",
		image: "https://static.wixstatic.com/media/24f8cb_3c55a9c09c1742a1b02d486a6246855d~mv2.jpg/v1/fill/w_530,h_798,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/24f8cb_3c55a9c09c1742a1b02d486a6246855d~mv2.jpg",
		excerpt:
			"Not many Atlantic City hotels have hosted Martin Luther King, Jr. and Princess Grace of Monaco, but the Claridge, in all its Boardwalk Empire grandeur, has welcomed many A-listers and world luminaries in the past ninety years.",
		link: "https://www.travelandleisure.com/hotels-resorts/atlantic-city-hotels-to-book",
	},
	{
		title: "Greetings From The Garden State",
		logo: "https://static.wixstatic.com/media/0abd97_f33b13f543be4ad1a3a0810a034e2a4e~mv2.png/v1/fill/w_1200,h_482,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/greetings-from-the-garden-state-mike-ham-znUQO1fmZMN-vturq7h2Lp8_1400x1400.png",
		image: "https://static.wixstatic.com/media/0abd97_f33b13f543be4ad1a3a0810a034e2a4e~mv2.png/v1/fill/w_1200,h_482,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/greetings-from-the-garden-state-mike-ham-znUQO1fmZMN-vturq7h2Lp8_1400x1400.png",
		excerpt:
			"Dive into the captivating story of The Claridge Hotel, as featured in 'Greetings From The Garden State.' This piece offers a unique glimpse into the heart of The Claridge Hotel, celebrating its enduring legacy.",
		link: "https://www.youtube.com/watch?v=znUQO1fmZMN",
	},
	{
		title: "Lovelight Lifestyle",
		logo: "https://static.wixstatic.com/media/0abd97_f845ef2b104240a48cdf68926b1f0273~mv2.webp/v1/fill/w_462,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_of_YouTube_(2015-2017)_svg.webp",
		image: "https://static.wixstatic.com/media/0abd97_f845ef2b104240a48cdf68926b1f0273~mv2.webp/v1/fill/w_462,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_of_YouTube_(2015-2017)_svg.webp",
		excerpt:
			"Step into the spotlight with 'Lovelight Lifestyle,' where Alaura Lovelight shines a light on The Claridge Hotel's modern charm.",
		link: "https://www.youtube.com/watch?v=znUQO1fmZMN",
	},
	{
		title: "@TobiasEats Review",
		logo: "https://static.wixstatic.com/media/0abd97_f845ef2b104240a48cdf68926b1f0273~mv2.webp/v1/fill/w_462,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_of_YouTube_(2015-2017)_svg.webp",
		image: "https://static.wixstatic.com/media/0abd97_f845ef2b104240a48cdf68926b1f0273~mv2.webp/v1/fill/w_462,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_of_YouTube_(2015-2017)_svg.webp",
		excerpt:
			"Check out the latest review by renowned food blogger @TobiasEats, who recently visited our VUE Rooftop Bar at The Claridge!",
		link: "https://www.youtube.com/@TobiasEats",
	},
];

export default function InTheMediaPage() {
	return (
		<main className="bg-white min-h-screen py-10 px-4 mt-25 md:px-16">
			<section className="max-w-5xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-6 text-gray-900">The Claridge in the Spotlight</h1>
				<p className="text-center text-lg text-gray-700 mb-10">
					Discover our media highlights, press features, and articles showcasing The Claridge Hotel’s legacy and modern charm.
				</p>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{mediaHighlights.map((item, idx) => (
						<div
							key={idx}
							className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 border border-gray-100"
						>
							<div className="flex items-center justify-center bg-gray-50 py-4">
								<Image
									src={item.logo}
									alt={item.title + ' logo'}
									width={160}
									height={60}
									className="object-contain"
								/>
							</div>
							<div className="relative w-full h-48">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>
							<div className="p-6 flex-1 flex flex-col">
								<h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
								<p className="text-gray-600 mb-4 flex-1">{item.excerpt}</p>
								<Link
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block mt-auto px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm font-medium"
								>
									Read More
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<h3 className="text-lg font-semibold mb-2">Contact & Social</h3>
					<p className="text-gray-700 mb-2">
						<span className="font-medium">Email:</span> <a href="mailto:sales@claridge.com" className="text-blue-700">sales@claridge.com</a> | <a href="mailto:reservations@claridge.com" className="text-blue-700">reservations@claridge.com</a>
					</p>
					<p className="text-gray-700 mb-2">
						<span className="font-medium">Phone:</span> <a href="tel:1-844-AC-IS-FUN" className="text-blue-700">1-844-AC-IS-FUN</a> | <a href="tel:1-609-487-4444" className="text-blue-700">1-609-487-4444</a>
					</p>
					<div className="flex justify-center gap-4 mt-2">
						<a href="https://www.tripadvisor.co.nz/Hotel_Review-g29750-d6776441-Reviews-or1080-The_Claridge_Hotel-Atlantic_City_New_Jersey.html" target="_blank" rel="noopener noreferrer">
							<Image src="/tripadvisor.avif" alt="TripAdvisor" width={32} height={32} />
						</a>
						<a href="https://www.facebook.com/ClaridgeAC" target="_blank" rel="noopener noreferrer">
							<Image src="/fb.avif" alt="Facebook" width={32} height={32} />
						</a>
						<a href="https://www.instagram.com/claridgeac/" target="_blank" rel="noopener noreferrer">
							<Image src="/insta.avif" alt="Instagram" width={32} height={32} />
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

