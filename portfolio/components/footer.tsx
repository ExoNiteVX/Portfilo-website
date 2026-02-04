import { Github, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold tracking-wider text-sm">EXONITEVX</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center">
            <span className="text-primary">$</span> Designed and built by ExoNiteVX
            <span className="mx-2">|</span>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* GitHub link */}
          <a
            href="https://github.com/ExoNiteVX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>

        {/* Terminal-style footer message */}
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-xs text-primary/50 font-mono">
            {">"} echo "Thanks for visiting. Stay secure." | cowsay
          </p>
        </div>
      </div>
    </footer>
  )
}
