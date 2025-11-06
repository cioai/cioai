import { Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export const Newsletter = () => {
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
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Síguenos en Redes
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Únete a nuestra comunidad y mantente al día con las últimas novedades en IA
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/cioai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <Instagram className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-primary-foreground">Instagram</span>
            </a>

            <a
              href="https://tiktok.com/@cioai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <FaTiktok className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-primary-foreground">TikTok</span>
            </a>

            <a
              href="https://youtube.com/@cioai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <Youtube className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-primary-foreground">YouTube</span>
            </a>
          </div>

          <p className="text-sm text-primary-foreground/50 mt-8">
            Contenido exclusivo, tutoriales y actualizaciones diarias
          </p>
        </div>
      </div>
    </section>
  );
};