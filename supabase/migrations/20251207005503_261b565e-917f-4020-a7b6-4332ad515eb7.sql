-- Actualizar artículos tipo tutorial a la categoría Tutoriales
UPDATE articles SET category_id = '3a1a4804-a99e-438b-bf40-59013a2d2eb9' 
WHERE slug IN (
  'tutorial-crear-videos-profesionales-sora-2',
  'como-usar-veo-3-1-google-ai-studio-tutorial',
  'tutorial-runway-gen-4-principiante-experto',
  'sora-2-api-guia-desarrolladores-2025'
);

-- Actualizar artículos tipo comparativa a la categoría Comparativas
UPDATE articles SET category_id = '985b95f5-4c80-40d8-9324-29b1a2d4bc6d'
WHERE slug IN (
  'sora-2-vs-sora-1-comparativa-mejoras',
  'veo-3-1-vs-veo-3-mejoras-diferencias',
  'runway-gen-3-vs-gen-4-merece-actualizar',
  'veo-3-1-alternativa-google-sora-2'
);