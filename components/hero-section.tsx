"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown } from "lucide-react"

const titles = [
  "Backend Developer",
  "Python Specialist",
  "SQL Engineer",
  "API Architect",
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  // Code rain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars = "{}[]()<>=/+*-_:;,.!?@#$%^&|~`0123456789ABCDEFdef"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(8, 10, 15, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#22c55e"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.1})`
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Code Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        {/* Terminal header */}
        <div className="inline-block mb-6 sm:mb-8 text-left w-full max-w-md mx-auto">
          <div className="flex items-center gap-2 bg-secondary/50 px-3 sm:px-4 py-2 rounded-t border border-primary/30 border-b-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
            <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-muted-foreground truncate">terminal@exonitevx:~</span>
          </div>
          <div className="bg-background/80 border border-primary/30 p-3 sm:p-4 rounded-b">
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-2">
              <span className="text-primary">$</span> python3 init_developer.py
            </p>
            <p className="text-[10px] sm:text-xs text-primary mb-2 sm:mb-4">[SUCCESS] Backend environment initialized.</p>
          </div>
        </div>

        {/* Main title with glitch effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 sm:mb-6 glitch">
          <span className="text-foreground">EXO</span>
          <span className="text-primary neon-text">NITE</span>
          <span className="text-foreground">VX</span>
        </h1>

        {/* Typing subtitle */}
        <div className="h-7 sm:h-8 mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl text-accent tracking-wider">
            {">"} {displayText}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Building scalable backend systems with Python & SQL. Clean code, reliable APIs, continuous improvement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-bold text-xs sm:text-sm tracking-wider hover:bg-primary/90 transition-all neon-border hover:scale-105 touch-manipulation"
          >
            {"["}VIEW_PROJECTS{"]"}
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 border border-primary text-primary font-bold text-xs sm:text-sm tracking-wider hover:bg-primary/10 transition-all touch-manipulation"
          >
            {"["}CONTACT_ME{"]"}
          </a>
        </div>

        {/* Status indicators */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            STATUS: ONLINE
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            AVAILABLE FOR HIRE
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce touch-manipulation"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 text-primary/20 text-[10px] hidden lg:block">
        <pre>{`
┌──────────────┐
│ PYTHON 3.12  │
│ PostgreSQL   │
│ REST APIs    │
└──────────────┘
        `}</pre>
      </div>
      <div className="absolute bottom-20 right-4 text-primary/20 text-[10px] hidden lg:block">
        <pre>{`
╔══════════════╗
║ BUILD_READY  ║
║ ALL_TESTS    ║
║ PASSED       ║
╚══════════════╝
        `}</pre>
      </div>
    </section>
  )
}
