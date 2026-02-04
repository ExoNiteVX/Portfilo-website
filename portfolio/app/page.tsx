import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ExoBot } from "@/components/exobot"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-30 z-50" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />

      {/* ExoBot Chat Assistant */}
      <ExoBot />
    </main>
  )
}
