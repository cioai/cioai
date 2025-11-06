import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
  showIcon?: boolean;
}

export const Logo = ({ className = "", showIcon = false }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 group ${className}`}
    >
      {showIcon && (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
      )}
      <span className="font-display text-2xl font-black tracking-tight">
        Cio<span className="text-accent">AI</span>
      </span>
    </Link>
  );
};
