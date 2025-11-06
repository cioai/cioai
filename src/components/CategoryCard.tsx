import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  slug: string;
  count: number;
  icon: LucideIcon;
  description?: string;
  gradient?: string;
}

export const CategoryCard = ({
  name,
  slug,
  count,
  icon: Icon,
  description,
  gradient = "from-accent/20 to-accent/5",
}: CategoryCardProps) => {
  return (
    <Link
      to={`/categoria/${slug}`}
      className="group relative h-[280px] bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
    >
      {/* Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          gradient
        )}
      />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        <div>
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Icon className="w-8 h-8 text-accent" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
            {name}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Count Badge */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-semibold text-accent">
              {count} artículos
            </span>
          </div>
          <div className="flex-1 h-px bg-border group-hover:bg-accent transition-colors" />
        </div>
      </div>

      {/* Hover Effect Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </Link>
  );
};
