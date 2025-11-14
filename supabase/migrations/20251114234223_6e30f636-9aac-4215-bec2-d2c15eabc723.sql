-- Insertar categorías de Tutoriales y Comparativas
INSERT INTO public.categories (name, slug, description) VALUES
  ('Tutoriales', 'tutoriales', 'Guías paso a paso para dominar las herramientas de IA'),
  ('Comparativas', 'comparativas', 'Análisis y comparaciones entre diferentes herramientas de IA')
ON CONFLICT (slug) DO NOTHING;