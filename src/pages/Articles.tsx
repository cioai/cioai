import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { ArticleCard } from "@/components/ArticleCard";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const Articles = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          category:categories(name, slug)
        `)
        .order("published_at", { ascending: false });

      if (!error && data) {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />
      
      <main className={cn("transition-all duration-300", chatOpen && "md:mr-[400px]")}>
        <section className="py-32 container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              Todos los Artículos
            </h1>
            <p className="text-xl text-muted-foreground">
              Explora nuestra colección completa de guías, tutoriales y análisis sobre herramientas de IA
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-secondary rounded-2xl mb-4" />
                  <div className="h-6 bg-secondary rounded w-3/4 mb-2" />
                  <div className="h-4 bg-secondary rounded w-full mb-2" />
                  <div className="h-4 bg-secondary rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ArticleCard
                    title={article.title}
                    excerpt={article.excerpt}
                    slug={article.slug}
                    featuredImage={article.featured_image || undefined}
                    categoryName={article.category?.name || "Sin categoría"}
                    readingTime={article.reading_time}
                    publishedAt={article.published_at}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aún no hay artículos publicados. ¡Vuelve pronto!
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Articles;
