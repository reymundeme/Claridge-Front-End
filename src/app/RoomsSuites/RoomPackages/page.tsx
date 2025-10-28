"use client";

import PackageSection from "@/components/PackageSection";

export default function RoomPackagesSubPage() {
	return (
		<main className="bg-stone-100 mt-25">
			{/* Haunted Hotel (original first package) */}
			<PackageSection
				title="Haunted Hotel Party Package"
				subtitle="One Night. One Haunted Hotel. One Party You'll Never Forget"
				paragraphs={[
					"Step into history and mystery this Halloween as The Claridge’s Grand Ballroom transforms into a haunted hotel filled with eerie elegance and supernatural fun.",
					"Dance the night away with our DJ, sip on craft cocktails from the 4-hour premium open bar, and indulge in a decadent buffet with a hauntingly sweet midnight dessert reveal.",
					"Haunted hotel vibes, wicked photo ops, and a spirited costume contest will keep the energy high all night long.",
					"Your package includes everything — party admission for two, open bar, buffet, and an overnight stay on Friday, October 31st.",
					"No need to fear the drive home when you can spend the night in Atlantic City’s own haunted landmark.",
				]}
				imageSrc="/TwentiesRestaurant.avif"
			/>

			{/* Power Play Package (left content, right image) */}
			<PackageSection
				title="POWER PLAY PACKAGE"
				subtitle="Eat. Play. Win. Stay!"
				paragraphs={[
					"Get ready for a high-energy Atlantic City escape with the ultimate mix of gaming, good eats, and rooftop vibes. The Power Play Room Package brings together entertainment and indulgence in one unbeatable getaway.",
					"Your package includes:\nStylish Overnight Accommodations for two at The Claridge Hotel\nTwo $45 Power Cards to Dave & Buster’s, just steps away from the iconic Boardwalk\nOne Free Appetizer at Dave & Buster’s with any entrée purchase\n$20 in Free Slot Play at Bally’s Casino, right next door\nTwo Welcome Drinks at the VUE Rooftop Bar, with stunning views of the Atlantic skyline.",
					"Game on. Sip up. Stay stylish.",
				]}
				imageSrc="/Arcade.avif"
			/>

			{/* Grand Gatsby Package (mirror: image left, content right) */}
			<PackageSection
				title="The Grand Gatsby New Year Package"
				subtitle="Roaring into 2026 with Grand Style!"
				paragraphs={[
					"Step into the Roaring Twenties and make your New Year's Eve celebration unforgettable with The Claridge’s Grand Gatsby Overnight Package. Immerse yourself in Art-Deco glamour and enjoy the ultimate Gatsby experience from start to finish.",
					"Your evening begins with exclusive access to the Grand Gatsby Gala, featuring a decadent buffet, passed hors d'oeuvres, a four-hour premium open bar, live DJ entertainment, and a sparkling midnight champagne toast. Dress to impress in your Gatsby-inspired finest as you dance, mingle, and ring in 2026 in style.",
					"After the festivities, retreat to the luxury of your elegantly appointed room for the night. Relax in comfort and wake refreshed, with breakfast available the following morning to continue the indulgence.",
				]}
				imageSrc="/TheGrandBallroom.avif"
				mirrored
			/>
		</main>
	);
}

