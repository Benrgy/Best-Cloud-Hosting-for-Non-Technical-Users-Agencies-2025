-- Create posts table for blog system
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  category TEXT,
  featured_image TEXT,
  featured_image_alt TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Published posts are viewable by everyone" 
ON public.posts 
FOR SELECT 
USING (status = 'published');

-- Create index for faster slug lookups
CREATE INDEX idx_posts_slug ON public.posts(slug);
CREATE INDEX idx_posts_status ON public.posts(status);
CREATE INDEX idx_posts_published_at ON public.posts(published_at DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_posts_timestamp
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();