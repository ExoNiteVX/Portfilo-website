"use client"

import { useState } from "react"

const skillCategories = [
  {
    id: "programming",
    name: "PROGRAMMING",
    icon: "</>",
    skills: [
      { name: "Python", level: 90, primary: true },
      { name: "SQL", level: 85, primary: true },
      { name: "JavaScript", level: 60 },
      { name: "Bash", level: 55 },
    ],
  },
  {
    id: "backend",
    name: "BACKEND_&_WEB",
    icon: "{}",
    skills: [
      { name: "Django", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Authentication", level: 75 },
      { name: "CRUD Systems", level: 90 },
      { name: "Backend Architecture", level: 70 },
    ],
  },
  {
    id: "databases",
    name: "DATABASES",
    icon: "DB",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 90 },
      { name: "Database Design", level: 75 },
      { name: "Query Optimization", level: 70 },
    ],
  },
  {
    id: "ai",
    name: "AI_&_DATA",
    icon: "AI",
    skills: [
      { name: "Python for AI", level: 65 },
      { name: "ML Fundamentals", level: 55 },
      { name: "API Integration", level: 70 },
      { name: "Data Modeling", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "TOOLS",
    icon: "#",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Linux", level: 70 },
      { name: "Virtual Environments", level: 90 },
      { name: "Debugging", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("programming")

  const currentCategory = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-primary text-xs sm:text-sm">02.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">SKILL_MATRIX</h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
            {">"} python3 -c "import skills; skills.list_all()"
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            {/* Mobile: Horizontal scroll */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-2 scrollbar-hide">
              {skillCategories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap lg:w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm transition-all flex items-center gap-2 sm:gap-3 touch-manipulation shrink-0 ${
                    activeCategory === category.id
                      ? "bg-primary/10 border-b-2 lg:border-b-0 lg:border-l-2 border-primary text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary border-b-2 lg:border-b-0 lg:border-l-2 border-transparent"
                  }`}
                >
                  <span className="text-sm sm:text-lg">{category.icon}</span>
                  <span className="tracking-wider">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-primary/30 p-4 sm:p-6">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-primary/20">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
                <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-muted-foreground truncate">
                  module://{currentCategory?.name.toLowerCase()}
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {currentCategory?.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm text-foreground flex items-center gap-1.5 sm:gap-2">
                        <span className="text-primary">[{String(index + 1).padStart(2, "0")}]</span>
                        {skill.name}
                        {"primary" in skill && skill.primary && (
                          <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-primary/20 text-primary">PRIMARY</span>
                        )}
                      </span>
                      <span className="text-[10px] sm:text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-secondary/50 overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500 group-hover:shadow-[0_0_10px_oklch(0.75_0.2_145)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-primary/20 text-[10px] sm:text-xs text-muted-foreground">
                <span className="text-primary">[INFO]</span> Skills actively maintained. 
                Last update: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
