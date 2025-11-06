import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [chatOpen, setChatOpen] = useState(false);

  // Mock articles data
  const articles: Record<string, any> = {
    "sora-2-openai-novedades-2025": {
      title: "Sora 2 - OpenAI | Todo lo Nuevo en 2025",
      category: { name: "Sora 2", slug: "sora-2" },
      author_name: "Hatim",
      reading_time: 8,
      published_at: "2025-01-15",
      featured_image: "/src/assets/sora-2.jpg",
      content: `
        <h2>¿Qué es Sora 2?</h2>
        <p>Sora 2 es la última versión del revolucionario modelo de IA de OpenAI capaz de generar vídeos realistas a partir de texto. Esta actualización trae mejoras significativas en calidad, duración y control creativo.</p>
        
        <h2>Novedades Principales</h2>
        <h3>1. Mayor Duración de Vídeos</h3>
        <p>Ahora puedes generar vídeos de hasta 60 segundos con una calidad impresionante, el doble que la versión anterior.</p>
        
        <h3>2. Mejor Coherencia Temporal</h3>
        <p>Los objetos y personajes mantienen su consistencia a lo largo de todo el vídeo, eliminando los glitches visuales que aparecían en versiones anteriores.</p>
        
        <h3>3. Control Avanzado de Cámara</h3>
        <p>Especifica movimientos de cámara precisos: zoom, paneo, dolly, y más. Perfecto para creadores que buscan un control cinematográfico total.</p>
        
        <h3>4. Generación de Personajes Consistentes</h3>
        <p>Crea personajes que aparecen en múltiples escenas manteniendo su apariencia exacta.</p>
        
        <h2>¿Cómo Acceder?</h2>
        <p>Actualmente Sora 2 está disponible para usuarios de ChatGPT Plus y Pro. Los usuarios gratuitos pueden acceder a una versión limitada con marca de agua.</p>
        
        <h2>Casos de Uso</h2>
        <ul>
          <li><strong>Marketing y Publicidad:</strong> Crea anuncios personalizados sin necesidad de filmación.</li>
          <li><strong>Contenido para Redes Sociales:</strong> Genera clips virales en minutos.</li>
          <li><strong>Educación:</strong> Explica conceptos complejos con animaciones visuales.</li>
          <li><strong>Entretenimiento:</strong> Prototipa escenas antes de una producción completa.</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>Sora 2 marca un antes y un después en la generación de vídeo con IA. Su capacidad para crear contenido realista y coherente lo convierte en una herramienta esencial para creadores de contenido en 2025.</p>
      `,
    },
    "como-acceder-gratis-sora-2": {
      title: "¿Cómo acceder gratis a Sora 2?",
      category: { name: "Sora 2", slug: "sora-2" },
      author_name: "Hatim",
      reading_time: 6,
      published_at: "2025-01-16",
      featured_image: "/src/assets/sora-2.jpg",
      content: `
        <h2>Opciones Gratuitas de Sora 2</h2>
        <p>Aunque Sora 2 es principalmente un servicio de pago, existen algunas formas de probarlo sin gastar dinero.</p>
        
        <h2>Método 1: Versión Limitada Gratuita</h2>
        <p>OpenAI ofrece acceso limitado gratuito con las siguientes restricciones:</p>
        <ul>
          <li>Vídeos de máximo 5 segundos</li>
          <li>Marca de agua de OpenAI</li>
          <li>Resolución limitada a 720p</li>
          <li>5 generaciones por día</li>
        </ul>
        
        <h2>Método 2: Trial de ChatGPT Plus</h2>
        <p>Aprovecha la prueba gratuita de 7 días de ChatGPT Plus para acceder a Sora 2 sin restricciones.</p>
        
        <h2>Método 3: Programa para Educadores</h2>
        <p>Profesores y estudiantes pueden solicitar acceso gratuito para proyectos educativos.</p>
        
        <h2>Recomendación</h2>
        <p>Si quieres experimentar, empieza con la versión gratuita. Para uso profesional, la suscripción Plus vale totalmente la pena.</p>
      `,
    },
    "sora-2-vs-veo-3-1-comparativa": {
      title: "Sora 2 vs Veo 3.1 - Comparativa Completa 2025",
      category: { name: "Comparativas", slug: "comparativas" },
      author_name: "Hatim",
      reading_time: 9,
      published_at: "2025-01-17",
      featured_image: "/src/assets/comparison.jpg",
      content: `
        <h2>La Batalla de los Gigantes</h2>
        <p>Sora 2 de OpenAI y Veo 3.1 de Google DeepMind son actualmente las mejores herramientas de generación de vídeo con IA. Veamos cuál es la mejor para ti.</p>
        
        <h2>Calidad de Vídeo</h2>
        <h3>Sora 2</h3>
        <p>✅ Realismo cinematográfico excepcional<br>
        ✅ Mejor en movimientos de cámara complejos<br>
        ⚠️ Ocasionalmente genera artefactos en escenas con mucha acción</p>
        
        <h3>Veo 3.1</h3>
        <p>✅ Coherencia temporal superior<br>
        ✅ Mejores texturas y materiales<br>
        ⚠️ Movimientos de cámara menos naturales</p>
        
        <h2>Facilidad de Uso</h2>
        <p><strong>Ganador: Sora 2</strong> - Su interfaz integrada con ChatGPT es mucho más intuitiva que la de Veo 3.1.</p>
        
        <h2>Precio</h2>
        <ul>
          <li><strong>Sora 2:</strong> $20/mes (ChatGPT Plus)</li>
          <li><strong>Veo 3.1:</strong> Gratis en beta, luego $15/mes estimado</li>
        </ul>
        
        <h2>Veredicto Final</h2>
        <p><strong>Para creadores de contenido:</strong> Sora 2<br>
        <strong>Para editores de vídeo:</strong> Veo 3.1<br>
        <strong>Para experimentar:</strong> Ambos valen la pena</p>
      `,
    },
    "veo-3-1-google-deepmind-guia-completa": {
      title: "Veo 3.1 - Google DeepMind | Guía Completa 2025",
      category: { name: "Veo 3.1", slug: "veo-3-1" },
      author_name: "Hatim",
      reading_time: 7,
      published_at: "2025-01-18",
      featured_image: "/src/assets/veo-3-1.jpg",
      content: `
        <h2>Conoce Veo 3.1</h2>
        <p>Veo 3.1 es la respuesta de Google a Sora 2, una herramienta poderosa de generación de vídeo con IA desarrollada por DeepMind.</p>
        
        <h2>Características Destacadas</h2>
        <h3>1. Edición de Vídeo Inteligente</h3>
        <p>A diferencia de Sora 2, Veo 3.1 puede tomar un vídeo existente y modificarlo según tus instrucciones de texto.</p>
        
        <h3>2. Generación de Audio</h3>
        <p>Crea automáticamente efectos de sonido y música de fondo que se sincronizan perfectamente con el vídeo.</p>
        
        <h3>3. Coherencia Temporal Mejorada</h3>
        <p>Los objetos mantienen su apariencia de forma más consistente que cualquier otra herramienta del mercado.</p>
        
        <h2>Cómo Empezar</h2>
        <ol>
          <li>Regístrate en Google AI Studio</li>
          <li>Solicita acceso a Veo 3.1 (actualmente en beta)</li>
          <li>Espera la aprobación (1-3 días)</li>
          <li>¡Empieza a crear!</li>
        </ol>
        
        <h2>Mejores Prácticas</h2>
        <h3>Para Prompts Efectivos:</h3>
        <ul>
          <li>Sé específico con iluminación y hora del día</li>
          <li>Describe movimientos de cámara claramente</li>
          <li>Menciona el estilo visual deseado (realista, animado, etc.)</li>
        </ul>
      `,
    },
  };

  const article = articles[slug as string] || articles["sora-2-openai-novedades-2025"];

  const formattedDate = new Date(article.published_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setChatOpen(true)} />

      <article className={cn("pt-32 pb-20 transition-all duration-300", chatOpen && "md:mr-[400px]")}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-3xl">
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
                  <span className="text-foreground truncate">{article.title}</span>
                </nav>

                {/* Category Badge */}
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  {article.category?.name}
                </Badge>

                {/* Title */}
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                  {article.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b text-muted-foreground">
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
                  <Button variant="ghost" size="sm" className="ml-auto rounded-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartir
                  </Button>
                </div>

                {/* Featured Image */}
                {article.featured_image && (
                  <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    <img
                      src={article.featured_image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="article-content">
                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl mb-8">
                    <p className="text-muted-foreground italic">
                      💭 <strong>[ESPACIO PARA INTRO PERSONAL]</strong> - Hatim escribe aquí 2-3 párrafos introduciendo su experiencia personal con el tema.
                    </p>
                  </div>

                  <div dangerouslySetInnerHTML={{ __html: article.content }} />

                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl my-8">
                    <p className="text-muted-foreground italic">
                      💡 <strong>[ESPACIO PARA OPINIÓN PERSONAL]</strong> - Hatim comparte aquí su opinión y experiencias específicas.
                    </p>
                  </div>

                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl my-8">
                    <p className="text-muted-foreground italic">
                      ✅ <strong>[ESPACIO PARA CONCLUSIÓN PERSONAL]</strong> - Hatim concluye con recomendaciones y siguientes pasos.
                    </p>
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-16 p-8 bg-gradient-to-br from-secondary/50 to-accent/5 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center font-bold text-accent text-3xl flex-shrink-0">
                      H
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">
                        {article.author_name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        Editor y creador digital especializado en herramientas de IA para
                        generación de contenido. Ayudo a creadores a dominar las últimas
                        tecnologías y optimizar su flujo de trabajo.
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          Instagram
                        </a>
                        <span className="text-border">•</span>
                        <a
                          href="#"
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          YouTube
                        </a>
                        <span className="text-border">•</span>
                        <a
                          href="#"
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          TikTok
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-between gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 justify-start gap-2 rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Artículo anterior</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 justify-end gap-2 rounded-full"
                  >
                    <span className="hidden sm:inline">Siguiente artículo</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
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
