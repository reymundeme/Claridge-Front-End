import PageCover from "@/components/PageCover";
import Section1 from "@/components/Section1";
import TextSectionCenter from "@/components/TextSectionCenter";
import Card from "@/components/Card";

export default function TenPercentForYouPage() {
	const benefits = [
		{
			title: "Room Nights",
			description: "Earn up to 10% back on every night for rooms booked with your custom code",
			image: "/SuperiorKing.avif"
		},
		{
			title: "Group Events",
			description: "Event bookings may qualify to receive additional earnings",
			image: "/TheMainBallroom.avif"
		},
		{
			title: "Room Blocks",
			description: "Room blocks and group bookings may qualify to receive additional earnings",
			image: "/TheGrandBallroom.avif"
		},
		{
			title: "Quarterly Rewards",
			description: "Incentive dollars are distributed quarterly — use them as you see fit",
			image: "/Background.avif"
		}
	];

	const features = [
		{
			title: "Effortless Fundraising",
			description: "No extra planning. No extra costs. Raise funds while your supporters enjoy their stay.",
			image: "/Background.avif"
		},
		{
			title: "Community Impact",
			description: "Every stay or event booked helps strengthen your organization's ability to make a difference.",
			image: "/TheMainBallroom.avif"
		},
		{
			title: "Recognition Opportunities",
			description: "Top-performing organizations may receive additional perks, such as free meeting space.",
			image: "/TheGrandBallroom.avif"
		}
	];

	return (
		<main className="min-h-screen bg-white mt-25">
			<div className="relative h-[60vh] flex items-center justify-center text-white">
				<img 
					src="/Background.avif" 
					alt="The Claridge Hotel" 
					className="absolute inset-0 w-full h-full object-cover brightness-50"
				/>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">10%4U Program - We Will Write You a Check!</h1>
					<p className="text-xl md:text-2xl">Join our Give-Back Program and turn every stay into cash incentives</p>
				</div>
			</div>

			<Section1
				title="What Is This Program?"
				content="The Claridge Beachfront Hotel in Atlantic City is proud to launch this exclusive program that adds no extra cost to your supporters. Every room booked or group event held at our property can earn dollars for your organization."
				image={{ url: "/TheMainBallroom.avif" }}
			/>

			<div className="bg-gray-50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">How You Can Earn</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{benefits.map((benefit, index) => (
							<Card 
								key={index}
								title={benefit.title}
								description={benefit.description}
								image={benefit.image}
							/>
						))}
					</div>
				</div>
			</div>

			<TextSectionCenter
				title="Calculate Your Potential Earnings"
				content={`
					Here's an example of what you could earn:
					• 50 room nights booked at an average rate of $179 = $895
					• A gala generating $15,000 net = $750
					• Total earnings for your organization in one quarter = $1,645
				`}
			/>

			<div className="bg-white py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Why Participate?</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<Card 
								key={index}
								title={feature.title}
								description={feature.description}
								image={feature.image}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="bg-gray-50 py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
					<p className="text-gray-600 mb-8">Fill out our form and our sales team will reach out shortly with your organization's unique booking code.</p>
					<div className="flex flex-col items-center space-y-4">
						<a 
							href="mailto:sales@claridge.com"
							className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Contact Our Sales Team
						</a>
						<div className="text-gray-500">
							<p>Phone: 1-844-AC-IS-FUN</p>
							<p>Email: sales@claridge.com</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

