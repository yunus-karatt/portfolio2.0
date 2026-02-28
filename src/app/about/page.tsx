import { Briefcase, GraduationCap, Code2, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-8 md:px-12 py-24 space-y-32">
      {/* Intro */}
      <section className="max-w-4xl mx-auto space-y-10 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic">THE STORY.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          I'm <span className="text-foreground font-bold">Yunus Karatt</span>. My transition into software engineering was fueled by a drive to build complex, high-performance systems. I specialize in leading frontend architecture for enterprise cloud platforms.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-5xl mx-auto space-y-20">
        <h2 className="text-4xl font-black tracking-tighter italic">TIMELINE.</h2>
        
        <div className="space-y-16 relative before:absolute before:inset-0 before:left-8 before:w-px before:bg-border before:hidden md:before:block">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative md:pl-28 group">
              <div className="absolute left-6 top-1 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-125 transition-transform shadow-sm" />
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-3xl font-bold tracking-tight">{event.title}</h3>
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground bg-muted px-4 py-2 rounded-xl">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                   {event.icon} <span>{event.company}</span>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto space-y-12 bg-muted/20 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-border/40">
        <h2 className="text-4xl font-black text-center tracking-tighter italic">THE STACK.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2 md:gap-4 p-6 md:p-8 bg-background rounded-[2rem] md:rounded-[2.5rem] border border-border/40 hover:border-primary/30 hover:shadow-2xl transition-all group">
              <span className="text-lg md:text-xl font-bold group-hover:scale-110 transition-transform">{skill.name}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const timelineEvents = [
  {
    title: "Software Engineer ",
    company: "Pinnacle Tele Services Ltd",
    date: "November 2025 — Present",
    icon: <Rocket className="w-5 h-5" />,
    description: "Leading the frontend team in developing high-performance web applications. Working extensively with React, FastAPI, and PostgreSQL to deliver scalable solutions."
  },
  {
    title: "Lead Frontend Developer",
    company: "Mizzle (under Neogen Technology)",
    date: "March 2024 — October 2025",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Architected an Enterprise Cloud Platform featuring AWS-like infrastructure and project management dashboards. Developed the AI-powered 'Mizzle Mate' assistant. Specialized in React, TSX, and Tailwind. Integrated Web3 protocols for community portals, wallet connectivity, and DAO governance."
  },
  {
    title: "Frontend Developer",
    company: "Simplicity Labs",
    date: "December 2023 — March 2024",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Developed the VIH Messenger Developer Portal, allowing enterprises to customize theme SDKs for embedded integration."
  },
  {
    title: "Self-taught Engineering Journey",
    company: "Brototype & Independent Study",
    date: "2023 — 2024",
    icon: <Code2 className="w-5 h-5" />,
    description: "Intensive self-driven transition into software engineering. Mastered the MERN stack and built foundational projects like a custom E-commerce platform and state-managed React applications."
  },
  {
    title: "Analytical Foundation",
    company: "BCom Background",
    date: "2016 — 2019",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Leveraged the analytical and organizational skills developed during BCom studies to transition into professional software engineering."
  }
];

const skills = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "SEO Optimization", level: "Advanced" },
];
