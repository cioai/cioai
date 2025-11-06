import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
}

export const ArticleCardSkeleton = ({ className }: LoadingSkeletonProps) => {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {/* Image skeleton */}
        <div className="aspect-video bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent animate-shimmer" />
        </div>

        {/* Content skeleton */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <div className="h-5 bg-secondary rounded w-3/4" />
            <div className="h-5 bg-secondary rounded w-1/2" />
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <div className="h-4 bg-secondary rounded" />
            <div className="h-4 bg-secondary rounded" />
            <div className="h-4 bg-secondary rounded w-5/6" />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4">
            <div className="h-3 bg-secondary rounded w-20" />
            <div className="h-3 bg-secondary rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center animate-pulse">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="h-8 bg-secondary rounded-full w-48 mx-auto" />
          <div className="space-y-4">
            <div className="h-16 bg-secondary rounded w-full" />
            <div className="h-16 bg-secondary rounded w-5/6 mx-auto" />
          </div>
          <div className="h-6 bg-secondary rounded w-3/4 mx-auto" />
          <div className="flex gap-4 justify-center">
            <div className="h-12 bg-secondary rounded-full w-40" />
            <div className="h-12 bg-secondary rounded-full w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};
