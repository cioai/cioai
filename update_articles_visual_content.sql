-- Script para actualizar el contenido de los artículos con elementos visuales mejorados
-- Ejecutar este script en la consola SQL de Supabase

-- Artículo: Tutorial Sora 2
UPDATE articles
SET content = '
<h2>🎬 Introducción: Tu Primera Vez con Sora 2</h2>
<p>Crear videos profesionales con IA solía ser complicado. Sora 2 cambió eso completamente. En este tutorial, te llevo paso a paso desde cero hasta crear tu primer video de calidad cinematográfica.</p>

<div class="my-8 rounded-xl overflow-hidden border border-border bg-card shadow-xl">
  <div class="relative aspect-video bg-secondary/20">
    <iframe src="https://www.youtube.com/embed/HK6y8DAPN_0" title="Tutorial Sora 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>
  </div>
  <div class="p-6 border-t border-border bg-gradient-to-br from-primary/5 to-accent/5">
    <h4 class="font-bold mb-2 text-lg">🎥 Tutorial Completo en Video</h4>
    <p class="text-sm text-muted-foreground">Sigue este tutorial paso a paso del canal oficial de OpenAI. Aprenderás desde lo básico hasta técnicas avanzadas.</p>
  </div>
</div>

<h2>🚀 Paso 1: Configuración Inicial</h2>
<h3>Requisitos Previos</h3>
<ul>
  <li><strong>✅ Cuenta ChatGPT Plus:</strong> $20/mes, acceso ilimitado</li>
  <li><strong>💻 Navegador Moderno:</strong> Chrome, Firefox, Safari o Edge</li>
  <li><strong>🌐 Conexión Estable:</strong> Mínimo 10 Mbps para carga rápida</li>
</ul>

<h3>Acceso a Sora 2</h3>
<ol>
  <li>Inicia sesión en <a href="https://chat.openai.com" target="_blank">chat.openai.com</a></li>
  <li>Haz clic en tu perfil (esquina superior derecha)</li>
  <li>Selecciona "Sora 2" del menú de modelos</li>
  <li>¡Listo! Ya puedes crear videos</li>
</ol>

<h2>✨ Paso 2: Tu Primer Prompt</h2>
<div class="my-8 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
  <h4 class="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
    <span class="text-xl">💡</span> Estructura de un Prompt Perfecto
  </h4>
  <div class="space-y-3 text-sm">
    <p><strong>Fórmula Básica:</strong></p>
    <p class="font-mono bg-secondary/50 p-3 rounded">[Sujeto] + [Acción] + [Entorno] + [Estilo Visual] + [Movimiento Cámara]</p>
  </div>
</div>

<h3>Ejemplo Paso a Paso</h3>
<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
    <h4 class="font-bold text-red-600 dark:text-red-400 mb-3">❌ Prompt Malo</h4>
    <p class="text-sm italic">"Un perro corriendo"</p>
    <p class="text-xs text-muted-foreground mt-3">Demasiado vago, resultados impredecibles</p>
  </div>
  <div class="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
    <h4 class="font-bold text-green-600 dark:text-green-400 mb-3">✅ Prompt Bueno</h4>
    <p class="text-sm italic">"Un golden retriever corriendo felizmente en un parque al atardecer, cámara steadicam siguiendo desde atrás, estilo cinematográfico"</p>
    <p class="text-xs text-muted-foreground mt-3">Específico, visual, con dirección clara</p>
  </div>
</div>

