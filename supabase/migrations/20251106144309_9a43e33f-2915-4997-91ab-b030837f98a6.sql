-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Hatim',
  reading_time INTEGER NOT NULL DEFAULT 5,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  views INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT false
);

-- Create article_tags junction table
CREATE TABLE public.article_tags (
  article_id UUID REFERENCES public.articles(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_tags ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read access for categories"
ON public.categories FOR SELECT
USING (true);

CREATE POLICY "Public read access for tags"
ON public.tags FOR SELECT
USING (true);

CREATE POLICY "Public read access for articles"
ON public.articles FOR SELECT
USING (true);

CREATE POLICY "Public read access for article_tags"
ON public.article_tags FOR SELECT
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_category ON public.articles(category_id);
CREATE INDEX idx_articles_published ON public.articles(published_at DESC);
CREATE INDEX idx_categories_slug ON public.categories(slug);
CREATE INDEX idx_tags_slug ON public.tags(slug);

-- Insert categories
INSERT INTO public.categories (name, slug, description) VALUES
('Sora 2', 'sora-2', 'Todo sobre Sora 2 de OpenAI'),
('Veo 3.1', 'veo-3-1', 'Análisis de Veo 3.1 de Google DeepMind'),
('Otras IAs', 'otras-ias', 'Herramientas de IA para video'),
('Guías Generales', 'guias-generales', 'Guías completas sobre IA');

-- Insert tags
INSERT INTO public.tags (name, slug) VALUES
('Sora 2', 'sora-2'),
('OpenAI', 'openai'),
('Veo 3.1', 'veo-3-1'),
('Google DeepMind', 'google-deepmind'),
('Comparativas', 'comparativas'),
('Tutoriales', 'tutoriales'),
('Generación de Video', 'generacion-video'),
('IA', 'ia'),
('Edición Video', 'edicion-video'),
('Prompt Engineering', 'prompt-engineering'),
('Runway', 'runway'),
('Higgsfield', 'higgsfield'),
('CapCut', 'capcut');