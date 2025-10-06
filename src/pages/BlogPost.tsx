import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  featured_image_alt?: string;
  published_at: string;
  updated_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new Error("Post not found");
      
      return data as BlogPost;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (error) {
      navigate("/blog");
    }
  }, [error, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-background/95 backdrop-blur">
          <div className="container mx-auto px-6 py-4">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              CloudHost
            </Link>
          </div>
        </header>
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </article>
      </div>
    );
  }

  if (!post) return null;

  const seoTitle = post.meta_title || `${post.title} - CloudHost Blog`;
  const seoDescription = post.meta_description || post.excerpt || `Read "${post.title}" on CloudHost - expert insights and professional advice.`;
  const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;
  
  // Sanitize HTML content to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    return DOMPurify.sanitize(post.content, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'],
      ALLOW_DATA_ATTR: false,
    });
  }, [post.content]);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        {post.category && <meta property="article:section" content={post.category} />}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {post.featured_image && <meta name="twitter:image" content={post.featured_image} />}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featured_image,
            "url": canonicalUrl,
            "datePublished": post.published_at,
            "dateModified": post.updated_at,
            "author": {
              "@type": "Organization",
              "name": "CloudHost"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CloudHost"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-6 py-4">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              CloudHost
            </Link>
          </div>
        </header>

        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.featured_image_alt || post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          )}

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          {post.category && (
            <Badge variant="secondary" className="mb-6">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </Badge>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-8 pb-8 border-b">
              {post.excerpt}
            </p>
          )}

          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          <div className="mt-12 pt-8 border-t">
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Posts
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
