import React from "react";

export default function MeetTheChef() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32 mt-25">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img
            src="https://static.wixstatic.com/media/986aef_d5c36d369cac4f90a25927684c426daf~mv2.png/v1/fill/w_582,h_775,al_c,lg_1,q_90,enc_avif,quality_auto/chef-craig-johnson-founder-owner-of-leav.png"
            alt="Chef Craig Johnson, Executive Chef at The Claridge"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md"
          />
        </div>

        {/* Right Column - Text */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet The Chef
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            As our Executive Chef and the head of Culinary Operations,{' '}
            <span className="font-semibold">Chef Craig Johnson</span>’s career
            spans over 30 years, taking him around the world to study under
            renowned TV personality & Master Chef Gustav E. Mauler — one of the
            few American Culinary Federation Certified Master Chefs in the U.S.
            His warm personality and friendly demeanor make every dining
            experience feel like home.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Craig’s earliest inspiration came from his grandmother. At just 9
            years old, he learned to “cook with love” and “express your heart
            through food.” Sundays at her home were filled with family, fried
            chicken, mac and cheese, collard greens, and love.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Now overseeing the entire culinary program at{' '}
            <span className="font-semibold">The Claridge</span>, Chef Craig has
            built an impressive resume — from opening the Taj Mahal in Atlantic
            City to leading kitchens at Marriott, Caesars Palace, Hilton,
            Sheraton, and more. He also founded his own restaurant,{' '}
            <em>Munchies</em>, and has worked with multiple universities as an
            executive chef.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            A proud local chef, Craig takes advantage of New Jersey’s fresh
            produce and seafood to craft dishes that showcase his culinary
            artistry. When you dine with us, you’re not just a guest — you’re
            part of the family.
          </p>

          <h4 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
            Awards & Recognition
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Honor of Host Chef – Delaware Delmarva Chicken Festival (2010)</li>
            <li>Youth Transition to Work Award (2008)</li>
            <li>Culinary Instructor Award of Excellence (2000)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
