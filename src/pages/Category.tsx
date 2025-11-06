import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Category = () => {
  const { slug } = useParams();
  const [chatOpen, setChatOpen] = useState(false);
  const [category, setCategory] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndArticles = async () => {
      if (!slug) return;

      // Fetch category
      const { data: categoryData, error: categoryError } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (!categoryError && categoryData) {
        setCategory(categoryData);

        // Fetch articles for this category
        const { data: articlesData, error: articlesError } = await supabase
          .from("articles")
          .select(`
            *,
            category:categories(name, slug)
          `)
          .eq("category_id", categoryData.id)
          .order("published_at", { ascending: false });

        if (!articlesError && articlesData) {
          setArticles(articlesData);
        }
      }
      setLoading(false);
    };

    fetchCategoryAndArticles();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header onOpenChat={() => setChatOpen(true)} />
        <main className={cn("pt-32 pb-20 transition-all duration-300", chatOpen && "md:mr-[400px]")}>
          <div className="container mx-auto px-6">
            <div className="animate-pulse">
              <div className="h-12 bg-secondary rounded w-1/3 mb-4" />
              <div className="h-6 bg-secondary rounded w-1/2 mb-16" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="aspect-video bg-secondary rounded-2xl mb-4" />
                    <div className="h-6 bg-secondary rounded w-3/4 mb-2" />
                    <div className="h-4 bg-secondary rounded w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header onOpenChat={() => setChatOpen(true)} />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Categoría no encontrada</h1>
            <Link to="/" className="text-accent hover:underline">
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />

      <main className={cn("pt-32 pb-20 transition-all duration-300", chatOpen && "md:mr-[400px]")}>
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          {/* Category Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
          </div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
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
                    categoryName={article.category?.name || category.name}
                    readingTime={article.reading_time}
                    publishedAt={article.published_at}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Pronto habrá artículos en esta categoría. ¡Mantente atento!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Category;
