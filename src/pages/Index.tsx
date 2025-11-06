import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { Stats } from "@/components/Stats";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { Video, Sparkles, Wand2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  // Mock articles for demo
  const mockArticles = [
    {
      id: "1",
      title: "Sora 2 - OpenAI | Todo lo Nuevo en 2025",
      slug: "sora-2-openai-novedades-2025",
      excerpt: "Descubre todas las novedades de Sora 2, la revolucionaria IA de generación de video de OpenAI que está transformando la creación de contenido en 2025.",
      featured_image: "/src/assets/sora-2.jpg",
      category: { name: "Sora 2", slug: "sora-2" },
      reading_time: 8,
      published_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "¿Cómo acceder gratis a Sora 2?",
      slug: "como-acceder-gratis-sora-2",
      excerpt: "Guía completa para acceder a Sora 2 sin pagar. Descubre las opciones gratuitas, limitaciones y requisitos para usar esta poderosa herramienta de IA.",
      featured_image: "/src/assets/sora-2.jpg",
      category: { name: "Sora 2", slug: "sora-2" },
      reading_time: 6,
      published_at: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Sora 2 vs Veo 3.1",
      slug: "sora-2-vs-veo-3-1-comparativa",
      excerpt: "Comparativa exhaustiva entre las dos mejores IAs de generación de video. Descubre cuál se adapta mejor a tus necesidades creativas en 2025.",
      featured_image: "/src/assets/comparison.jpg",
      category: { name: "Comparativas", slug: "comparativas" },
      reading_time: 9,
      published_at: new Date().toISOString(),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />
      
      <main className={cn("transition-all duration-300", chatOpen && "md:mr-[400px]")}>
        <Hero />

        {/* Latest Articles */}
        <section className="py-20 container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-bold text-accent tracking-[0.2em]">
              ÚLTIMAS PUBLICACIONES
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article, index) => (
              <div
                key={article.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArticleCard
                  title={article.title}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  featuredImage={article.featured_image || undefined}
                  categoryName={article.category.name}
                  readingTime={article.reading_time}
                  publishedAt={article.published_at}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Comparisons Slider */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm font-bold text-accent tracking-[0.2em]">
                COMPARATIVAS DESTACADAS
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <ComparisonCard
                title="Batalla de Titanes 2025"
                subtitle="¿Cuál genera mejor vídeo este año?"
                slug="sora-2-vs-veo-3-1-comparativa"
                tool1={{ name: "Sora 2", logo: "S2" }}
                tool2={{ name: "Veo 3.1", logo: "V3" }}
              />
              <ComparisonCard
                title="El Duelo de los Editores"
                subtitle="Funciones de edición con IA comparadas"
                slug="veo-3-1-vs-runway-gen-3"
                tool1={{ name: "Veo 3.1", logo: "V3" }}
                tool2={{ name: "Runway", logo: "RW" }}
              />
              <ComparisonCard
                title="Acceso y Precio"
                subtitle="¿Cuál ofrece mejor relación calidad-precio?"
                slug="mejor-ia-calidad-precio"
                tool1={{ name: "Sora 2", logo: "S2" }}
                tool2={{ name: "Runway", logo: "RW" }}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm font-bold text-accent tracking-[0.2em]">
                CATEGORÍAS
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard
                name="Sora 2"
                slug="sora-2"
                count={5}
                icon={Video}
                description="Todo sobre la IA de generación de vídeo de OpenAI"
                gradient="from-primary/10 to-primary/5"
              />
              <CategoryCard
                name="Veo 3.1"
                slug="veo-3-1"
                count={3}
                icon={Sparkles}
                description="Análisis completo de la herramienta de Google DeepMind"
                gradient="from-accent/10 to-accent/5"
              />
              <CategoryCard
                name="Otras IAs"
                slug="otras-ias"
                count={4}
                icon={Wand2}
                description="Runway, Higgsfield y más herramientas de vídeo"
              />
              <CategoryCard
                name="Guías Generales"
                slug="guias-generales"
                count={3}
                icon={BookOpen}
                description="Comparativas y tutoriales para todos"
              />
            </div>
          </div>
        </section>

        <Stats />

        <Newsletter />
      </main>

      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Index;
