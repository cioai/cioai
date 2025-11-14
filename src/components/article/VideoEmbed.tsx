import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  description?: string;
}

export const VideoEmbed = ({ videoId, title, description }: VideoEmbedProps) => {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-border bg-card">
      <div className="relative aspect-video bg-secondary/20 group cursor-pointer">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      {description && (
        <div className="p-4 border-t border-border">
          <div className="flex items-start gap-3">
            <Play className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
