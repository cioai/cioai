# CioAI - Instrucciones de Configuración

## ✅ Completado

1. **Base de datos Supabase** - Tablas creadas:
   - `categories` (4 categorías: Sora 2, Veo 3.1, Otras IAs, Guías Generales)
   - `articles` (preparada para 15 artículos)
   - `tags` (13 tags predefinidos)
   - `article_tags` (relación muchos a muchos)

2. **Diseño completo** - Negro y dorado estilo Apple:
   - Sistema de colores HSL en `index.css`
   - Tipografía Inter (Apple-style)
   - Animaciones suaves
   - Dark mode funcional

3. **Componentes creados**:
   - ✅ Header con navegación y búsqueda
   - ✅ Hero section con animaciones
   - ✅ ArticleCard para listados
   - ✅ Footer con redes sociales
   - ✅ AIChat (panel lateral estilo Atlas)
   - ✅ Newsletter section
   - ✅ Página de artículo individual

4. **Rutas configuradas**:
   - `/` - Home
   - `/articulo/:slug` - Artículos individuales
   - `/categoria/:slug` - Por categoría

## ⚠️ Pendiente: Poblar Artículos

Los artículos deben insertarse manualmente desde el panel de Supabase:

### Accede a tu base de datos:
https://supabase.com/dashboard/project/vjeblhorguaflmhjkpwu/editor

### IDs de categorías (para el campo category_id):
- **Sora 2**: `bdd3296f-b527-4120-9411-bb1cc33772d1`
- **Veo 3.1**: `2c711c24-2944-4e8d-8e87-0a8379378da8`
- **Otras IAs**: `40446ecd-6d3c-4230-8fb8-b343acf1b259`
- **Guías Generales**: `d0ac6606-2004-41d0-98d2-01ad22658666`

### Artículos a crear (15 total):

#### CATEGORÍA SORA 2 (5 artículos):
1. **"Sora 2 - OpenAI | Todo lo Nuevo en 2025"**
   - slug: `sora-2-openai-novedades-2025`
   - excerpt: "Descubre todas las novedades de Sora 2..."
   - reading_time: 8
   - is_featured: true

2. **"¿Cómo acceder gratis a Sora 2?"**
   - slug: `como-acceder-gratis-sora-2`
   - reading_time: 6

3. **"Entrar a Sora 2 Gratuitamente"**
   - slug: `entrar-sora-2-gratis-tutorial`
   - reading_time: 10
   - is_featured: true

4. **"Sora 2 vs Veo 3.1"**
   - slug: `sora-2-vs-veo-3-1-comparativa`
   - reading_time: 9

5. **"Prompt Engineering para Sora 2"**
   - slug: `prompts-perfectos-sora-2`
   - reading_time: 12

#### CATEGORÍA VEO 3.1 (3 artículos):
6-8. Similar estructura para Veo 3.1

#### CATEGORÍA OTRAS IAs (4 artículos):
9-12. Higgsfield, Runway Gen-3, Cluevly, etc.

#### CATEGORÍA GUÍAS GENERALES (3 artículos):
13-15. Guías comparativas generales

## 📝 Contenido de Artículos

Cada artículo tiene 3 espacios marcados para que Hatim añada contenido personal:
- `[ESPACIO PARA INTRO PERSONAL]` - Inicio del artículo
- `[ESPACIO PARA OPINIÓN PERSONAL]` - Medio del artículo
- `[ESPACIO PARA CONCLUSIÓN PERSONAL]` - Final del artículo

El contenido generado por IA está estructurado con H2, listas, tablas y párrafos.

## 🚀 Próximos Pasos

1. **Insertar artículos** manualmente en Supabase o usar SQL
2. **Generar imágenes destacadas** para cada artículo (usar IA de generación)
3. **Completar espacios personales** en los artículos
4. **Configurar AdSense** (placeholders listos en el código)
5. **Conectar newsletter** (formulario funcional, falta servicio)
6. **Configurar chat IA real** (actualmente es mock)

## 🎨 Personalización

- **Logo**: Actualizar con logo real de CioAI
- **Fotos de Hatim**: Reemplazar placeholder "H"
- **Redes sociales**: Actualizar links en Footer
- **Analytics**: Añadir Google Analytics
- **SEO**: Completar meta tags por página

## 📱 Responsive

Totalmente responsive para móvil, tablet y desktop con breakpoints en 768px y 1024px.
