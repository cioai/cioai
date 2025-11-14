import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { ArticleCard } from "@/components/ArticleCard";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const Comparativas = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparisons = async () => {
      const { data: category } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", "comparativas")
        .single();

      if (category) {
        const { data, error } = await supabase
          .from("articles")
          .select(`
            *,
            category:categories(name, slug)
          `)
          .eq("category_id", category.id)
          .order("published_at", { ascending: false });

        if (error) {
          console.error("Error fetching comparisons:", error);
        } else {
          setArticles(data || []);
        }
      }
      setLoading(false);
    };

    fetchComparisons();
  }, []);

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />
      <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Comparativas de <span className="text-primary">Herramientas de IA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Análisis detallados para que elijas la mejor herramienta según tus necesidades
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No hay comparativas disponibles</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  featuredImage={article.featured_image}
                  categoryName={article.category?.name || ""}
                  readingTime={article.reading_time}
                  publishedAt={article.published_at}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default Comparativas;
