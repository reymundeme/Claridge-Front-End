type CardWithIconProps = {
  title: string;
  description: string;
  icon: React.ReactNode; // can be Lucide, custom SVG, etc.
};

export default function CardWithIcon({ title, description, icon }: CardWithIconProps) {
  return (
    <div className="bg-white rounded-sm shadow-md border-1 border-yellow-50 p-8 hover:shadow-xl transition flex flex-col items-center text-center">
      {/* Icon inside border box */}
      <div className="mb-6 flex items-center justify-center w-14 h-14 border-2 border-yellow-600 rounded-xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
