import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { ArticleCard } from "@/components/ArticleCard";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Play, Clock, GraduationCap } from "lucide-react";

const Tutoriales = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorials = async () => {
      const { data: category } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", "tutoriales")
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
          console.error("Error fetching tutorials:", error);
        } else {
          setArticles(data || []);
        }
      }
      setLoading(false);
    };

    fetchTutorials();
  }, []);

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />
      <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Tutoriales de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                IA para Video
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Guías paso a paso para dominar las mejores herramientas de generación de video con inteligencia artificial
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{articles.length}</p>
                  <p className="text-sm text-muted-foreground">Tutoriales</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <Play className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Herramientas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-secondary">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10-15</p>
                  <p className="text-sm text-muted-foreground">Min lectura</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {["Todos", "Sora 2", "Veo 3.1", "Runway"].map((tool) => (
                <button
                  key={tool}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    tool === "Todos"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  )}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
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
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">No hay tutoriales disponibles</h3>
                <p className="text-muted-foreground">Pronto añadiremos nuevos tutoriales. ¡Vuelve pronto!</p>
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
                      categoryName="Tutorial"
                      readingTime={article.reading_time}
                      publishedAt={article.published_at}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Pregunta a nuestro asistente de IA y te ayudará a encontrar el tutorial perfecto para ti
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Hablar con el Asistente
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default Tutoriales;