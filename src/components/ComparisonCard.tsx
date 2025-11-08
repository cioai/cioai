import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import soraIcon from "@/assets/sora-icon.png";
import veoIcon from "@/assets/veo-icon.png";
import runwayIcon from "@/assets/runway-icon.png";

interface ComparisonCardProps {
  title: string;
  subtitle: string;
  slug: string;
  tool1: {
    name: string;
    logo?: string;
  };
  tool2: {
    name: string;
    logo?: string;
  };
}

const getToolIcon = (name: string): string => {
  if (name.toLowerCase().includes("sora")) return soraIcon;
  if (name.toLowerCase().includes("veo")) return veoIcon;
  if (name.toLowerCase().includes("runway")) return runwayIcon;
  return "";
};

export const ComparisonCard = ({
  title,
  subtitle,
  slug,
  tool1,
  tool2,
}: ComparisonCardProps) => {
  return (
    <Link
      to={`/articulo/${slug}`}
      className="group relative min-w-[350px] h-[400px] bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-2xl snap-start"
    >
      {/* Split Background Effect */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-all duration-500" />
        <div className="flex-1 bg-gradient-to-bl from-accent/5 to-transparent group-hover:from-accent/10 transition-all duration-500" />
      </div>

      {/* VS Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-black text-2xl text-accent-foreground shadow-lg">
          VS
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Tools */}
        <div className="flex items-center justify-between mb-auto">
          <div className="flex-1 text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-primary/5 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform duration-500 p-3">
              {getToolIcon(tool1.name) ? (
                <img src={getToolIcon(tool1.name)} alt={tool1.name} className="w-full h-full object-contain" />
              ) : (
                tool1.logo || tool1.name.slice(0, 2)
              )}
            </div>
            <p className="font-semibold">{tool1.name}</p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-accent/5 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform duration-500 p-3">
              {getToolIcon(tool2.name) ? (
                <img src={getToolIcon(tool2.name)} alt={tool2.name} className="w-full h-full object-contain" />
              ) : (
                tool2.logo || tool2.name.slice(0, 2)
              )}
            </div>
            <p className="font-semibold">{tool2.name}</p>
          </div>
        </div>

        {/* Title */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent tracking-wider uppercase">
              Comparativa
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-accent-foreground hover:bg-accent transition-colors"
          >
            Ver Comparativa
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  );
};
