import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { ArticleCard } from "@/components/ArticleCard";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Scale, Zap, TrendingUp, ArrowLeftRight } from "lucide-react";

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

  // Featured comparison tools
  const comparisonTools = [
    { name: "Sora 2", color: "from-red-500 to-orange-500", icon: "S2" },
    { name: "Veo 3.1", color: "from-blue-500 to-cyan-500", icon: "V3" },
    { name: "Runway", color: "from-purple-500 to-pink-500", icon: "RW" },
  ];

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />
      <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                <Scale className="w-8 h-8 text-accent" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Comparativas de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Herramientas IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Análisis detallados para elegir la mejor herramienta de generación de video según tus necesidades
            </p>

            {/* Tools showcase */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {comparisonTools.map((tool, index) => (
                <div key={tool.name} className="flex items-center gap-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br",
                    tool.color
                  )}>
                    {tool.icon}
                  </div>
                  {index < comparisonTools.length - 1 && (
                    <ArrowLeftRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <Scale className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{articles.length}</p>
                  <p className="text-sm text-muted-foreground">Comparativas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Herramientas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2025</p>
                  <p className="text-sm text-muted-foreground">Actualizado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Cards */}
        <section className="py-12 border-b border-border bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="text-xl font-semibold text-center mb-8">Comparaciones Rápidas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { vs: "Sora 2 vs Veo 3.1", hot: true },
                { vs: "Runway Gen-3 vs Gen-4", hot: false },
                { vs: "Veo 3 vs Veo 3.1", hot: false },
              ].map((item) => (
                <div
                  key={item.vs}
                  className={cn(
                    "px-6 py-3 rounded-full border cursor-pointer transition-all hover:scale-105",
                    item.hot
                      ? "bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30"
                      : "bg-secondary border-border hover:border-primary/30"
                  )}
                >
                  <span className="font-medium">{item.vs}</span>
                  {item.hot && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                      HOT
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sm font-bold text-accent tracking-[0.2em]">
                TODAS LAS COMPARATIVAS
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-2xl" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-20">
                <div className="p-4 rounded-full bg-secondary w-fit mx-auto mb-6">
                  <Scale className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">No hay comparativas disponibles</h3>
                <p className="text-muted-foreground">Pronto añadiremos nuevas comparativas. ¡Vuelve pronto!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      featuredImage={article.featured_image}
                      categoryName="Comparativa"
                      readingTime={article.reading_time}
                      publishedAt={article.published_at}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Decision Helper CTA */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿No sabes cuál elegir?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Cuéntanos tu proyecto y nuestro asistente te recomendará la mejor herramienta para ti
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Obtener Recomendación
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default Comparativas;