import { TrendingUp, Users, FileText, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  className?: string;
}

const StatItem = ({ icon, value, label, trend, className }: StatItemProps) => (
  <div
    className={cn(
      "group p-6 bg-card border border-border rounded-2xl hover:border-accent transition-all duration-500 hover:shadow-lg",
      className
    )}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-sm text-green-500">
          <TrendingUp className="w-4 h-4" />
          <span>{trend}</span>
        </div>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-3xl font-bold font-display group-hover:text-accent transition-colors">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

export const Stats = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Impacto de CioAI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ayudando a miles de creadores a dominar las herramientas de IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<FileText className="w-6 h-6 text-accent" />}
            value="15+"
            label="Artículos publicados"
            trend="+5 este mes"
          />
          <StatItem
            icon={<Users className="w-6 h-6 text-accent" />}
            value="10K+"
            label="Lectores mensuales"
            trend="+25%"
          />
          <StatItem
            icon={<Star className="w-6 h-6 text-accent" />}
            value="4.9/5"
            label="Valoración promedio"
          />
          <StatItem
            icon={<TrendingUp className="w-6 h-6 text-accent" />}
            value="95%"
            label="Usuarios satisfechos"
            trend="+12%"
          />
        </div>
      </div>
    </section>
  );
};
