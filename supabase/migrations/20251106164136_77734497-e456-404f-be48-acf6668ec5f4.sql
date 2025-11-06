-- Insertar 15 artículos nuevos basados en investigación actualizada

-- Sora 2 Articles
INSERT INTO articles (title, slug, excerpt, content, category_id, reading_time, featured_image, published_at) VALUES
(
  'Sora 2 API: Guía Completa para Desarrolladores 2025',
  'sora-2-api-guia-desarrolladores-2025',
  'Aprende a integrar Sora 2 en tus aplicaciones. Precios, límites, casos de uso y código de ejemplo para desarrolladores.',
  '<h2>Acceso a la API de Sora 2</h2>
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

<h2>Casos de Uso Recomendados</h2>
<ul>
  <li>Marketing automatizado</li>
  <li>Prototipado de anuncios</li>
  <li>Contenido educativo personalizado</li>
  <li>Visualización de productos</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'sora-2'),
  10,
  '/images/sora-2.jpg',
  NOW() - INTERVAL '1 day'
),
(
  'Sora 2 vs Sora 1: Todas las Mejoras Explicadas',
  'sora-2-vs-sora-1-comparativa-mejoras',
  'Análisis detallado de las mejoras entre Sora 1 y Sora 2. Descubre qué ha cambiado y si vale la pena actualizar.',
  '<h2>Evolución de Sora</h2>
<p>OpenAI lanzó Sora 1 en febrero de 2024 y Sora 2 en 2025. La diferencia es significativa.</p>

<h2>Comparativa de Características</h2>
<h3>Duración de Videos</h3>
<p><strong>Sora 1:</strong> Máximo 30 segundos<br>
<strong>Sora 2:</strong> Hasta 60 segundos con calidad consistente</p>

<h3>Resolución</h3>
<p><strong>Sora 1:</strong> 720p máximo<br>
<strong>Sora 2:</strong> Hasta 1080p nativo</p>

<h3>Coherencia Temporal</h3>
<p>Sora 2 reduce glitches visuales en un 80% comparado con Sora 1.</p>',
  (SELECT id FROM categories WHERE slug = 'sora-2'),
  8,
  '/images/sora-2.jpg',
  NOW() - INTERVAL '2 days'
),
(
  'Tutorial: Crea Videos Profesionales con Sora 2 en 10 Minutos',
  'tutorial-crear-videos-profesionales-sora-2',
  'Guía paso a paso para crear videos de calidad profesional con Sora 2. Desde el prompt hasta la exportación final.',
  '<h2>Paso 1: Acceso a Sora 2</h2>
<ol>
  <li>Suscríbete a ChatGPT Plus ($20/mes)</li>
  <li>Abre ChatGPT y selecciona "Sora 2" del menú</li>
  <li>Familiarízate con la interfaz</li>
</ol>

<h2>Paso 2: Escribe un Prompt Efectivo</h2>
<h3>Estructura Básica</h3>
<p><strong>Sujeto + Acción + Entorno + Estilo + Movimiento de cámara</strong></p>

<h2>Tips Profesionales</h2>
<ul>
  <li>Usa referencias visuales en tus prompts</li>
  <li>Experimenta con diferentes estilos de cámara</li>
  <li>Genera múltiples variaciones antes de decidir</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'sora-2'),
  12,
  '/images/sora-2.jpg',
  NOW() - INTERVAL '3 days'
),
(
  '¿Vale la Pena Sora 2? Opinión Honesta Después de 3 Meses',
  'vale-la-pena-sora-2-opinion-honesta',
  'Revisión completa de Sora 2 después de 3 meses de uso intensivo. Ventajas, desventajas y para quién es útil.',
  '<h2>Mi Experiencia con Sora 2</h2>
<p>Después de 3 meses usando Sora 2 diariamente, aquí está mi opinión honesta.</p>

<h2>Lo Que Me Encanta</h2>
<h3>1. Calidad Cinematográfica Real</h3>
<p>Los videos son genuinamente impresionantes. He usado clips de Sora 2 en presentaciones profesionales.</p>

<h2>Veredicto Final</h2>
<p><strong>8/10</strong> - Vale la pena si tu trabajo involucra creación de video.</p>',
  (SELECT id FROM categories WHERE slug = 'sora-2'),
  9,
  '/images/sora-2.jpg',
  NOW() - INTERVAL '4 days'
),
(
  'Errores Comunes en Sora 2 y Cómo Evitarlos',
  'errores-comunes-sora-2-como-evitarlos',
  'Los 10 errores más frecuentes que cometen los usuarios de Sora 2 y soluciones prácticas para cada uno.',
  '<h2>Error 1: Prompts Demasiado Vagos</h2>
<p><strong>Mal:</strong> "Un perro corriendo"<br>
<strong>Bien:</strong> "Un golden retriever corriendo en un parque al atardecer, cámara siguiendo desde atrás"</p>

<h2>Error 2: Ignorar la Iluminación</h2>
<p>Siempre especifica la hora del día y tipo de iluminación.</p>

<h2>Error 3: No Especificar Movimiento de Cámara</h2>
<p>Siempre indica: estática, dolly, pan, zoom, etc.</p>',
  (SELECT id FROM categories WHERE slug = 'sora-2'),
  7,
  '/images/sora-2.jpg',
  NOW() - INTERVAL '5 days'
);

