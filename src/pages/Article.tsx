import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Share2, ChevronLeft, ChevronRight, Star, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { RichContent } from "@/components/article/RichContent";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  reading_time: number;
  published_at: string;
  featured_image: string | null;
  category_id: string;
  category: {
    name: string;
    slug: string;
  } | null;
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [chatOpen, setChatOpen] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      setLoading(true);
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          category:categories(name, slug)
        `)
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
        return;
      }

      setArticle(data as Article);

      // Fetch related articles from same category
      if (data.category_id) {
        const { data: related } = await supabase
          .from("articles")
          .select(`
            *,
            category:categories(name, slug)
          `)
          .eq("category_id", data.category_id)
          .neq("id", data.id)
          .limit(3);

        if (related) {
          setRelatedArticles(related as Article[]);
        }
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header onOpenChat={() => setChatOpen(true)} />
        <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
          <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-96 w-full mb-8" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
        <Footer />
        <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header onOpenChat={() => setChatOpen(true)} />
        <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-8">El artículo que buscas no existe.</p>
            <Link to="/articulos">
              <Button>Ver todos los artículos</Button>
            </Link>
          </div>
        </div>
        <Footer />
        <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      </>
    );
  }

  const publishedDate = new Date(article.published_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />
      <div className={cn("min-h-screen bg-background transition-all duration-300", chatOpen ? "mr-96" : "")}>
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
          {article.featured_image && (
            <img
              src={article.featured_image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            {article.category && (
              <Link to={`/categoria/${article.category.slug}`}>
                <Badge className="mb-4 w-fit">{article.category.name}</Badge>
              </Link>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">{article.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.reading_time} min de lectura</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Por {article.author_name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* TL;DR Section */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              TL;DR - Lo Esencial
            </h2>
            <p className="text-lg leading-relaxed">{article.excerpt}</p>
          </div>

          {/* Intro de Hatim */}
          <div className="mb-12 flex items-start gap-6 p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10 border border-border shadow-lg">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white shadow-xl">
              H
            </div>
            <div className="flex-1">
              <p className="text-base font-bold mb-3 text-primary">Hey, soy Hatim 👋</p>
              <p className="text-lg leading-relaxed">
                He pasado semanas probando esto para que no tengas que hacerlo tú. 
                Aquí te cuento todo lo que necesitas saber sin rodeos. Prepárate para 
                descubrir si esto realmente vale la pena.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <RichContent content={article.content} />

          {/* Veredicto Final */}
          <div className="my-16 p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 fill-primary text-primary" />
              Veredicto de Hatim
            </h2>
            <div className="flex items-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={cn(
                    "w-8 h-8 transition-transform hover:scale-110",
                    star <= 4 ? "fill-primary text-primary" : "text-muted-foreground"
                  )} 
                />
              ))}
              <span className="ml-3 text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">8/10</span>
            </div>
            <p className="text-xl leading-relaxed mb-8">
              Una herramienta potente que está cambiando las reglas del juego. 
              Tiene sus limitaciones, pero el potencial es innegable. Si creas contenido 
              regularmente, se paga solo en la primera semana.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                <h3 className="font-bold mb-4 flex items-center gap-3 text-green-600 dark:text-green-400 text-lg">
                  <CheckCircle className="w-6 h-6" />
                  Lo Mejor
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Calidad profesional increíble</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Fácil de usar, sin curva de aprendizaje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Resultados rápidos (5-10 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Precio competitivo vs alternativas</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                <h3 className="font-bold mb-4 flex items-center gap-3 text-red-600 dark:text-red-400 text-lg">
                  <AlertCircle className="w-6 h-6" />
                  A Mejorar
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">×</span>
                    <span>Rostros humanos pueden tener glitches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">×</span>
                    <span>No genera texto legible todavía</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">×</span>
                    <span>Física no siempre es perfecta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">×</span>
                    <span>Requiere suscripción de $20/mes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="my-12 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all" onClick={() => setChatOpen(true)}>
              <Sparkles className="w-5 h-5 mr-2" />
              Pregunta a Nuestra IA
            </Button>
            <Button size="lg" variant="outline" className="flex-1 h-14 text-lg font-semibold border-2 hover:bg-accent/20" asChild>
              <Link to="/articulos">Ver Más Artículos</Link>
            </Button>
          </div>

          {/* Share */}
          <div className="flex items-center justify-between py-6 border-t border-b border-border">
            <span className="font-semibold">Comparte este artículo</span>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>

          {/* Author Box */}
          <div className="my-12 p-6 rounded-lg bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold">
                H
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{article.author_name}</h3>
                <p className="text-muted-foreground">
                  Experto en IA generativa y creador de contenido. Probando herramientas 
                  de IA para que tú no tengas que perder tiempo.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="my-12">
              <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/articulo/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      {related.featured_image && (
                        <img
                          src={related.featured_image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      )}
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/articulos">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Todos los artículos
              </Link>
            </Button>
            <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Volver arriba
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </article>
      </div>
      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default Article;
