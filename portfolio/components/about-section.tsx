"use client"

import { Database, Terminal, Code, Server, Cpu, Layers } from "lucide-react"

const expertise = [
  {
    icon: Code,
    title: "Python Development",
    description: "Building robust applications with clean, maintainable code",
  },
  {
    icon: Database,
    title: "SQL & Databases",
    description: "Designing efficient schemas and optimized queries",
  },
  {
    icon: Server,
    title: "REST APIs",
    description: "Creating reliable, well-documented API endpoints",
  },
  {
    icon: Layers,
    title: "Backend Architecture",
    description: "Structuring scalable and maintainable systems",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Working with ML models and AI-powered features",
  },
  {
    icon: Terminal,
    title: "DevOps Basics",
    description: "Git workflows, Linux, and deployment processes",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-primary text-xs sm:text-sm">01.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">ABOUT_ME</h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
            {">"} cat /home/exonitevx/profile.txt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Bio Panel */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card border border-primary/30 p-4 sm:p-6 relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-primary/20">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">developer_profile.py</span>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary">$</span> I am <span className="text-foreground font-bold">ExoNiteVX</span>, 
                  a backend developer focused on building reliable, scalable systems using Python and SQL.
                </p>
                <p>
                  <span className="text-primary">$</span> I enjoy designing clean APIs, working with databases, 
                  and continuously improving my engineering skills through real projects and certifications.
                </p>
                <p>
                  <span className="text-primary">$</span> Currently expanding my knowledge in AI integration, 
                  system design, and modern backend architecture patterns.
                </p>
                <p className="text-primary text-[10px] sm:text-xs pt-2 sm:pt-4">
                  [LOG] Developer profile loaded. Ready for collaboration.
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-b-2 border-primary/30" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { label: "PROJECTS", value: "10+" },
                { label: "CERTS", value: "8+" },
                { label: "FOCUS", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/50 border border-primary/20 p-2 sm:p-4 text-center"
                >
                  <p className="text-lg sm:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card border border-primary/20 p-3 sm:p-4 hover:border-primary/50 transition-all hover:bg-primary/5 touch-manipulation"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-foreground mb-0.5 sm:mb-1">
                      {String(index + 1).padStart(2, "0")}. {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
