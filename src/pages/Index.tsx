import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { supabase } from "@/integrations/supabase/client";

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

        {/* Categories */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm font-bold text-accent tracking-[0.2em]">
                CATEGORÍAS
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Sora 2", slug: "sora-2", count: 5, icon: "🎬" },
                { name: "Veo 3.1", slug: "veo-3-1", count: 3, icon: "🎥" },
                { name: "Otras IAs", slug: "otras-ias", count: 4, icon: "✨" },
                { name: "Guías Generales", slug: "guias-generales", count: 3, icon: "📚" },
              ].map((cat) => (
                <a
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cat.count} artículos
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Index;