<h2>🎨 Paso 3: Parámetros Avanzados</h2>
<div class="my-8 overflow-hidden rounded-xl border border-border bg-card">
  <table class="w-full">
    <thead>
      <tr class="border-b border-border bg-secondary/20">
        <th class="px-6 py-4 text-left font-semibold">Parámetro</th>
        <th class="px-6 py-4 text-left font-semibold">Descripción</th>
        <th class="px-6 py-4 text-left font-semibold">Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-border hover:bg-accent/5">
        <td class="px-6 py-4 font-medium">Duración</td>
        <td class="px-6 py-4">5 a 60 segundos</td>
        <td class="px-6 py-4 text-sm">--duration 30s</td>
      </tr>
      <tr class="border-b border-border hover:bg-accent/5">
        <td class="px-6 py-4 font-medium">Resolución</td>
        <td class="px-6 py-4">480p, 720p, 1080p</td>
        <td class="px-6 py-4 text-sm">--quality 1080p</td>
      </tr>
      <tr class="border-b border-border hover:bg-accent/5">
        <td class="px-6 py-4 font-medium">Estilo</td>
        <td class="px-6 py-4">Realista, animado, artístico</td>
        <td class="px-6 py-4 text-sm">--style cinematic</td>
      </tr>
      <tr class="hover:bg-accent/5">
        <td class="px-6 py-4 font-medium">Movimiento</td>
        <td class="px-6 py-4">Cámara fija, dolly, pan, zoom</td>
        <td class="px-6 py-4 text-sm">--camera dolly-in</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>🎯 Tips Profesionales</h2>
<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
    <div class="text-3xl mb-4">📸</div>
    <h3 class="text-lg font-semibold mb-2">Iluminación</h3>
    <p class="text-sm text-muted-foreground">Siempre especifica la hora del día: "amanecer dorado", "luz natural del mediodía", "iluminación nocturna neón"</p>
  </div>
  <div class="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
    <div class="text-3xl mb-4">🎬</div>
    <h3 class="text-lg font-semibold mb-2">Movimiento de Cámara</h3>
    <p class="text-sm text-muted-foreground">Define cómo se mueve la cámara: "cámara fija", "dolly zoom", "paneo horizontal suave"</p>
  </div>
  <div class="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
    <div class="text-3xl mb-4">🎭</div>
    <h3 class="text-lg font-semibold mb-2">Emociones</h3>
    <p class="text-sm text-muted-foreground">Describe el mood: "atmósfera nostálgica", "energía vibrante", "tensión dramática"</p>
  </div>
  <div class="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all">
    <div class="text-3xl mb-4">🌍</div>
    <h3 class="text-lg font-semibold mb-2">Contexto</h3>
    <p class="text-sm text-muted-foreground">Añade detalles ambientales: "lluvia ligera", "hojas cayendo", "tráfico de fondo"</p>
  </div>
</div>

<h2>⚡ Errores Comunes y Soluciones</h2>
<div class="space-y-4 my-8">
  <div class="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
    <h4 class="font-bold text-yellow-700 dark:text-yellow-300 mb-2">⚠️ El video sale borroso</h4>
    <p class="text-sm"><strong>Solución:</strong> Especifica resolución 1080p y añade "alta calidad, sharp focus" al prompt</p>
  </div>
  <div class="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
    <h4 class="font-bold text-yellow-700 dark:text-yellow-300 mb-2">⚠️ Los personajes cambian de apariencia</h4>
    <p class="text-sm"><strong>Solución:</strong> Describe al personaje con mucho detalle al inicio y mantén la consistencia</p>
  </div>
  <div class="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
    <h4 class="font-bold text-yellow-700 dark:text-yellow-300 mb-2">⚠️ El movimiento es demasiado rápido</h4>
    <p class="text-sm"><strong>Solución:</strong> Usa palabras como "suave", "lento", "tranquilo" en tu prompt</p>
  </div>
</div>

<h2>🏆 Proyecto Final: Tu Primer Video Pro</h2>
<p>Ahora que dominas lo básico, crea este video de práctica:</p>
<div class="my-6 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
  <h4 class="font-bold mb-4 text-lg">📋 Proyecto: Video de Producto</h4>
  <p class="mb-4"><strong>Objetivo:</strong> Crear un video promocional de 30 segundos</p>
  <p class="font-mono bg-secondary/50 p-4 rounded text-sm mb-4">
    "Close-up cinematográfico de un reloj de lujo sobre terciopelo negro, iluminación dramática con reflejos dorados, cámara dolly zoom lento revelando detalles, ambiente elegante y sofisticado, 4K ultra HD"
  </p>
  <p class="text-sm text-muted-foreground">Parámetros: --duration 30s --quality 1080p --style cinematic</p>
</div>'
WHERE slug = 'tutorial-crear-videos-profesionales-sora-2';

-- Ejecuta este script en tu consola SQL de Supabase
