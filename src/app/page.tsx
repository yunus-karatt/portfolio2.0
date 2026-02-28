import Link from "next/link";
import { ArrowRight, Code, Layout, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 md:py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Engineering. <br /> 
              <span className="text-muted-foreground">Digital Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              I'm <span className="text-foreground font-bold uppercase tracking-tight">Yunus Karatt</span>, a <span className="underline decoration-primary/30 underline-offset-4">Self-taught Software Engineer</span> concentrated on Frontend, building scalable architectures and professional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 md:gap-6 text-[10px] md:text-sm font-bold uppercase tracking-widest text-primary/60">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>Tailwind</span>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link 
              href="/projects" 
              className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all hover:scale-[1.02] flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              The Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/about" 
              className="px-10 py-5 border border-border rounded-2xl font-bold hover:bg-muted transition-all"
            >
              The Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy/Focus Section */}
      <section className="bg-muted/30 py-24 border-y border-border/40">
        <div className="container mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="p-4 bg-background rounded-3xl w-fit border border-border/40 shadow-sm">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Frontend Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">Leading teams to build robust, scalable frontend systems with modern frameworks and design systems.</p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-background rounded-3xl w-fit border border-border/40 shadow-sm">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Full Stack Capability</h3>
              <p className="text-muted-foreground leading-relaxed">Experience across the stack with Node.js, FastAPI, and PostgreSQL to deliver end-to-end solutions.</p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-background rounded-3xl w-fit border border-border/40 shadow-sm">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Web3 & Community</h3>
              <p className="text-muted-foreground leading-relaxed">Integrating decentralized protocols and community tools for the next generation of web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="container mx-auto px-8 md:px-12">
        <div className="space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-4xl font-black italic tracking-tighter">PROJECTS.</h2>
              <p className="text-muted-foreground text-xl">Selected professional work.</p>
            </div>
            <Link href="/projects" className="text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
              Explorer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard 
              title="Enterprise Cloud" 
              description="A massive AWS-like infrastructure platform with project management dashboards and AI integration." 
              category="Mizzle Cloud"
              href="/projects"
            />
            <ProjectCard 
              title="VIH Developer Portal" 
              description="A custom-built portal for enterprises to select themes and colors for embedded app SDKs." 
              category="Simplicity Labs"
              href="/projects"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, category, href }: { title: string, description: string, category: string, href: string }) {
  return (
    <Link href={href} className="group relative block p-8 rounded-3xl border border-border/40 hover:border-primary/50 transition-all overflow-hidden bg-background">
      <div className="space-y-4 relative z-10">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{category}</span>
        <h3 className="text-2xl font-bold group-hover:translate-x-1 transition-transform">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-6 h-6" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}
