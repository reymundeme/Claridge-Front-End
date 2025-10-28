import Image from "next/image";
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-center md:text-left">
        
        {/* Column 1: Logo */}
        <div className="flex justify-center">
          {/* IMPORTANT: Replace '/claridge-logo.png' with the actual path to your logo image in the /public folder */}
          <Image 
            src="/Logo-New.avif" 
            alt="The Claridge Hotel Logo" 
            width={350} 
            height={150} 
            className="object-contain"
          />
        </div>

  {/* Column 2: Contact Info -Email */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-8">
      <div>
        <p className="font-semibold ">Email:</p>
          <a href="mailto:sales@claridge.com" className="text-sm hover:underline">
            sales@claridge.com
          </a>
        <br />
          <a href="mailto:reservations@claridge.com" className="text-sm hover:underline">
            reservations@claridge.com
          </a>
      </div>
  </div>

          {/* Column 3:Phone */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-8">
      <div className="">
        <p className="font-semibold">Phone:</p>
          {/* The vanity number is converted for the tel link */}
          <a href="tel:1-844-224-7386" className="text-sm hover:underline block">
            1-844-AC-IS-FUN
          </a>
          <a href="tel:1-609-487-4444" className="text-sm hover:underline block">
            1-609-487-4444
          </a>
      </div>
  </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          <h3 className="font-bold text-lg">Follow us on Social Media!</h3>
          <div className="flex gap-6 text-2xl mt-2">

            {/* IMPORTANT: Replace the '#' with your actual social media URLs */}
            <a href="https://www.tripadvisor.co.nz/Hotel_Review-g29750-d6776441-Reviews-or1080-The_Claridge_Hotel-Atlantic_City_New_Jersey.html" target="_blank" aria-label="TripAdvisor" className="hover:scale-130 transition-transform">
              <FaTripadvisor className="w-8 h-8 text-white-600"/>
            </a>

            <a href="https://www.facebook.com/ClaridgeAC" target="_blank" aria-label="Facebook" className="hover:scale-130 transition-transform">
              <FaFacebook className="w-8 h-8 text-white-600"/>
            </a>

            <a href="https://www.instagram.com/claridgeac/" target="_blank" aria-label="Instagram" className="hover:scale-130 transition-transform">
              <FaInstagram className="w-8 h-8 text-white-600"/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}