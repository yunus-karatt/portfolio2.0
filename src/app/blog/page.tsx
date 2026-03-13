import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description: "Sharing my journey through engineering, leadership, and the art of self-taught mastery.",
};

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--reader-bg)] transition-colors duration-500 py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-12 max-w-4xl">
        <div className="space-y-24">
          <header className="space-y-8 max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none italic">Stories.</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Sharing my journey through engineering, leadership, and the art of self-taught mastery.
            </p>
          </header>

        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block space-y-4 border-b border-border/40 pb-12 hover:border-primary/40 transition-colors"
            >
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-muted-foreground">{format(new Date(post.date), "MMMM dd, yyyy")}</span>
                <span className="bg-muted px-3 py-1 rounded-full text-xs uppercase tracking-widest">{post.category}</span>
              </div>
              <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Read Post <ArrowLeft className="w-4 h-4 rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
