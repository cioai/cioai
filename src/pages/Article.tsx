import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  author_name: string;
  reading_time: number;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [chatOpen, setChatOpen] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          category:categories(name, slug)
        `)
        .eq("slug", slug)
        .maybeSingle();

      if (!error && data) {
        setArticle(data as any);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header onOpenChat={() => setChatOpen(true)} />
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-secondary rounded w-3/4 mb-4" />
            <div className="h-4 bg-secondary rounded w-1/2 mb-8" />
            <div className="aspect-video bg-secondary rounded-2xl mb-8" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-secondary rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header onOpenChat={() => setChatOpen(true)} />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/" className="text-accent hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(article.published_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-accent transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                to={`/categoria/${article.category?.slug}`}
                className="hover:text-accent transition-colors"
              >
                {article.category?.name}
              </Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </nav>

            {/* Category Badge */}
            <Badge className="mb-4">{article.category?.name}</Badge>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                  H
                </div>
                <span className="font-medium text-foreground">
                  Escrito por {article.author_name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.reading_time} min lectura</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>

            {/* Featured Image */}
            {article.featured_image && (
              <div className="aspect-video rounded-2xl overflow-hidden mb-12">
                <img
                  src={article.featured_image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-muted-foreground italic">
                  [ESPACIO PARA INTRO PERSONAL - Hatim escribe aquí 2-3 párrafos]
                </p>
              </div>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg my-8">
                <p className="text-muted-foreground italic">
                  [ESPACIO PARA OPINIÓN PERSONAL - Hatim escribe aquí 2 párrafos]
                </p>
              </div>

              <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg my-8">
                <p className="text-muted-foreground italic">
                  [ESPACIO PARA CONCLUSIÓN PERSONAL - Hatim escribe aquí 2 párrafos]
                </p>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-8 bg-secondary rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-2xl flex-shrink-0">
                  H
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{article.author_name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Editor y creador digital especializado en herramientas de IA para
                    generación de contenido. Ayudo a creadores a dominar las últimas
                    tecnologías.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-accent hover:underline text-sm">
                      Instagram
                    </a>
                    <a href="#" className="text-accent hover:underline text-sm">
                      YouTube
                    </a>
                    <a href="#" className="text-accent hover:underline text-sm">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between gap-4">
              <Button variant="outline" className="flex-1 justify-start gap-2">
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Artículo anterior</span>
              </Button>
              <Button variant="outline" className="flex-1 justify-end gap-2">
                <span className="hidden sm:inline">Siguiente artículo</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Article;
