"use client"

import { Award, BookOpen, CheckCircle, Globe } from "lucide-react"

const certifications = [
  {
    title: "SQL Certification",
    issuer: "Mimo",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Python Certification",
    issuer: "Mimo",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Python AI Development",
    issuer: "Mimo",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Game Development with AI",
    issuer: "Mimo",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Python Intermediate",
    issuer: "SoloLearn",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "SQL Intermediate",
    issuer: "SoloLearn",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Intro to LLM",
    issuer: "SoloLearn",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "ML for Beginners",
    issuer: "SoloLearn",
    status: "VERIFIED",
    date: "2024",
  },
  {
    title: "Information Security",
    issuer: "Cursa",
    status: "VERIFIED",
    date: "2024",
  },
]

const achievements = [
  {
    title: "IELTS Band 7.0",
    description: "English language proficiency certification",
    icon: Globe,
  },
  {
    title: "Continuous Learner",
    description: "Actively pursuing new certifications and skills",
    icon: BookOpen,
  },
  {
    title: "Project Builder",
    description: "Multiple completed backend projects on GitHub",
    icon: CheckCircle,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-primary text-xs sm:text-sm">04.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">CREDENTIALS_VAULT</h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
            {">"} cat /credentials/verified.log
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              CERTIFICATIONS
            </h3>

            <div className="space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
              {certifications.map((cert, index) => (
                <div
                  key={`${cert.title}-${cert.issuer}`}
                  className="bg-card border border-primary/20 p-3 sm:p-4 hover:border-primary/50 transition-all group touch-manipulation"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs text-primary mb-0.5 sm:mb-1">
                        [{String(index + 1).padStart(2, "0")}]
                      </p>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors truncate">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{cert.issuer}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 ${
                          cert.status === "VERIFIED"
                            ? "bg-primary/20 text-primary"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        {cert.status}
                      </span>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              ACHIEVEMENTS
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="bg-card border border-accent/20 p-3 sm:p-4 hover:border-accent/50 transition-all group touch-manipulation"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all shrink-0">
                      <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-foreground group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal log style */}
            <div className="mt-6 sm:mt-8 bg-background border border-primary/30 p-3 sm:p-4 font-mono text-[10px] sm:text-xs">
              <p className="text-muted-foreground">
                <span className="text-primary">[LOG]</span> Credential verification complete.
              </p>
              <p className="text-muted-foreground mt-1">
                <span className="text-primary">[LOG]</span> All certifications validated.
              </p>
              <p className="text-primary mt-2">
                {">"} Status: CREDENTIALS VERIFIED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
