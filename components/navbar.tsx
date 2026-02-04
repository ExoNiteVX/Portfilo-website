"use client"

import { useState, useEffect } from "react"
import { Menu, X, Terminal } from "lucide-react"

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#certifications", label: "CERTS" },
  { href: "#contact", label: "CONTACT" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:drop-shadow-[0_0_10px_oklch(0.75_0.2_145)]" />
            <span className="text-primary font-bold tracking-wider text-xs sm:text-sm md:text-base group-hover:neon-text transition-all">
              EXONITEVX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2 lg:px-3 py-2 text-[10px] lg:text-xs tracking-wider transition-all relative ${
                  activeSection === link.href.slice(1)
                    ? "text-primary neon-text"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <span className="absolute inset-x-0 bottom-0 h-px bg-primary" />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-background/98 backdrop-blur-sm border-t border-primary/30 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm tracking-wider transition-all touch-manipulation ${
                activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/10 border-l-2 border-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-2 border-transparent"
              }`}
            >
              {">"} {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
