import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Share2, ChevronLeft, ChevronRight, Star, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

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
          <div className="mb-12 p-6 rounded-lg bg-accent/10 border-l-4 border-primary">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              TL;DR - Lo Esencial
            </h2>
            <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
          </div>

          {/* Intro de Hatim */}
          <div className="mb-12 flex items-start gap-4 p-6 rounded-lg bg-secondary/10">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold">
              H
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Hey, soy Hatim 👋</p>
              <p className="text-muted-foreground leading-relaxed">
                He pasado semanas probando esto para que no tengas que hacerlo tú. 
                Aquí te cuento todo lo que necesitas saber sin rodeos.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:bg-gradient-to-r prose-h2:from-primary prose-h2:to-accent prose-h2:bg-clip-text prose-h2:text-transparent
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
              prose-p:leading-relaxed prose-p:text-muted-foreground
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
              prose-code:bg-secondary/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-secondary/20 prose-pre:border prose-pre:border-border prose-pre:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Veredicto Final */}
          <div className="my-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 fill-primary text-primary" />
              Veredicto de Hatim
            </h2>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={cn(
                    "w-6 h-6",
                    star <= 4 ? "fill-primary text-primary" : "text-muted-foreground"
                  )} 
                />
              ))}
              <span className="ml-2 text-xl font-bold">8/10</span>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Una herramienta potente que está cambiando las reglas del juego. 
              Tiene sus limitaciones, pero el potencial es innegable.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  Lo Mejor
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Calidad profesional</li>
                  <li>• Fácil de usar</li>
                  <li>• Resultados rápidos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  A Mejorar
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Precio elevado</li>
                  <li>• Límites de uso</li>
                  <li>• Curva de aprendizaje</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="my-12 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1" onClick={() => setChatOpen(true)}>
              Pregunta a Nuestra IA
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
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
