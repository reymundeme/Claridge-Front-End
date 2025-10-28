"use client";

import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";

export default function RoomsSuitesPage() {
    const MonacoData = {
        title: "Monaco King Suite",
        content:
            "The Monaco King Suite at The Claridge Hotel in Atlantic City epitomizes luxury and comfort, offering guests a lavish retreat amidst the excitement of the city. This elegantly appointed suite features a spacious king-sized bed with plush bedding, ensuring a restful night's sleep. The living area, distinguished by its tasteful decor and comfortable seating, provides the perfect setting for relaxation or entertainment. Large windows flood the space with natural light, offering stunning views of the Atlantic Ocean.",
        image : { url: "/MonacoKingSuite.jpg" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "./SpecialtySuites/Booking",
    };

    const HoneymoonData = {
        title: "Honeymoon Suite",
        content:
            "The Honeymoon Suite at The Claridge Hotel in Atlantic City is a sanctuary of romance and luxury, designed to provide newlyweds with an unforgettable start to their life together. This exquisite suite envelops its guests in an atmosphere of elegance and intimacy, featuring a sumptuous king-sized bed adorned with the finest linens for an added touch of romance. The suite's decor is a harmonious blend of classic sophistication and contemporary style, creating a serene and inviting environment.",
        image : { url: "/HoneyMoon.avif" },
        background: { url: "/Background.avi" },
        buttonText: "Book Now",
        buttonURL: "./SpecialtySuites/Booking",
    };

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
        <main className="bg-white">
            <div className="pt-20">
                <h2 className="text-center text-slate-950 text-3xl mb-6 pt-20 font-bold">Specialty Suites</h2>
                    <Section1
                        title={MonacoData.title}
                        content={MonacoData.content}
                        image={MonacoData.image}
                        background={MonacoData.background}
                        buttonText={MonacoData.buttonText}
                        buttonURL={MonacoData.buttonURL}
                    />
                    <Section2
                        title={HoneymoonData.title}
                        content={HoneymoonData.content}
                        image={HoneymoonData.image}
                        background={HoneymoonData.background}
                        buttonText={HoneymoonData.buttonText}
                        buttonURL={HoneymoonData.buttonURL}
                    />
            </div>
            <div className="pt-4">
                <h2 className="text-center text-slate-950 text-3xl mb-6 font-bold">Vintage Themed Suites</h2>
                    <Section1
                        title={SinatraKingSuite.title}
                        content={SinatraKingSuite.content}
                        image={SinatraKingSuite.image}
                        background={SinatraKingSuite.background}
                        buttonText={SinatraKingSuite.buttonText}
                        buttonURL={SinatraKingSuite.buttonURL}
                    />
                    <Section2
                        title={BoardwalkEmpireSuite.title}
                        content={BoardwalkEmpireSuite.content}
                        image={BoardwalkEmpireSuite.image}
                        background={BoardwalkEmpireSuite.background}
                        buttonText={BoardwalkEmpireSuite.buttonText}
                        buttonURL={BoardwalkEmpireSuite.buttonURL}
                    />
            </div>
            <div className="pt-4">
                    <h2 className="text-center text-slate-950 text-3xl mb-6 font-bold">Specialty Rooms</h2>
                    <Section1
                        title={vintageDoubleOceanfront.title}
                        content={vintageDoubleOceanfront.content}
                        image={vintageDoubleOceanfront.image}
                        background={vintageDoubleOceanfront.background}
                        buttonText={vintageDoubleOceanfront.buttonText}
                        buttonURL={vintageDoubleOceanfront.buttonURL}
                    />
                    <Section2
                        title={GatsbyWhirlpool.title}
                        content={GatsbyWhirlpool.content}
                        image={GatsbyWhirlpool.image}
                        background={GatsbyWhirlpool.background}
                        buttonText={GatsbyWhirlpool.buttonText}
                        buttonURL={GatsbyWhirlpool.buttonURL}
                    />
                    <Section1
                        title={vintageKingOceanfront.title}
                        content={vintageKingOceanfront.content}
                        image={vintageKingOceanfront.image}
                        background={vintageKingOceanfront.background}
                        buttonText={vintageKingOceanfront.buttonText}
                        buttonURL={vintageKingOceanfront.buttonURL}
                    />
                    <Section2
                        title={whirlpoolKing.title}
                        content={whirlpoolKing.content}
                        image={whirlpoolKing.image}
                        background={whirlpoolKing.background}
                        buttonText={whirlpoolKing.buttonText}
                        buttonURL={whirlpoolKing.buttonURL}
                    />
            </div> 
            <div className="pt-4">
                <h2 className="text-center text-slate-950 text-3xl mb-6 font-bold">Standard Rooms</h2>
                    <Section1
                        title={SuperiorKing.title}
                        content={SuperiorKing.content}
                        image={SuperiorKing.image}
                        background={SuperiorKing.background}
                        buttonText={SuperiorKing.buttonText}
                        buttonURL={SuperiorKing.buttonURL}
                    />
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
