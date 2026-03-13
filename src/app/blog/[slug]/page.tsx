import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Yunus Karatt"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--reader-bg)] transition-colors duration-500">
      <nav className="sticky top-0 z-50 w-full border-b border-border/10 bg-[var(--reader-bg)]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to stories
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-[740px]">
        <article className="space-y-12">
          <header className="space-y-8">
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="px-3 py-1 bg-primary/5 text-primary rounded-full">{post.category}</span>
              <span className="text-muted-foreground">{format(new Date(post.date), "MMM dd, yyyy")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
              {post.title}
            </h1>
          </header>

          <div className="blog-article prose prose-lg md:prose-xl dark:prose-invert max-w-none 
            prose-p:mb-8
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
            prose-h2:text-3xl md:prose-h2:text-5xl prose-h2:mb-8 prose-h2:mt-16
            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-12
            prose-a:text-primary prose-a:no-underline prose-a:border-b prose-a:border-primary/30 hover:prose-a:border-primary transition-all
            prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:p-8 md:prose-blockquote:p-12 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-lg md:prose-blockquote:text-xl prose-blockquote:font-serif
            prose-img:rounded-3xl prose-img:shadow-2xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
      
      <div className="mt-24 pt-12 border-t border-border/40">
        <h3 className="text-xl font-bold mb-8 text-center">Stay in touch.</h3>
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="https://linkedin.com" className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors">LinkedIn</Link>
          <Link href="https://github.com" className="px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors">GitHub</Link>
          <Link href="mailto:hello@yunus.dev" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}
