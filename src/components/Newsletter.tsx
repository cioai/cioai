import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would integrate with newsletter service
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Newsletter</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Recibe las últimas novedades en IA directamente en tu inbox
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={subscribed}
            >
              {subscribed ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  ¡Suscrito!
                </>
              ) : (
                "Suscribirse"
              )}
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/50 mt-4">
            Sin spam. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
};
