export default function LoyaltyProgramPage() {
	return (
		<main className="min-h-screen bg-white text-gray-800 mt-25">
			{/* Hero */}
			<section
				className="bg-cover bg-center text-white py-20"
				style={{ backgroundImage: "url('/Background.avif')" }}
			>
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">Claridge Rewards</h1>
					<p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100/90">
						Join our Loyalty Program to earn exclusive benefits, complimentary upgrades, and
						curated experiences designed for returning guests. The more you stay, the more you earn.
					</p>
					<div className="mt-8 flex justify-center gap-4">
						<a
							href="#join"
							className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-md shadow"
						>
							Join Now
						</a>
						<a
							href="#tiers"
							className="inline-block bg-white/90 hover:bg-white text-amber-700 font-semibold px-6 py-3 rounded-md shadow"
						>
							View Tiers
						</a>
					</div>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-6 py-12">
				{/* Quick Benefits */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Member Benefits</h2>
					<p className="text-gray-600 mb-6 max-w-3xl">
						Members enjoy prioritized service and tangible rewards — from complimentary Wi‑Fi and
						late checkout to exclusive offers and points toward free nights.
					</p>

					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<li className="p-5 border rounded-lg bg-gray-50">
							<h3 className="font-semibold">Earn Points</h3>
							<p className="text-sm text-gray-600 mt-1">Accrue points on eligible stays and dining.</p>
						</li>
						<li className="p-5 border rounded-lg bg-gray-50">
							<h3 className="font-semibold">Exclusive Rates</h3>
							<p className="text-sm text-gray-600 mt-1">Access members-only prices and packages.</p>
						</li>
						<li className="p-5 border rounded-lg bg-gray-50">
							<h3 className="font-semibold">Room Upgrades</h3>
							<p className="text-sm text-gray-600 mt-1">Priority for complimentary upgrades when available.</p>
						</li>
						<li className="p-5 border rounded-lg bg-gray-50">
							<h3 className="font-semibold">Faster Check-in</h3>
							<p className="text-sm text-gray-600 mt-1">Streamlined arrival and priority service.</p>
						</li>
					</ul>
				</section>

				{/* Tiers */}
				<section id="tiers" className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Membership Tiers</h2>
					<p className="text-gray-600 mb-6 max-w-3xl">Simple tiers so you can see the value quickly.</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="p-6 border rounded-lg">
							<div className="text-amber-600 font-bold">Silver</div>
							<h3 className="text-xl font-semibold mt-2">Starting Tier</h3>
							<p className="mt-3 text-gray-600">Earn points on every stay and enjoy member-only rates.</p>
							<ul className="mt-4 text-sm text-gray-600 space-y-2">
								<li>Points per stay</li>
								<li>Member rates</li>
								<li>Complimentary Wi‑Fi</li>
							</ul>
						</div>

						<div className="p-6 border-2 border-amber-600 rounded-lg bg-amber-50">
							<div className="text-amber-700 font-bold">Gold</div>
							<h3 className="text-xl font-semibold mt-2">Preferred Tier</h3>
							<p className="mt-3 text-gray-600">Faster points earning and priority for upgrades.</p>
							<ul className="mt-4 text-sm text-gray-600 space-y-2">
								<li>Bonus points</li>
								<li>Priority upgrades</li>
								<li>Late checkout</li>
							</ul>
						</div>

						<div className="p-6 border rounded-lg">
							<div className="text-amber-600 font-bold">Platinum</div>
							<h3 className="text-xl font-semibold mt-2">Elite Tier</h3>
							<p className="mt-3 text-gray-600">Highest rewards and exclusive experiences.</p>
							<ul className="mt-4 text-sm text-gray-600 space-y-2">
								<li>Maximum points</li>
								<li>Guaranteed late checkout</li>
								<li>Exclusive offers</li>
							</ul>
						</div>
					</div>
				</section>

				{/* How to Join CTA */}
				<section id="join" className="mb-12 bg-amber-50 p-6 rounded-lg">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div>
							<h2 className="text-2xl font-bold">How to Join</h2>
							<p className="text-gray-600 mt-2">Sign up online — it takes less than a minute and you start earning right away.</p>
						</div>
						<div className="flex gap-4">
							<a
								href="/account/register"
								className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-md shadow"
							>
								Create an Account
							</a>
							<a
								href="/contact"
								className="inline-block bg-white border border-amber-600 text-amber-700 font-semibold px-5 py-3 rounded-md"
							>
								Contact Us
							</a>
						</div>
					</div>
				</section>

				{/* FAQs */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
					<div className="space-y-4">
						<details className="p-4 border rounded-lg">
							<summary className="font-semibold">How do I earn points?</summary>
							<p className="mt-2 text-gray-600">Points are earned on eligible room nights and participating dining outlets. Points accrual rules and partner offers are listed in the program terms.</p>
						</details>
						<details className="p-4 border rounded-lg">
							<summary className="font-semibold">Can I transfer points?</summary>
							<p className="mt-2 text-gray-600">Points are non-transferable between accounts, unless specified in a special promotion. See program terms for details.</p>
						</details>
						<details className="p-4 border rounded-lg">
							<summary className="font-semibold">Do points expire?</summary>
							<p className="mt-2 text-gray-600">Points may expire after a period of inactivity. Check the program terms or contact our support team for your account specifics.</p>
						</details>
					</div>
				</section>

				{/* Footer contact small */}
				<section className="py-6 text-sm text-gray-600 border-t">
					<p>
						Questions? Email <a href="mailto:rewards@claridge.com" className="text-amber-600">rewards@claridge.com</a> or call (555) 555-5555.
					</p>
				</section>
			</div>
		</main>
	);
}

