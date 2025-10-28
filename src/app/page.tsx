import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Booking from "@/components/Booking";
import Amenities from "@/components/amenities";
import Map from "@/components/Map";
import SwiperCarousel from "@/components/SwiperCarousel";
import PageCover from "@/components/PageCover";


export default function Home() {
  
  const combinedShowcase = [
    {
      title: "Art Deco Elegance",
      description:
        "A beautiful tribute to 1920s architecture with intricate details and timeless design that transports you to an era of sophistication",
      image: "/Claridge_inside_look.jpg",
    },
    {
      title: "Non-Gaming Sanctuary",
      description:
        "Experience peace and tranquility in our sophisticated atmosphere no casino floor pressure, just pure relaxation",
      image: "/claridge_relax.jpg",
    },
    {
      title: "Private Beachfront Rooms",
      description:
        "Stay cozy and unwind in our private beachfront rooms with views of the ocean and luxurious amenities",
      image: "/claridge_oceanview.png",
    },
    {
      title: "VÜE Rooftop Bar",
      description:
        "Perched high above the city, VÜE offers panoramic, 360-degree views of the ocean, skyline, and the whole boardwalk hustle. Catching the sunset here with a cocktail in hand? Pure vacation goals.",
      image: "/vue_pic.png",
    },
    {
      title: "Twenties Restaurant",
      description:
        "Living up to the hotel's vintage glamour, the Twenties Restaurant provides an exceptional dining experience. It's refined but friendly, focusing on great food in a setting that channels the hotel's classic, elegant past.",
      image: "/twenties_pic.png",
    },
    {
      title: "LEAVANDER'S 22 SOUTHERN CUISINE",
      description:
        "Living up to its charming, private setting, this catering option provides an exceptional Southern dining experience. It's classic yet modern, focusing on fresh, curated food in a setting that celebrates rich culinary traditions with contemporary elegance.",
      image: "/22_pic.png",
    },
  ]
  

  return (
      
    
    <div className="font-sans min-h-screen flex flex-col items-center bg-background text-foreground">
      <Hero /> 
      <PageCover />

      <main className="mt-12 w-full">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-serif mb-10">Facilities &amp; More</h1>
          
          <SwiperCarousel
            images={combinedShowcase.slice(0, 6).map((s) => s.image)}
            titles={combinedShowcase.slice(0, 6).map((s) => s.title)}
            descriptions={combinedShowcase.slice(0, 6).map((s) => s.description)}
          />
        </div>

        {/* Our Story section: centered title and responsive video (80% width on large screens) */}
        <section className="mt-20 w-full flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-12">Our Story</h2>

          <div className="w-full flex justify-center">
            {/* responsive video wrapper: 16:9 ratio, max-width 80% */}
            <div className="relative w-[80%] sm:w-[70%] max-w-7xl md:-mb-25 " style={{ paddingTop: '56.25%', }}>
              <video
                src="https://video.wixstatic.com/video/e38f27_2076efdf040a43ce950881d59280444d/720p/mp4/file.mp4"
                controls
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-auto object-cover rounded-md shadow-lg"
                autoPlay = {true}
              />
            </div>
          </div>
          </section>
          <Amenities />
          <Map />
          <Booking />
        
        </main>
          
    </div>
  );
}
