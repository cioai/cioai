import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
  categoryName: string;
  readingTime: number;
  publishedAt: string;
  className?: string;
}

export const ArticleCard = ({
  title,
  excerpt,
  slug,
  featuredImage,
  categoryName,
  readingTime,
  publishedAt,
  className,
}: ArticleCardProps) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={`/articulo/${slug}`}
      className={cn(
        "group block bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
            <span className="text-4xl font-black text-accent/40">CioAI</span>
          </div>
        )}
        
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-primary-foreground border-0">
          {categoryName}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
