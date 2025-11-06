import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

const Category = () => {
  const { slug } = useParams();
  const [chatOpen, setChatOpen] = useState(false);

  // Mock data - En producción vendría de la base de datos
  const categories = {
    "sora-2": {
      name: "Sora 2",
      description: "Todo sobre la revolucionaria IA de generación de vídeo de OpenAI",
      articles: [
        {
          id: "1",
          title: "Sora 2 - OpenAI | Todo lo Nuevo en 2025",
          slug: "sora-2-openai-novedades-2025",
          excerpt: "Descubre todas las novedades de Sora 2, la revolucionaria IA de generación de video de OpenAI que está transformando la creación de contenido en 2025.",
          featured_image: "/src/assets/sora-2.jpg",
          category: { name: "Sora 2", slug: "sora-2" },
          reading_time: 8,
          published_at: new Date().toISOString(),
        },
        {
          id: "2",
          title: "¿Cómo acceder gratis a Sora 2?",
          slug: "como-acceder-gratis-sora-2",
          excerpt: "Guía completa para acceder a Sora 2 sin pagar. Descubre las opciones gratuitas, limitaciones y requisitos para usar esta poderosa herramienta de IA.",
          featured_image: "/src/assets/sora-2.jpg",
          category: { name: "Sora 2", slug: "sora-2" },
          reading_time: 6,
          published_at: new Date().toISOString(),
        },
      ],
    },
    "veo-3-1": {
      name: "Veo 3.1",
      description: "Análisis completo de la herramienta de Google DeepMind",
      articles: [
        {
          id: "4",
          title: "Veo 3.1 - Google DeepMind | Guía Completa 2025",
          slug: "veo-3-1-google-deepmind-guia-completa",
          excerpt: "Todo lo que necesitas saber sobre Veo 3.1, la revolucionaria herramienta de generación de vídeo con IA de Google DeepMind.",
          featured_image: "/src/assets/veo-3-1.jpg",
          category: { name: "Veo 3.1", slug: "veo-3-1" },
          reading_time: 7,
          published_at: new Date().toISOString(),
        },
      ],
    },
    comparativas: {
      name: "Comparativas",
      description: "Análisis detallados comparando las mejores herramientas de IA",
      articles: [
        {
          id: "3",
          title: "Sora 2 vs Veo 3.1",
          slug: "sora-2-vs-veo-3-1-comparativa",
          excerpt: "Comparativa exhaustiva entre las dos mejores IAs de generación de video. Descubre cuál se adapta mejor a tus necesidades creativas en 2025.",
          featured_image: "/src/assets/comparison.jpg",
          category: { name: "Comparativas", slug: "comparativas" },
          reading_time: 9,
          published_at: new Date().toISOString(),
        },
      ],
    },
    tutoriales: {
      name: "Tutoriales",
      description: "Guías paso a paso para dominar las herramientas de IA",
      articles: [],
    },
  };

  const category = categories[slug as keyof typeof categories] || categories["sora-2"];

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
          {category.articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.articles.map((article, index) => (
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
                    categoryName={article.category.name}
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
