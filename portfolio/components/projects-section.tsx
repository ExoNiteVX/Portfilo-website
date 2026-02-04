"use client"

import { Github, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "EyeGuard AI",
    description: "A real-time AI system using Computer Vision to detect eye states (open/closed). Designed to prevent driver fatigue and monitor alertness using OpenCV and deep learning logic.",
    tech: ["Python", "OpenCV", "AI", "Computer Vision"],
    github: "https://github.com/ExoNiteVX/EyeGuard-AI-Real-Time-Eye-State-Detection",
    demo: null,
  },
  {
    title: "Multilingual Food Bot",
    description: "A professional-grade ordering system supporting multiple languages. Features complex state management for handling menus, categories, and user orders.",
    tech: ["Python", "aiogram", "i18n", "SQLite"],
    github: "https://github.com/ExoNiteVX/Multilingual-Telegram-Food-Bot",
    demo: null,
  },
  {
    title: "Texnomart Shop Bot & Scraper",
    description: "A dual-system project: A high-speed web scraper to extract product data and a Telegram bot to serve that data as a functional mobile storefront.",
    tech: ["Python", "BeautifulSoup", "aiogram", "Data Mining"],
    github: "https://github.com/ExoNiteVX/texno-scraper",
    demo: null,
  },
  {
    title: "Texnomart-Telegram-Shop-Bot",
    description: "Full e-commerce bot simulation allowing users to browse tech products, manage carts, and simulate checkout processes via Telegram.",
    tech: ["Python", "aiogram", "SQL", "Automation"],
    github: "https://github.com/ExoNiteVX/Texnomart-Telegram-Shop-Bot",
    demo: null,
  },
  {
    title: "Clash Utility Bot",
    description: "An automation tool for the Clash community that retrieves game-specific data and provides community management features.",
    tech: ["Python", "aiogram", "APIs", "JSON"],
    github: "https://github.com/ExoNiteVX/clash-telegram-bot",
    demo: null,
  },
  {
    title: "Telegram Bot Framework",
    description: "A comprehensive core for building scalable Telegram bots. Features modular handler architecture, command processing, and seamless API integration for custom automations.",
    tech: ["Python", "aiogram", "API Integration", "Automation"],
    github: "https://github.com/ExoNiteVX/telegram-bot",
    demo: null,
  }, 
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.05)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-primary text-xs sm:text-sm">03.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">PROJECT_ARCHIVE</h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
            {">"} ls -la ~/projects/ | grep "completed"
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden touch-manipulation"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <div className="flex gap-2 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        aria-label="View source code"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-muted-foreground hover:text-accent transition-colors p-1"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  <span className="text-primary/50 text-xs sm:text-sm">[{String(index + 1).padStart(2, "0")}]</span>{" "}
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors" />
            </div>
          ))}
        </div>

        {/* View more link */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://github.com/ExoNiteVX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:neon-text transition-all touch-manipulation py-2"
          >
            <span>{">"} VIEW_ALL_REPOSITORIES</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
