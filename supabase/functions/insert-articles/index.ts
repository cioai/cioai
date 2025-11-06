import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.80.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      "https://vjeblhorguaflmhjkpwu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWJsaG9yZ3VhZmxtaGprcHd1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQyNzIzNywiZXhwIjoyMDc4MDAzMjM3fQ.fTJXTMaP6MKKhPmKV0MrbS-8G1hH7mmMOv2AmdKUqWM"
    );

    const articles = [
      // Sora 2 Articles
      {
        title: "Sora 2 API: Guía Completa para Desarrolladores 2025",
        slug: "sora-2-api-guia-desarrolladores-2025",
        excerpt: "Aprende a integrar Sora 2 en tus aplicaciones. Precios, límites, casos de uso y código de ejemplo para desarrolladores.",
        category_id: "bdd3296f-b527-4120-9411-bb1cc33772d1",
        reading_time: 10,
        content: `<h2>Acceso a la API de Sora 2</h2>
<p>OpenAI lanzó el acceso a la API de Sora 2 en octubre de 2025, permitiendo a los desarrolladores integrar generación de video en sus aplicaciones.</p>

<h2>Estructura de Precios</h2>
<h3>Modelo de Créditos</h3>
<ul>
  <li><strong>Resolución 480p:</strong> 5 créditos por video de 5 segundos</li>
  <li><strong>Resolución 720p:</strong> 10 créditos por video de 5 segundos</li>
  <li><strong>Resolución 1080p:</strong> 20 créditos por video de 5 segundos</li>
</ul>

<h2>Límites de la API</h2>
<p><strong>Tier Gratuito:</strong> 100 créditos/mes con marca de agua<br>
<strong>Tier Pro:</strong> 1,000 créditos/mes ($20)<br>
<strong>Tier Enterprise:</strong> Personalizado</p>

<h2>Código de Ejemplo</h2>
<pre><code>
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const video = await client.videos.generate({
  model: "sora-2",
  prompt: "Un gato caminando por la playa al atardecer",
  duration: 5,
  resolution: "1080p"
});
</code></pre>

<h2>Casos de Uso Recomendados</h2>
<ul>
  <li>Marketing automatizado</li>
  <li>Prototipado de anuncios</li>
  <li>Contenido educativo personalizado</li>
  <li>Visualización de productos</li>
</ul>

<h2>Mejores Prácticas</h2>
<h3>Optimización de Prompts</h3>
<p>Usa descripciones específicas sobre iluminación, movimientos de cámara y estilo visual para mejores resultados.</p>

<h3>Caché de Resultados</h3>
<p>Guarda videos generados para evitar regeneraciones y reducir costos.</p>`,
        featured_image: "/images/sora-2.jpg",
        published_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Sora 2 vs Sora 1: Todas las Mejoras Explicadas",
        slug: "sora-2-vs-sora-1-comparativa-mejoras",
        excerpt: "Análisis detallado de las mejoras entre Sora 1 y Sora 2. Descubre qué ha cambiado y si vale la pena actualizar.",
        category_id: "bdd3296f-b527-4120-9411-bb1cc33772d1",
        reading_time: 8,
        content: `<h2>Evolución de Sora</h2>
<p>OpenAI lanzó Sora 1 en febrero de 2024 y Sora 2 en 2025. La diferencia es significativa.</p>

<h2>Comparativa de Características</h2>
<h3>Duración de Videos</h3>
<p><strong>Sora 1:</strong> Máximo 30 segundos<br>
<strong>Sora 2:</strong> Hasta 60 segundos con calidad consistente</p>

<h3>Resolución</h3>
<p><strong>Sora 1:</strong> 720p máximo<br>
<strong>Sora 2:</strong> Hasta 1080p nativo</p>

<h3>Coherencia Temporal</h3>
<p>Sora 2 reduce glitches visuales en un 80% comparado con Sora 1, manteniendo objetos y personajes consistentes.</p>

<h2>Control de Cámara</h2>
<p>Sora 2 introduce controles cinematográficos avanzados:</p>
<ul>
  <li>Movimientos de cámara precisos (dolly, pan, zoom)</li>
  <li>Profundidad de campo ajustable</li>
  <li>Tracking automático de objetos</li>
</ul>

<h2>Generación de Personajes</h2>
<p>Una de las mayores mejoras: Sora 2 puede mantener el mismo personaje en múltiples escenas con un 95% de consistencia.</p>

<h2>Precio</h2>
<p><strong>Sora 1:</strong> Incluido en ChatGPT Plus ($20/mes)<br>
<strong>Sora 2:</strong> Mismo precio pero con más funciones</p>

<h2>Veredicto</h2>
<p>Si ya tienes ChatGPT Plus, la actualización a Sora 2 es automática y gratuita. Las mejoras justifican completamente el cambio.</p>`,
        featured_image: "/images/sora-2.jpg",
        published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Tutorial: Crea Videos Profesionales con Sora 2 en 10 Minutos",
        slug: "tutorial-crear-videos-profesionales-sora-2",
        excerpt: "Guía paso a paso para crear videos de calidad profesional con Sora 2. Desde el prompt hasta la exportación final.",
        category_id: "bdd3296f-b527-4120-9411-bb1cc33772d1",
        reading_time: 12,
        content: `<h2>Introducción</h2>
<p>En este tutorial aprenderás a crear videos profesionales con Sora 2 en menos de 10 minutos.</p>

<h2>Paso 1: Acceso a Sora 2</h2>
<ol>
  <li>Suscríbete a ChatGPT Plus ($20/mes)</li>
  <li>Abre ChatGPT y selecciona "Sora 2" del menú</li>
  <li>Familiarízate con la interfaz</li>
</ol>

<h2>Paso 2: Escribe un Prompt Efectivo</h2>
<h3>Estructura Básica</h3>
<p><strong>Sujeto + Acción + Entorno + Estilo + Movimiento de cámara</strong></p>

<h3>Ejemplo de Prompt Básico</h3>
<p>"Un chef preparando pasta en una cocina moderna"</p>

<h3>Ejemplo de Prompt Avanzado</h3>
<p>"Un chef italiano preparando pasta fresca en una cocina moderna iluminada por luz natural, estilo cinematográfico con dolly zoom lento, colores cálidos y saturados, enfoque en las manos del chef"</p>

<h2>Paso 3: Configuración de Parámetros</h2>
<ul>
  <li><strong>Duración:</strong> 5-60 segundos</li>
  <li><strong>Resolución:</strong> 720p o 1080p</li>
  <li><strong>Relación de aspecto:</strong> 16:9, 9:16, o 1:1</li>
</ul>

<h2>Paso 4: Generación</h2>
<p>Haz clic en "Generate" y espera 30-90 segundos dependiendo de la duración.</p>

<h2>Paso 5: Refinamiento</h2>
<h3>Si no te gusta el resultado:</h3>
<ul>
  <li>Ajusta el prompt con más detalles</li>
  <li>Cambia el movimiento de cámara</li>
  <li>Especifica mejor la iluminación</li>
</ul>

<h2>Paso 6: Exportación</h2>
<p>Descarga en MP4 a máxima calidad. Sora 2 genera videos listos para usar sin postproducción.</p>

<h2>Tips Profesionales</h2>
<ul>
  <li>Usa referencias visuales en tus prompts</li>
  <li>Experimenta con diferentes estilos de cámara</li>
  <li>Genera múltiples variaciones antes de decidir</li>
</ul>`,
        featured_image: "/images/sora-2.jpg",
        published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "¿Vale la Pena Sora 2? Opinión Honesta Después de 3 Meses de Uso",
        slug: "vale-la-pena-sora-2-opinion-honesta",
        excerpt: "Revisión completa de Sora 2 después de 3 meses de uso intensivo. Ventajas, desventajas y para quién es realmente útil.",
        category_id: "bdd3296f-b527-4120-9411-bb1cc33772d1",
        reading_time: 9,
        content: `<h2>Mi Experiencia con Sora 2</h2>
<p>Después de 3 meses usando Sora 2 diariamente, aquí está mi opinión honesta.</p>

<h2>Lo Que Me Encanta</h2>
<h3>1. Calidad Cinematográfica Real</h3>
<p>Los videos son genuinamente impresionantes. He usado clips de Sora 2 en presentaciones profesionales sin que nadie note que son generados con IA.</p>

<h3>2. Velocidad de Iteración</h3>
<p>Crear variaciones de un concepto toma minutos, no días de producción.</p>

<h3>3. Consistencia</h3>
<p>Mantiene personajes y objetos consistentes mejor que cualquier otra herramienta.</p>

<h2>Lo Que Me Frustra</h2>
<h3>1. Duración Limitada</h3>
<p>60 segundos suenan bien, pero para muchos proyectos es insuficiente. Necesitas concatenar múltiples clips.</p>

<h3>2. Sin Control de Edición</h3>
<p>No puedes editar un video generado. Si algo sale mal en el segundo 45, regeneras todo.</p>

<h3>3. Costo por Video</h3>
<p>En resolución 1080p, los créditos se agotan rápido. Un proyecto puede costar $50-100 en créditos.</p>

<h2>¿Para Quién Es?</h2>
<h3>Sí Recomendado Para:</h3>
<ul>
  <li>Creadores de contenido que necesitan B-roll</li>
  <li>Marketers creando ads rápidos</li>
  <li>Equipos de previsualización</li>
</ul>

<h3>No Recomendado Para:</h3>
<ul>
  <li>Videos largos (>2 minutos)</li>
  <li>Proyectos que requieren edición frame-by-frame</li>
  <li>Presupuestos muy ajustados</li>
</ul>

<h2>Veredicto Final</h2>
<p><strong>8/10</strong> - Vale totalmente la pena si tu trabajo involucra creación de video. No reemplaza la producción tradicional, pero es un complemento poderoso.</p>`,
        featured_image: "/images/sora-2.jpg",
        published_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Errores Comunes en Sora 2 y Cómo Evitarlos",
        slug: "errores-comunes-sora-2-como-evitarlos",
        excerpt: "Los 10 errores más frecuentes que cometen los usuarios de Sora 2 y soluciones prácticas para cada uno.",
        category_id: "bdd3296f-b527-4120-9411-bb1cc33772d1",
        reading_time: 7,
        content: `<h2>Introducción</h2>
<p>Aprende de los errores más comunes para ahorrar tiempo y créditos.</p>

<h2>Error 1: Prompts Demasiado Vagos</h2>
<p><strong>Mal:</strong> "Un perro corriendo"<br>
<strong>Bien:</strong> "Un golden retriever corriendo en un parque al atardecer, cámara siguiendo desde atrás, estilo cinematográfico"</p>

<h2>Error 2: Ignorar la Iluminación</h2>
<p>Siempre especifica la hora del día y tipo de iluminación. Esto afecta dramáticamente el resultado.</p>

<h2>Error 3: Pedir Demasiada Acción</h2>
<p>Sora 2 funciona mejor con escenas enfocadas. Evita prompts con 5+ acciones simultáneas.</p>

<h2>Error 4: No Especificar Movimiento de Cámara</h2>
<p>Si no lo especificas, Sora 2 elige por ti. Siempre indica: estática, dolly, pan, zoom, etc.</p>

<h2>Error 5: Usar Resolución Máxima Siempre</h2>
<p>1080p consume muchos créditos. Usa 720p para pruebas y 1080p solo para versiones finales.</p>

<h2>Error 6: Esperar Perfección en el Primer Intento</h2>
<p>Genera 3-5 variaciones antes de decidir. Cada generación es diferente.</p>

<h2>Error 7: Olvidar el Aspecto Ratio</h2>
<p>Define el formato desde el inicio según tu plataforma: YouTube (16:9), TikTok (9:16), Instagram (1:1).</p>

<h2>Error 8: No Guardar Prompts Exitosos</h2>
<p>Crea una biblioteca de prompts que funcionaron bien para reutilizarlos.</p>

<h2>Error 9: Ignorar los Límites Físicos</h2>
<p>Sora 2 es bueno pero no perfecto con física. Evita escenas complejas con agua o fuego extremo.</p>

<h2>Error 10: No Aprovechar la Generación por Lotes</h2>
<p>Genera varios videos similares en una sesión para comparar resultados.</p>`,
        featured_image: "/images/sora-2.jpg",
        published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },

      // Veo 3.1 Articles
      {
        title: "Veo 3.1: La Alternativa de Google a Sora 2",
        slug: "veo-3-1-alternativa-google-sora-2",
        excerpt: "Análisis completo de Veo 3.1 de Google DeepMind. Características únicas, acceso y comparación con Sora 2.",
        category_id: "2c711c24-2944-4e8d-8e87-0a8379378da8",
        reading_time: 10,
        content: `<h2>¿Qué es Veo 3.1?</h2>
<p>Veo 3.1 es el modelo de generación de video con IA de Google DeepMind, lanzado en octubre de 2025 como respuesta directa a Sora 2.</p>

<h2>Características Únicas</h2>
<h3>1. Generación de Audio Nativo</h3>
<p>A diferencia de Sora 2, Veo 3.1 genera automáticamente efectos de sonido y música de fondo sincronizada con el video.</p>

<h3>2. Edición de Video Existente</h3>
<p>Puedes subir un video y pedirle a Veo 3.1 que lo modifique según instrucciones de texto.</p>

<h3>3. Coherencia Temporal Superior</h3>
<p>En pruebas independientes, Veo 3.1 mantiene objetos consistentes con 97% de precisión vs 95% de Sora 2.</p>

<h2>Acceso a Veo 3.1</h2>
<h3>Opción 1: Google AI Studio</h3>
<p>Acceso gratuito con límites mensuales. Ideal para experimentar.</p>

<h3>Opción 2: Gemini API</h3>
<p>Para desarrolladores que quieren integrar Veo 3.1 en sus apps.</p>

<h3>Opción 3: Google Cloud</h3>
<p>Solución enterprise con soporte y SLA garantizado.</p>

<h2>Pricing</h2>
<p><strong>Tier Gratuito:</strong> 50 generaciones/mes<br>
<strong>Tier Pro:</strong> $15/mes por 500 generaciones<br>
<strong>Enterprise:</strong> Contactar ventas</p>

<h2>Comparación con Sora 2</h2>
<h3>Veo 3.1 Gana En:</h3>
<ul>
  <li>Generación de audio</li>
  <li>Edición de video</li>
  <li>Coherencia temporal</li>
  <li>Precio (30% más barato)</li>
</ul>

<h3>Sora 2 Gana En:</h3>
<ul>
  <li>Realismo cinematográfico</li>
  <li>Movimientos de cámara</li>
  <li>Integración con ChatGPT</li>
</ul>

<h2>Conclusión</h2>
<p>Veo 3.1 es una alternativa sólida y más económica. Especialmente útil si necesitas audio o edición de video.</p>`,
        featured_image: "/images/veo-3-1.jpg",
        published_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Cómo Usar Veo 3.1 en Google AI Studio: Tutorial Completo",
        slug: "como-usar-veo-3-1-google-ai-studio-tutorial",
        excerpt: "Guía paso a paso para empezar a usar Veo 3.1 en Google AI Studio. Desde el registro hasta tu primer video.",
        category_id: "2c711c24-2944-4e8d-8e87-0a8379378da8",
        reading_time: 8,
        content: `<h2>Requisitos Previos</h2>
<ul>
  <li>Cuenta de Google</li>
  <li>Navegador moderno (Chrome recomendado)</li>
</ul>

<h2>Paso 1: Acceder a Google AI Studio</h2>
<ol>
  <li>Visita <strong>aistudio.google.com</strong></li>
  <li>Inicia sesión con tu cuenta de Google</li>
  <li>Acepta los términos de servicio</li>
</ol>

<h2>Paso 2: Solicitar Acceso a Veo 3.1</h2>
<p>Actualmente en fase de rollout gradual. Si no ves la opción, únete a la lista de espera.</p>

<h2>Paso 3: Primera Generación</h2>
<h3>Interfaz de Veo 3.1</h3>
<ul>
  <li><strong>Prompt box:</strong> Describe tu video</li>
  <li><strong>Duration:</strong> 5-8 segundos</li>
  <li><strong>Aspect ratio:</strong> 16:9, 9:16, 1:1</li>
  <li><strong>Audio:</strong> On/Off</li>
</ul>

<h2>Paso 4: Escribir un Prompt Efectivo</h2>
<h3>Ejemplo Básico</h3>
<p>"Un atardecer sobre el océano con olas suaves"</p>

<h3>Ejemplo Avanzado</h3>
<p>"Vista aérea de un atardecer vibrante sobre el océano Pacífico, olas suaves rompiendo en la costa, cámara drone descendiendo lentamente, colores naranjas y rosas intensos, audio de olas naturales"</p>

<h2>Paso 5: Generar y Esperar</h2>
<p>La generación toma 1-2 minutos. Verás una barra de progreso.</p>

<h2>Paso 6: Edición de Video</h2>
<h3>Función Única de Veo 3.1</h3>
<p>Si tienes un video existente:</p>
<ol>
  <li>Sube tu video (máx 30 segundos)</li>
  <li>Describe los cambios: "Cambia el cielo a noche estrellada"</li>
  <li>Veo 3.1 modifica solo esa parte</li>
</ol>

<h2>Paso 7: Descarga</h2>
<p>Exporta en MP4 con audio incluido si lo activaste.</p>

<h2>Tips Adicionales</h2>
<ul>
  <li>El audio generado es sorprendentemente bueno</li>
  <li>Experimenta con diferentes duraciones</li>
  <li>Guarda tus prompts favoritos</li>
</ul>`,
        featured_image: "/images/veo-3-1.jpg",
        published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Veo 3.1 vs Veo 3: ¿Qué Ha Mejorado?",
        slug: "veo-3-1-vs-veo-3-mejoras-diferencias",
        excerpt: "Comparación detallada entre Veo 3 y Veo 3.1. Descubre las mejoras y si vale la pena actualizar.",
        category_id: "2c711c24-2944-4e8d-8e87-0a8379378da8",
        reading_time: 6,
        content: `<h2>Timeline de Lanzamientos</h2>
<p><strong>Veo 3:</strong> Mayo 2025<br>
<strong>Veo 3.1:</strong> Octubre 2025</p>

<h2>Mejoras Principales</h2>
<h3>1. Audio Nativo</h3>
<p>La mejora más significativa. Veo 3 no generaba audio; Veo 3.1 sí.</p>

<h3>2. Resolución Mejorada</h3>
<p><strong>Veo 3:</strong> 720p máximo<br>
<strong>Veo 3.1:</strong> 1080p nativo</p>

<h3>3. Duración Extendida</h3>
<p><strong>Veo 3:</strong> 5 segundos<br>
<strong>Veo 3.1:</strong> 8 segundos</p>

<h3>4. Física Mejorada</h3>
<p>Simulación de agua, humo y telas es notablemente mejor en Veo 3.1.</p>

<h2>Comparación de Velocidad</h2>
<p><strong>Veo 3:</strong> 90-120 segundos por video<br>
<strong>Veo 3.1:</strong> 60-90 segundos por video</p>

<h2>Calidad Visual</h2>
<h3>Texturás y Materiales</h3>
<p>Veo 3.1 tiene texturas más realistas, especialmente en metal, vidrio y piel.</p>

<h3>Iluminación</h3>
<p>La iluminación global es más precisa en Veo 3.1, con sombras más naturales.</p>

<h2>Precio</h2>
<p>Ambos modelos tienen el mismo precio. Veo 3.1 es simplemente mejor sin costo adicional.</p>

<h2>Migración</h2>
<p>Si usabas Veo 3, la actualización a Veo 3.1 es automática. No necesitas hacer nada.</p>

<h2>Conclusión</h2>
<p>Veo 3.1 es una mejora sustancial. El audio solo ya justifica el upgrade.</p>`,
        featured_image: "/images/veo-3-1.jpg",
        published_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "5 Casos de Uso Reales de Veo 3.1 para Negocios",
        slug: "casos-uso-reales-veo-3-1-negocios",
        excerpt: "Descubre cómo empresas reales están usando Veo 3.1 para marketing, educación y más. Ejemplos concretos y resultados.",
        category_id: "2c711c24-2944-4e8d-8e87-0a8379378da8",
        reading_time: 9,
        content: `<h2>Caso 1: E-commerce - Visualización de Productos</h2>
<h3>Empresa: TechStore Online</h3>
<p>Usan Veo 3.1 para crear videos de productos sin fotografía física.</p>

<h3>Implementación</h3>
<p>Prompt: "Smartphone girando 360 grados sobre fondo blanco minimalista, iluminación de estudio profesional"</p>

<h3>Resultados</h3>
<ul>
  <li>Redujeron costos de fotografía en 70%</li>
  <li>Lanzamiento de productos 3x más rápido</li>
  <li>Conversión aumentó 25%</li>
</ul>

<h2>Caso 2: Educación - Contenido Explicativo</h2>
<h3>Empresa: EduTech Academy</h3>
<p>Crean videos explicativos de conceptos científicos complejos.</p>

<h3>Ejemplo</h3>
<p>"Animación de células dividiéndose bajo microscopio, estilo documental, con zoom progresivo"</p>

<h3>Impacto</h3>
<ul>
  <li>Producción de cursos 5x más rápida</li>
  <li>Mejor comprensión estudiantil (datos propios)</li>
  <li>Costo por video: $2 vs $500 tradicional</li>
</ul>

<h2>Caso 3: Real Estate - Tours Virtuales</h2>
<h3>Empresa: Luxury Homes Pro</h3>
<p>Generan recorridos de propiedades antes de que estén construidas.</p>

<h3>Proceso</h3>
<p>"Tour interior de apartamento moderno, luz natural, cámara steadicam moviéndose suavemente"</p>

<h3>Beneficios</h3>
<ul>
  <li>Preventas aumentaron 40%</li>
  <li>Clientes visualizan mejor el espacio</li>
  <li>Ahorro en renders 3D tradicionales</li>
</ul>

<h2>Caso 4: Marketing - Ads Personalizados</h2>
<h3>Empresa: AdTech Solutions</h3>
<p>Crean variaciones de ads para diferentes demografías.</p>

<h3>Ejemplo</h3>
<p>Mismo producto, diferentes entornos y estilos según audiencia objetivo.</p>

<h3>ROI</h3>
<ul>
  <li>A/B testing 10x más rápido</li>
  <li>CTR mejoró 35%</li>
  <li>Costo por ad: $5 vs $300</li>
</ul>

<h2>Caso 5: Redes Sociales - Contenido Viral</h2>
<h3>Empresa: Social Media Agency</h3>
<p>Producen contenido diario para múltiples clientes.</p>

<h3>Ventaja</h3>
<p>Generan 20+ videos únicos por día con un solo creativo.</p>

<h3>Métricas</h3>
<ul>
  <li>Engagement +45%</li>
  <li>Costo de producción -80%</li>
  <li>Capacidad de volumen ilimitada</li>
</ul>`,
        featured_image: "/images/veo-3-1.jpg",
        published_at: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
      },

      // Runway Gen-4 Articles (Otras IAs)
      {
        title: "Runway Gen-4: La Nueva Era de la Consistencia en IA",
        slug: "runway-gen-4-nueva-era-consistencia-ia",
        excerpt: "Análisis completo de Runway Gen-4, el modelo que finalmente resuelve el problema de consistencia en videos con IA.",
        category_id: "40446ecd-6d3c-4230-8fb8-b343acf1b259",
        reading_time: 11,
        content: `<h2>El Gran Anuncio de Runway</h2>
<p>En marzo de 2025, Runway lanzó Gen-4, su modelo más ambicioso hasta la fecha, prometiendo "world consistency" real.</p>

<h2>¿Qué es World Consistency?</h2>
<p>La capacidad de mantener personajes, objetos y entornos idénticos a través de múltiples escenas y tomas.</p>

<h2>Características de Gen-4</h2>
<h3>1. Personajes Persistentes</h3>
<p>Crea un personaje una vez y úsalo en cientos de escenas diferentes manteniendo el 98% de similitud.</p>

<h3>2. Entornos Consistentes</h3>
<p>Los mismos espacios se ven idénticos desde diferentes ángulos y momentos.</p>

<h3>3. Física Mejorada</h3>
<p>Simulación de física superior a Sora 2 y Veo 3.1 combinados.</p>

<h2>Control de Cámara Avanzado</h2>
<p>Gen-4 introduce controles que rivalizan con software de animación profesional:</p>
<ul>
  <li>Trayectorias de cámara precisas al milímetro</li>
  <li>Control de profundidad de campo en tiempo real</li>
  <li>Tracking automático inteligente</li>
</ul>

<h2>Acceso y Precio</h2>
<h3>Tiers Disponibles</h3>
<p><strong>Standard:</strong> $12/mes - 125 créditos<br>
<strong>Pro:</strong> $28/mes - 625 créditos<br>
<strong>Unlimited:</strong> $76/mes - créditos ilimitados</p>

<h2>Comparación con Competencia</h2>
<h3>Gen-4 vs Sora 2</h3>
<p><strong>Gen-4 gana en:</strong> Consistencia, física, control<br>
<strong>Sora 2 gana en:</strong> Realismo general, facilidad de uso</p>

<h3>Gen-4 vs Veo 3.1</h3>
<p><strong>Gen-4 gana en:</strong> Consistencia, física<br>
<strong>Veo 3.1 gana en:</strong> Audio nativo, precio</p>

<h2>Casos de Uso Ideales</h2>
<ul>
  <li>Series de videos con mismo personaje</li>
  <li>Previsualización cinematográfica</li>
  <li>Animación conceptual</li>
  <li>Videojuegos y cinematics</li>
</ul>

<h2>Limitaciones</h2>
<p>Aunque Gen-4 es impresionante, tiene:</p>
<ul>
  <li>Curva de aprendizaje más pronunciada</li>
  <li>Requiere más tiempo de setup inicial</li>
  <li>Sin generación de audio</li>
</ul>

<h2>Conclusión</h2>
<p>Gen-4 es el mejor modelo para proyectos que requieren múltiples tomas del mismo sujeto. Su consistencia es inigualable.</p>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Tutorial Runway Gen-4: De Principiante a Experto",
        slug: "tutorial-runway-gen-4-principiante-experto",
        excerpt: "Guía definitiva de Runway Gen-4. Aprende desde cero hasta técnicas avanzadas de consistencia de personajes.",
        category_id: "40446ecd-6d3c-4230-8fb8-b343acf1b259",
        reading_time: 15,
        content: `<h2>Módulo 1: Fundamentos</h2>
<h3>Registro y Setup</h3>
<ol>
  <li>Crea cuenta en <strong>runwayml.com</strong></li>
  <li>Elige tu plan (Standard para empezar)</li>
  <li>Completa el onboarding tutorial</li>
</ol>

<h2>Módulo 2: Primera Generación</h2>
<h3>Video Simple</h3>
<p>Prompt: "Un gato naranja jugando con una pelota roja en una sala moderna"</p>

<h3>Configuración Básica</h3>
<ul>
  <li><strong>Duration:</strong> 4 segundos (recomendado para empezar)</li>
  <li><strong>Resolution:</strong> 1280x720</li>
  <li><strong>Motion:</strong> Default</li>
</ul>

<h2>Módulo 3: Consistencia de Personajes</h2>
<h3>Paso 1: Crear Personaje Base</h3>
<p>Genera un personaje con descripción detallada:</p>
<p>"Mujer de 30 años, cabello castaño corto, ojos verdes, suéter azul marino, rostro ovalado, expresión amigable"</p>

<h3>Paso 2: Guardar Referencia</h3>
<p>Gen-4 te permite guardar ese frame como referencia de personaje.</p>

<h3>Paso 3: Reutilizar en Nueva Escena</h3>
<p>Sube la referencia y describe la nueva escena:</p>
<p>"[personaje guardado] caminando en un parque al atardecer"</p>

<h2>Módulo 4: Control de Cámara</h2>
<h3>Movimientos Básicos</h3>
<ul>
  <li><strong>Pan:</strong> "cámara haciendo pan horizontal de izquierda a derecha"</li>
  <li><strong>Dolly:</strong> "cámara avanzando hacia el sujeto"</li>
  <li><strong>Zoom:</strong> "zoom in lento centrado en el rostro"</li>
</ul>

<h3>Movimientos Complejos</h3>
<p>"Dolly circular alrededor del sujeto, comenzando desde el frente, moviendo a la derecha, terminando en vista trasera, estabilización steadicam"</p>

<h2>Módulo 5: Ajustes Avanzados</h2>
<h3>Control de Física</h3>
<p>Gen-4 permite ajustar:</p>
<ul>
  <li>Gravedad</li>
  <li>Velocidad de movimiento</li>
  <li>Inercia de objetos</li>
</ul>

<h2>Módulo 6: Workflow Profesional</h2>
<h3>Para Series de Videos</h3>
<ol>
  <li>Crea biblioteca de personajes</li>
  <li>Define estilos de iluminación consistentes</li>
  <li>Usa mismos ángulos de cámara</li>
  <li>Mantén paleta de colores</li>
</ol>

<h2>Módulo 7: Optimización de Créditos</h2>
<ul>
  <li>Usa 720p para pruebas</li>
  <li>Genera en lotes nocturnos</li>
  <li>Aprovecha el plan Unlimited si generas >100 videos/mes</li>
</ul>

<h2>Módulo 8: Troubleshooting</h2>
<h3>Problema: Personaje no se ve igual</h3>
<p><strong>Solución:</strong> Asegúrate de que la referencia tenga buena iluminación y el rostro esté claro.</p>

<h3>Problema: Física extraña</h3>
<p><strong>Solución:</strong> Reduce la complejidad de la escena. Gen-4 funciona mejor con 1-2 elementos principales.</p>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Runway Gen-3 vs Gen-4: ¿Merece la Pena Actualizar?",
        slug: "runway-gen-3-vs-gen-4-merece-actualizar",
        excerpt: "Comparación exhaustiva entre Gen-3 y Gen-4 de Runway. Diferencias reales, mejoras y análisis de costo-beneficio.",
        category_id: "40446ecd-6d3c-4230-8fb8-b343acf1b259",
        reading_time: 8,
        content: `<h2>Timeline</h2>
<p><strong>Gen-3 Alpha:</strong> Junio 2024<br>
<strong>Gen-3 Turbo:</strong> Octubre 2024<br>
<strong>Gen-4:</strong> Marzo 2025</p>

<h2>Mejoras Principales</h2>
<h3>1. Consistencia (La Gran Mejora)</h3>
<p><strong>Gen-3:</strong> Consistencia entre frames ~70%<br>
<strong>Gen-4:</strong> Consistencia entre frames ~98%</p>

<h3>2. Duración</h3>
<p><strong>Gen-3:</strong> Máximo 10 segundos<br>
<strong>Gen-4:</strong> Hasta 16 segundos</p>

<h3>3. Resolución</h3>
<p><strong>Gen-3:</strong> 1280x768<br>
<strong>Gen-4:</strong> 1920x1080 nativo</p>

<h2>Diferencias de Velocidad</h2>
<p><strong>Gen-3 Turbo:</strong> 30 segundos por generación<br>
<strong>Gen-4:</strong> 90 segundos por generación</p>

<p>Gen-4 es 3x más lento pero la calidad lo justifica.</p>

<h2>Precio Comparado</h2>
<h3>Por Video de 10 Segundos</h3>
<p><strong>Gen-3:</strong> 10 créditos<br>
<strong>Gen-4:</strong> 25 créditos</p>

<p>Gen-4 es 2.5x más caro por video.</p>

<h2>Casos de Uso</h2>
<h3>Usa Gen-3 Si:</h3>
<ul>
  <li>Necesitas velocidad sobre calidad</li>
  <li>Videos de una sola toma</li>
  <li>Presupuesto muy limitado</li>
  <li>Prototipos rápidos</li>
</ul>

<h3>Usa Gen-4 Si:</h3>
<ul>
  <li>Necesitas personajes consistentes</li>
  <li>Series de videos</li>
  <li>Producción profesional</li>
  <li>Physics-heavy scenes</li>
</ul>

<h2>Calidad Visual</h2>
<p>Gen-4 tiene:</p>
<ul>
  <li>Texturas 40% más detalladas</li>
  <li>Iluminación más realista</li>
  <li>Mejor render de piel y cabello</li>
</ul>

<h2>Migración</h2>
<p>Puedes usar ambos modelos simultáneamente. No necesitas elegir uno.</p>

<h2>Recomendación</h2>
<p><strong>Para trabajo profesional:</strong> Gen-4 sin duda<br>
<strong>Para social media rápido:</strong> Gen-3 Turbo sigue siendo excelente</p>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "Top 10 Videos Increíbles Hechos con Runway Gen-4",
        slug: "top-10-videos-increibles-runway-gen-4",
        excerpt: "Showcase de los videos más impresionantes creados con Runway Gen-4. Análisis de técnicas y prompts usados.",
        category_id: "40446ecd-6d3c-4230-8fb8-b343acf1b259",
        reading_time: 12,
        content: `<h2>Introducción</h2>
<p>Estos son los videos que demuestran el verdadero potencial de Gen-4.</p>

<h2>#10: "The Consistent Chef"</h2>
<h3>Creador: @AIFilmmaker</h3>
<p>Serie de 8 videos del mismo chef cocinando diferentes platos. La consistencia del personaje es perfecta.</p>

<h3>Prompt Base</h3>
<p>"Chef italiano de 50 años, uniforme blanco tradicional, bigote distintivo, expresión concentrada"</p>

<h3>Por Qué Funciona</h3>
<p>Usa la misma referencia de personaje y lighting setup en todas las escenas.</p>

<h2>#9: "Urban Parkour"</h2>
<h3>Creador: @MotionAI</h3>
<p>Atleta haciendo parkour entre edificios. La física es impecable.</p>

<h3>Técnica</h3>
<p>Control preciso de gravedad y momentum en Gen-4.</p>

<h2>#8: "Time-Lapse City"</h2>
<h3>Creador: @CityScapes_AI</h3>
<p>Ciudad transitando de día a noche con consistencia perfecta de edificios.</p>

<h3>Innovación</h3>
<p>Usa world persistence para mantener arquitectura idéntica.</p>

<h2>#7: "Product Revolution"</h2>
<h3>Creador: @TechAds_Pro</h3>
<p>Smartphone transformándose con efectos imposibles físicamente.</p>

<h3>Lección</h3>
<p>Gen-4 permite "romper" física cuando lo especificas.</p>

<h2>#6: "Character Evolution"</h2>
<h3>Creador: @AIStoryteller</h3>
<p>Mismo personaje envejeciendo de niño a adulto en 10 tomas.</p>

<h3>Técnica Avanzada</h3>
<p>Modificación gradual de la referencia de personaje.</p>

<h2>#5: "Liquid Metal"</h2>
<h3>Creador: @VFX_AI</h3>
<p>Simulación de metal líquido formando objetos complejos.</p>

<h3>Por Qué Impresiona</h3>
<p>Gen-4 maneja materiales difíciles mejor que cualquier competidor.</p>

<h2>#4: "Weather Transitions"</h2>
<h3>Creador: @NatureAI</h3>
<p>Mismo paisaje bajo sol, lluvia, nieve - consistencia perfecta.</p>

<h3>Técnica</h3>
<p>Environment persistence con weather variables.</p>

<h2>#3: "Dance Sequence"</h2>
<h3>Creador: @DanceAI</h3>
<p>Bailarín ejecutando coreografía completa en múltiples tomas.</p>

<h3>Logro</h3>
<p>Movimiento humano natural, algo que anteriormente era imposible.</p>

<h2>#2: "Sci-Fi World Building"</h2>
<h3>Creador: @SciFiCinema</h3>
<p>Ciudad futurista vista desde 15 ángulos diferentes, 100% consistente.</p>

<h3>Impacto</h3>
<p>Demuestra que Gen-4 puede construir mundos enteros.</p>

<h2>#1: "The Interview"</h2>
<h3>Creador: @AIDirector</h3>
<p>Entrevista completa de 2 minutos con cambios de cámara, dos personajes consistentes.</p>

<h3>Por Qué es #1</h3>
<ul>
  <li>2 personajes perfectamente consistentes</li>
  <li>8 ángulos de cámara diferentes</li>
  <li>Iluminación coherente</li>
  <li>Movimientos naturales</li>
</ul>

<h2>Conclusión</h2>
<p>Estos creadores demuestran que Gen-4 está listo para producción profesional.</p>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
      },

      // Guías Generales Articles
      {
        title: "Guía Definitiva: Elegir la IA de Video Correcta en 2025",
        slug: "guia-definitiva-elegir-ia-video-2025",
        excerpt: "Framework completo para elegir entre Sora 2, Veo 3.1, Runway Gen-4 y otras IAs según tu proyecto y presupuesto.",
        category_id: "d0ac6606-2004-41d0-98d2-01ad22658666",
        reading_time: 13,
        content: `<h2>El Panorama en 2025</h2>
<p>Hay 10+ herramientas de IA de video. Esta guía te ayuda a elegir la correcta.</p>

<h2>Framework de Decisión</h2>
<h3>1. Define Tu Caso de Uso</h3>
<p>Responde estas preguntas:</p>
<ul>
  <li>¿Cuántos videos generas por mes?</li>
  <li>¿Necesitas consistencia entre videos?</li>
  <li>¿Qué duración requieres?</li>
  <li>¿Necesitas audio?</li>
  <li>¿Cuál es tu presupuesto mensual?</li>
</ul>

<h2>Por Caso de Uso</h2>
<h3>Marketing y Ads</h3>
<p><strong>Mejor opción:</strong> Sora 2<br>
<strong>Por qué:</strong> Realismo cinematográfico, integración con ChatGPT, rapidez</p>

<h3>Series de Contenido</h3>
<p><strong>Mejor opción:</strong> Runway Gen-4<br>
<strong>Por qué:</strong> Consistencia de personajes inigualable</p>

<h3>Contenido Educativo</h3>
<p><strong>Mejor opción:</strong> Veo 3.1<br>
<strong>Por qué:</strong> Audio nativo, precio accesible, fácil de usar</p>

<h3>Social Media</h3>
<p><strong>Mejor opción:</strong> Runway Gen-3 Turbo<br>
<strong>Por qué:</strong> Velocidad, costo bajo, volumen alto</p>

<h2>Por Presupuesto</h2>
<h3>$0-20/mes</h3>
<p><strong>Opción 1:</strong> Veo 3.1 (gratis con límites)<br>
<strong>Opción 2:</strong> Sora 2 con ChatGPT Plus</p>

<h3>$20-50/mes</h3>
<p><strong>Mejor:</strong> Runway Standard + Sora 2</p>

<h3>$50-100/mes</h3>
<p><strong>Mejor:</strong> Runway Pro + Sora 2 Pro</p>

<h3>$100+/mes</h3>
<p><strong>Mejor:</strong> Runway Unlimited + Sora 2 Enterprise + Veo 3.1 Pro</p>

<h2>Por Características</h2>
<h3>Necesitas: Realismo Máximo</h3>
<p>🥇 Sora 2<br>
🥈 Veo 3.1<br>
🥉 Runway Gen-4</p>

<h3>Necesitas: Consistencia</h3>
<p>🥇 Runway Gen-4<br>
🥈 Veo 3.1<br>
🥉 Sora 2</p>

<h3>Necesitas: Audio</h3>
<p>🥇 Veo 3.1 (única opción nativa)</p>

<h3>Necesitas: Velocidad</h3>
<p>🥇 Runway Gen-3 Turbo<br>
🥈 Sora 2<br>
🥉 Veo 3.1</p>

<h2>Comparación de Ecosistema</h2>
<h3>Integración con Otras Herramientas</h3>
<p><strong>Sora 2:</strong> ChatGPT, API OpenAI<br>
<strong>Veo 3.1:</strong> Google Workspace, Gemini<br>
<strong>Runway:</strong> Adobe, DaVinci, API propia</p>

<h2>Recomendación Final</h2>
<h3>Setup Ideal para Profesionales</h3>
<p>Usa 2-3 herramientas en conjunto:</p>
<ul>
  <li><strong>Sora 2:</strong> Para realismo general</li>
  <li><strong>Runway Gen-4:</strong> Para consistencia</li>
  <li><strong>Veo 3.1:</strong> Para contenido con audio</li>
</ul>

<h2>Tabla de Decisión Rápida</h2>
<p>Si tu prioridad #1 es:</p>
<ul>
  <li><strong>Calidad:</strong> Sora 2</li>
  <li><strong>Consistencia:</strong> Runway Gen-4</li>
  <li><strong>Audio:</strong> Veo 3.1</li>
  <li><strong>Velocidad:</strong> Runway Gen-3</li>
  <li><strong>Precio:</strong> Veo 3.1</li>
</ul>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: "El Futuro de la IA de Video: Predicciones para 2026",
        slug: "futuro-ia-video-predicciones-2026",
        excerpt: "Análisis de tendencias actuales y predicciones sobre cómo evolucionará la IA de generación de video en el próximo año.",
        category_id: "d0ac6606-2004-41d0-98d2-01ad22658666",
        reading_time: 10,
        content: `<h2>Dónde Estamos Hoy</h2>
<p>A finales de 2025, las IAs de video pueden generar clips de hasta 60 segundos con calidad cinematográfica.</p>

<h2>Predicción 1: Videos de 5+ Minutos</h2>
<h3>Probabilidad: 90%</h3>
<p>Para mediados de 2026, esperamos que al menos una herramienta pueda generar videos de 5 minutos continuos.</p>

<h3>Impacto</h3>
<p>Esto permitirá crear cortometrajes completos con IA, revolucionando la industria indie.</p>

<h2>Predicción 2: Edición en Tiempo Real</h2>
<h3>Probabilidad: 75%</h3>
<p>Interfaces donde puedas "dirigir" el video en tiempo real como si fueras un director.</p>

<h3>Cómo Funcionaría</h3>
<p>Comando de voz: "Mueve la cámara a la izquierda... ahora zoom al rostro... perfecto"</p>

<h2>Predicción 3: IA Multimodal Completa</h2>
<h3>Probabilidad: 85%</h3>
<p>Una sola herramienta que genere:</p>
<ul>
  <li>Video</li>
  <li>Audio (diálogos, música, efectos)</li>
  <li>Subtítulos automáticos</li>
  <li>Corrección de color inteligente</li>
</ul>

<h2>Predicción 4: Precio se Reduce 70%</h2>
<h3>Probabilidad: 80%</h3>
<p>La competencia y eficiencia llevarán los precios de $20/mes a $5-7/mes.</p>

<h2>Predicción 5: Resolución 4K Nativa</h2>
<h3>Probabilidad: 70%</h3>
<p>La mayoría de herramientas ofrecerán 4K sin upscaling.</p>

<h2>Predicción 6: Personajes con Personalidad</h2>
<h3>Probabilidad: 65%</h3>
<p>No solo consistencia visual, sino personajes con mannerisms y personalidad coherente.</p>

<h2>Predicción 7: Open Source Competitivo</h2>
<h3>Probabilidad: 60%</h3>
<p>Modelos open source alcanzarán 80% de la calidad de herramientas comerciales.</p>

<h3>Candidatos</h3>
<ul>
  <li>Stable Video Diffusion 2.0</li>
  <li>AnimateDiff v4</li>
  <li>OpenSora (comunidad)</li>
</ul>

<h2>Predicción 8: Regulación y Watermarks</h2>
<h3>Probabilidad: 95%</h3>
<p>Gobiernos exigirán watermarks invisibles en todo contenido generado por IA.</p>

<h2>Predicción 9: Integración con Realidad Virtual</h2>
<h3>Probabilidad: 50%</h3>
<p>Generar entornos VR completos desde texto.</p>

<h2>Predicción 10: Consolidación del Mercado</h2>
<h3>Probabilidad: 70%</h3>
<p>De 10+ herramientas principales, quedarán 3-4 dominantes.</p>

<h3>Candidatos a Sobrevivir</h3>
<ul>
  <li>OpenAI (Sora)</li>
  <li>Google (Veo)</li>
  <li>Runway</li>
  <li>Un underdog aún desconocido</li>
</ul>

<h2>Impacto en la Industria</h2>
<h3>Trabajos Transformados</h3>
<ul>
  <li><strong>Motion designers:</strong> Enfoque en dirección, no ejecución</li>
  <li><strong>Editores:</strong> Más tiempo en creatividad, menos en técnica</li>
  <li><strong>Productores:</strong> Presupuestos 10x más bajos</li>
</ul>

<h2>Conclusión</h2>
<p>2026 será el año en que la IA de video pase de "impresionante" a "indispensable".</p>`,
        featured_image: "/images/comparison.jpg",
        published_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    console.log("Inserting articles...");
    
    const { data, error } = await supabase
      .from('articles')
      .insert(articles)
      .select();

    if (error) {
      console.error("Error inserting articles:", error);
      throw error;
    }

    console.log("Articles inserted successfully:", data?.length);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `${data?.length} articles inserted successfully`,
        articles: data
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in insert-articles function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});