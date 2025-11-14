import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard = ({ name, price, description, features, highlighted }: PricingCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1",
        highlighted
          ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg"
          : "border-border bg-card hover:shadow-lg"
      )}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="text-4xl font-black mb-2">{price}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