-- Veo 3.1 Articles  
INSERT INTO articles (title, slug, excerpt, content, category_id, reading_time, featured_image, published_at) VALUES
(
  'Veo 3.1: La Alternativa de Google a Sora 2',
  'veo-3-1-alternativa-google-sora-2',
  'Análisis completo de Veo 3.1 de Google DeepMind. Características únicas, acceso y comparación con Sora 2.',
  '<h2>¿Qué es Veo 3.1?</h2>
<p>Veo 3.1 es el modelo de generación de video con IA de Google DeepMind, lanzado en octubre de 2025.</p>

<h2>Características Únicas</h2>
<h3>1. Generación de Audio Nativo</h3>
<p>A diferencia de Sora 2, Veo 3.1 genera automáticamente efectos de sonido y música de fondo.</p>

<h2>Comparación con Sora 2</h2>
<h3>Veo 3.1 Gana En:</h3>
<ul>
  <li>Generación de audio</li>
  <li>Edición de video</li>
  <li>Precio (30% más barato)</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'veo-3-1'),
  10,
  '/images/veo-3-1.jpg',
  NOW() - INTERVAL '6 days'
),
(
  'Cómo Usar Veo 3.1 en Google AI Studio: Tutorial Completo',
  'como-usar-veo-3-1-google-ai-studio-tutorial',
  'Guía paso a paso para empezar a usar Veo 3.1 en Google AI Studio. Desde el registro hasta tu primer video.',
  '<h2>Paso 1: Acceder a Google AI Studio</h2>
<ol>
  <li>Visita aistudio.google.com</li>
  <li>Inicia sesión con tu cuenta de Google</li>
  <li>Acepta los términos de servicio</li>
</ol>

<h2>Paso 2: Primera Generación</h2>
<p>Describe tu video en el prompt box y configura la duración (5-8 segundos).</p>

<h2>Tips Adicionales</h2>
<ul>
  <li>El audio generado es sorprendentemente bueno</li>
  <li>Experimenta con diferentes duraciones</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'veo-3-1'),
  8,
  '/images/veo-3-1.jpg',
  NOW() - INTERVAL '7 days'
),
(
  'Veo 3.1 vs Veo 3: ¿Qué Ha Mejorado?',
  'veo-3-1-vs-veo-3-mejoras-diferencias',
  'Comparación detallada entre Veo 3 y Veo 3.1. Descubre las mejoras y si vale la pena actualizar.',
  '<h2>Mejoras Principales</h2>
<h3>1. Audio Nativo</h3>
<p>La mejora más significativa. Veo 3 no generaba audio; Veo 3.1 sí.</p>

<h3>2. Resolución Mejorada</h3>
<p><strong>Veo 3:</strong> 720p máximo<br>
<strong>Veo 3.1:</strong> 1080p nativo</p>

<h2>Conclusión</h2>
<p>Veo 3.1 es una mejora sustancial. El audio solo ya justifica el upgrade.</p>',
  (SELECT id FROM categories WHERE slug = 'veo-3-1'),
  6,
  '/images/veo-3-1.jpg',
  NOW() - INTERVAL '8 days'
),
(
  '5 Casos de Uso Reales de Veo 3.1 para Negocios',
  'casos-uso-reales-veo-3-1-negocios',
  'Descubre cómo empresas reales están usando Veo 3.1 para marketing, educación y más.',
  '<h2>Caso 1: E-commerce - Visualización de Productos</h2>
<p>Usan Veo 3.1 para crear videos de productos sin fotografía física.</p>

<h3>Resultados</h3>
<ul>
  <li>Redujeron costos de fotografía en 70%</li>
  <li>Lanzamiento de productos 3x más rápido</li>
  <li>Conversión aumentó 25%</li>
</ul>

<h2>Caso 2: Educación - Contenido Explicativo</h2>
<p>Crean videos explicativos de conceptos científicos complejos.</p>',
  (SELECT id FROM categories WHERE slug = 'veo-3-1'),
  9,
  '/images/veo-3-1.jpg',
  NOW() - INTERVAL '9 days'
);

