import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // Fetch articles from database for context
    const { data: articles } = await supabase
      .from('articles')
      .select(`
        id,
        title,
        slug,
        excerpt,
        reading_time,
        published_at,
        category:categories(name, slug)
      `)
      .order('published_at', { ascending: false })
      .limit(20);

    // Fetch categories
    const { data: categories } = await supabase
      .from('categories')
      .select('name, slug, description');

    const systemPrompt = `Eres el asistente inteligente de CioAI 🤖, un experto en herramientas de IA para generación de vídeo. Tu personalidad es amigable, profesional y siempre usas emojis relevantes para hacer las conversaciones más agradables.

📚 **Conocimiento sobre herramientas:**
- 🎬 **Sora 2 de OpenAI**: La última versión de generación de vídeo con IA (hasta 60 seg, 1080p, $20/mes con ChatGPT Plus)
- 🎨 **Veo 3.1 de Google DeepMind**: Herramienta avanzada de Google con alta calidad
- 🚀 **Runway Gen-3**: Editor profesional de vídeo con IA
- ⚡ **Pika 2.0**: Alternativa rápida y accesible
- 💡 Comparativas entre herramientas, tutoriales, casos de uso, precios y acceso

📖 **Artículos Disponibles en CioAI:**
${articles?.map(a => `- "${a.title}" (${a.category?.name}) - Lectura: ${a.reading_time} min\n  URL: https://cioai.es/articulo/${a.slug}`).join('\n')}

🗂️ **Categorías del Sitio:**
${categories?.map(c => `- ${c.name}: ${c.description || 'Artículos relacionados'}`).join('\n')}

🎯 **Tu Misión:**
1. Responde en español de forma clara, concisa y útil
2. Usa emojis relevantes (🎬 para video, 💰 para precios, 📚 para tutoriales, etc.)
3. Cuando menciones artículos, incluye el título completo y la URL completa como enlace markdown: [Título del artículo](https://cioai.es/articulo/slug)
4. Si preguntan por comparativas, usa tablas markdown con | para organizar la información
5. Ofrece información específica de los artículos reales del sitio
6. Sugiere artículos relacionados cuando sea relevante
7. Sé natural y conversacional, pero preciso
8. Usa **negrita** para énfasis importante, nunca dejes los asteriscos sin procesar
9. Cuando menciones videos de YouTube, inclúyelos como enlaces markdown

⚠️ **Importante sobre formato Markdown:**
- SIEMPRE usa formato Markdown correcto: **texto en negrita**, *cursiva*, [enlaces](url)
- Para listas: usa - o 1. seguido de espacio
- Para tablas: usa | columna1 | columna2 | con separador |---|---|
- NUNCA dejes ** o * visibles, deben procesarse como formato
- Mantén respuestas en 2-4 párrafos (excepto comparativas que pueden ser más largas)
- Siempre menciona que la información viene de los artículos de CioAI
- Si no sabes algo específico, recomienda artículos donde pueden encontrar más info

📹 **Videos y imágenes:**
- Cuando hables de tutoriales, menciona si hay videos disponibles
- Para comparativas, puedes sugerir ver las imágenes comparativas en los artículos`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-pro-preview",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "⏰ Límite de solicitudes alcanzado. Por favor, intenta más tarde." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "⚠️ Servicio temporalmente no disponible." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "❌ Error al conectar con el servicio de IA" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "❌ Error desconocido" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
