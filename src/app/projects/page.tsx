import Link from "next/link";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    title: "Mizzle Enterprise Cloud",
    description: "A comprehensive cloud infrastructure platform with AWS-like features. Built an AI-powered assistant, complex dashboard systems, and integrated Web3 community portals for DAO governance.",
    tech: ["React", "TypeScript", "Tailwind", "Web3", "AWS"],
    demo: "https://mizzle.io/",
    category: "Professional"
  },
  {
    title: "VIH Developer Portal",
    description: "Created for VIH Messenger. A sophisticated portal for enterprise clients to customize themes and branding for embedded SDKs. Focus on dynamic styling and enterprise scalability.",
    tech: ["React", "Custom CSS", "Theme Engine", "API Integration"],
    demo: "https://www.vihmessenger.com/",
    category: "Professional"
  },
  {
    title: "Sangati Live",
    description: "A lifestyle and community-focused project. Developed a modern, responsive interface for high-engagement user experiences.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://sangati.live/",
    category: "Freelance"
  },
  {
    title: "Village Data Project",
    description: "A confidential community data management system for charity and financial aid distribution. Built to streamline identifying eligible aid recipients.",
    tech: ["Node.js", "React", "MongoDB"],
    confidential: true,
    category: "Community"
  },
  {
    title: "Cabby Taxi App",
    description: "A full-stack taxi booking application with real-time tracking and automated dispatch systems. Features separate client and server architectures.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/yunus-karatt/cabby-client",
    category: "Personal / Learning"
  },
  {
    title: "E-commerce Platform",
    description: "A high-performance e-commerce platform built with Node.js and Handlebars. Features include user authentication and inventory management.",
    tech: ["Node.js", "Express", "MongoDB", "Handlebars"],
    github: "https://github.com/yunus-karatt/E-commerce",
    category: "Personal / Learning"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-8 md:px-12 py-24 space-y-20">
      <header className="max-w-4xl space-y-6">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic text-primary">THE WORKS.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          A selection of projects ranging from enterprise cloud systems to community-driven solutions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group flex flex-col p-10 rounded-[3rem] border border-border/40 hover:border-primary/30 transition-all bg-background hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_32px_64px_-16px_rgba(255,255,255,0.02)]">
            <div className="mb-8 flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-4 py-2 bg-muted rounded-xl">
                {project.category}
              </span>
              <div className="flex gap-3">
                {project.github && (
                  <Link href={project.github} className="p-3 hover:bg-muted rounded-2xl transition-all hover:scale-110" target="_blank"><Github className="w-5 h-5" /></Link>
                )}
                {project.demo && (
                  <Link href={project.demo} className="p-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-2xl transition-all hover:scale-110" target="_blank"><ExternalLink className="w-5 h-5" /></Link>
                )}
                {"confidential" in project && (
                  <div className="p-3 text-muted-foreground cursor-help" title="Confidential project - source code and demo not available">
                    <Lock className="w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-10 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto border-t border-border/40 pt-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-bold uppercase tracking-wider text-primary/60">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
