import { cn } from "@/lib/utils"; // if you use shadcn/ui (optional)

type CardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;      // allow outer styling override
  titleClass?: string;     // allow custom font/color for title
  descClass?: string;      // allow custom font/color for description
  variant?: "default" | "highlight" | "muted"; // optional style presets
};

export default function Card({
  title,
  description,
  image,
  className,
  titleClass,
  descClass,
  variant = "default",
}: CardProps) {
  // define style variants
  const variantStyles = {
    default: "bg-white/80 text-black",
    highlight: "bg-yellow-100 text-yellow-800",
    muted: "bg-gray-100 text-gray-600",
  };

  return (
    <div
      className={cn(
        "rounded-sm shadow-md overflow-hidden hover:shadow-lg transition",
        variantStyles[variant],
        className
      )}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-3 items-center text-center">
        <h3 className={cn("text-xl font-bold", titleClass)}>{title}</h3>
        <p className={cn("text-gray-700", descClass)}>{description}</p>
      </div>
    </div>
  );
}
