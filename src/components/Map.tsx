
import Card from "./Card";



export default function Amenities() {
  const amenities = [
    {
      title: "Indoor Heated Pool",
      description: "Relax and unwind in our modern pool facilities",
      image: "/pool_pic.png",
    },
  ];

  return (
    <section className="py-20 bg-white text-center light-section">
      <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Steps from Everything</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
        The hotel's location is arguably its biggest flex. The Claridge is nestled in the heart of Atlantic City, offering unmatched access to everything that makes AC famous. You can practically roll out of bed and onto the sand!
      </p>

        {/* Google Map Embed */}
      <div className="max-w-5xl mx-auto px-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.919665754716!2d-74.43445212404096!3d39.357643171629434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee402bb78913%3A0xf61cbfef11a1fa0f!2sThe%20Claridge%20Hotel!5e1!3m2!1sen!2sus!4v1759590133577!5m2!1sen!2sus" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 w-full h-100 rounded-lg shadow-lg"></iframe>
      </div>
    </section>
  );
}
