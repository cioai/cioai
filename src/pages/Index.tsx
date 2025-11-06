import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonCard } from "@/components/ComparisonCard";
import { Stats } from "@/components/Stats";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { supabase } from "@/integrations/supabase/client";
import { Video, Sparkles, Wand2, BookOpen } from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  reading_time: number;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
}

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          category:categories(name, slug)
        `)
        .order("published_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setArticles(data as any);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />
      
      <main>
        <Hero />

        {/* Latest Articles */}
        <section className="py-20 container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-bold text-accent tracking-[0.2em]">
              ÚLTIMAS PUBLICACIONES
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-secondary rounded-2xl mb-4" />
                  <div className="h-4 bg-secondary rounded mb-2" />
                  <div className="h-4 bg-secondary rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
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
                    categoryName={article.category?.name || "General"}
                    readingTime={article.reading_time}
                    publishedAt={article.published_at}
                  />
                </div>
              ))}
            </div>
          )}
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
