"use client";

import Section1Multi from "@/components/Section1Multi";

export default function CareersPage() {
	return (
		<main className="bg-white">
			<Section1Multi
				title="Careers"
				image={{ url: "/career1.jpeg, /career2.jpeg, /career3.jpeg" }}
				content="Join our team at The Claridge and be part of a dynamic and welcoming environment. We are always looking for passionate individuals to contribute to our commitment to exceptional service and hospitality. Explore our current job openings and take the next step in your career with us."
			/>
		</main>
	);
}