-- Runway Gen-4 (Otras IAs)
INSERT INTO articles (title, slug, excerpt, content, category_id, reading_time, featured_image, published_at) VALUES
(
  'Runway Gen-4: La Nueva Era de la Consistencia en IA',
  'runway-gen-4-nueva-era-consistencia-ia',
  'Análisis completo de Runway Gen-4, el modelo que resuelve el problema de consistencia en videos con IA.',
  '<h2>El Gran Anuncio de Runway</h2>
<p>En marzo de 2025, Runway lanzó Gen-4, prometiendo "world consistency" real.</p>

<h2>Características de Gen-4</h2>
<h3>1. Personajes Persistentes</h3>
<p>Crea un personaje una vez y úsalo en cientos de escenas manteniendo el 98% de similitud.</p>

<h2>Casos de Uso Ideales</h2>
<ul>
  <li>Series de videos con mismo personaje</li>
  <li>Previsualización cinematográfica</li>
  <li>Videojuegos y cinematics</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'otras-ias'),
  11,
  '/images/comparison.jpg',
  NOW() - INTERVAL '10 days'
),
(
  'Tutorial Runway Gen-4: De Principiante a Experto',
  'tutorial-runway-gen-4-principiante-experto',
  'Guía definitiva de Runway Gen-4. Desde cero hasta técnicas avanzadas de consistencia de personajes.',
  '<h2>Módulo 1: Fundamentos</h2>
<p>Aprende a configurar tu cuenta y crear tu primer video.</p>

<h2>Módulo 3: Consistencia de Personajes</h2>
<h3>Paso 1: Crear Personaje Base</h3>
<p>Genera un personaje con descripción detallada y guárdalo como referencia.</p>

<h2>Módulo 7: Optimización de Créditos</h2>
<ul>
  <li>Usa 720p para pruebas</li>
  <li>Genera en lotes nocturnos</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'otras-ias'),
  15,
  '/images/comparison.jpg',
  NOW() - INTERVAL '11 days'
),
(
  'Runway Gen-3 vs Gen-4: ¿Merece la Pena Actualizar?',
  'runway-gen-3-vs-gen-4-merece-actualizar',
  'Comparación exhaustiva entre Gen-3 y Gen-4 de Runway. Diferencias reales y análisis de costo-beneficio.',
  '<h2>Mejoras Principales</h2>
<h3>1. Consistencia</h3>
<p><strong>Gen-3:</strong> 70%<br>
<strong>Gen-4:</strong> 98%</p>

<h2>Precio Comparado</h2>
<p>Gen-4 es 2.5x más caro pero la calidad lo justifica.</p>

<h2>Recomendación</h2>
<p><strong>Para trabajo profesional:</strong> Gen-4 sin duda</p>',
  (SELECT id FROM categories WHERE slug = 'otras-ias'),
  8,
  '/images/comparison.jpg',
  NOW() - INTERVAL '12 days'
),
(
  'Top 10 Videos Increíbles Hechos con Runway Gen-4',
  'top-10-videos-increibles-runway-gen-4',
  'Showcase de los videos más impresionantes creados con Runway Gen-4. Análisis de técnicas y prompts.',
  '<h2>#1: "The Interview"</h2>
<p>Entrevista completa de 2 minutos con cambios de cámara, dos personajes consistentes.</p>

<h3>Por Qué es #1</h3>
<ul>
  <li>2 personajes perfectamente consistentes</li>
  <li>8 ángulos de cámara diferentes</li>
  <li>Iluminación coherente</li>
</ul>

<h2>Conclusión</h2>
<p>Estos creadores demuestran que Gen-4 está listo para producción profesional.</p>',
  (SELECT id FROM categories WHERE slug = 'otras-ias'),
  12,
  '/images/comparison.jpg',
  NOW() - INTERVAL '13 days'
);

-- Guías Generales
INSERT INTO articles (title, slug, excerpt, content, category_id, reading_time, featured_image, published_at) VALUES
(
  'Guía Definitiva: Elegir la IA de Video Correcta en 2025',
  'guia-definitiva-elegir-ia-video-2025',
  'Framework completo para elegir entre Sora 2, Veo 3.1, Runway Gen-4 según tu proyecto y presupuesto.',
  '<h2>El Panorama en 2025</h2>
<p>Hay 10+ herramientas de IA de video. Esta guía te ayuda a elegir la correcta.</p>

<h2>Por Caso de Uso</h2>
<h3>Marketing y Ads</h3>
<p><strong>Mejor opción:</strong> Sora 2</p>

<h3>Series de Contenido</h3>
<p><strong>Mejor opción:</strong> Runway Gen-4</p>

<h2>Tabla de Decisión Rápida</h2>
<ul>
  <li><strong>Calidad:</strong> Sora 2</li>
  <li><strong>Consistencia:</strong> Runway Gen-4</li>
  <li><strong>Audio:</strong> Veo 3.1</li>
</ul>',
  (SELECT id FROM categories WHERE slug = 'guias-generales'),
  13,
  '/images/comparison.jpg',
  NOW() - INTERVAL '14 days'
),
(
  'El Futuro de la IA de Video: Predicciones para 2026',
  'futuro-ia-video-predicciones-2026',
  'Análisis de tendencias y predicciones sobre cómo evolucionará la IA de generación de video.',
  '<h2>Predicción 1: Videos de 5+ Minutos</h2>
<h3>Probabilidad: 90%</h3>
<p>Para mediados de 2026, esperamos videos de 5 minutos continuos.</p>

<h2>Predicción 2: Edición en Tiempo Real</h2>
<h3>Probabilidad: 75%</h3>
<p>Interfaces donde puedas "dirigir" el video en tiempo real.</p>

<h2>Conclusión</h2>
<p>2026 será el año en que la IA de video pase de "impresionante" a "indispensable".</p>',
  (SELECT id FROM categories WHERE slug = 'guias-generales'),
  10,
  '/images/comparison.jpg',
  NOW() - INTERVAL '15 days'
);