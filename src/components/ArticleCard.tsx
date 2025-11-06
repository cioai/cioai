import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
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
        "group block bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {featuredImage ? (
          <>
            <img
              src={featuredImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
            <span className="text-5xl font-black text-accent/40">CioAI</span>
          </div>
        )}
        
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground border-0 shadow-lg">
          {categoryName}
        </Badge>

        {/* Read More Icon (appears on hover) */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <ArrowRight className="w-5 h-5 text-accent-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
