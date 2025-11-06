-- Actualizar las rutas de las imágenes destacadas para que funcionen correctamente
UPDATE articles 
SET featured_image = '/images/sora-2.jpg'
WHERE featured_image = '/src/assets/sora-2.jpg';

UPDATE articles 
SET featured_image = '/images/veo-3-1.jpg'
WHERE featured_image = '/src/assets/veo-3-1.jpg';

UPDATE articles 
SET featured_image = '/images/comparison.jpg'
WHERE featured_image = '/src/assets/comparison.jpg';