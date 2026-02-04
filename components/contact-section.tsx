"use client"

import React, { useState, useEffect } from "react"
import { Github, Send, MessageSquare, MessageCircle } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ExoNiteVX", icon: Github, username: "@ExoNiteVX" },
  { name: "Portfolio Repo", href: "https://github.com/ExoNiteVX/Portfilo-website", icon: Github, username: "/Portfilo-website" },
  { name: "Discord", href: "#", icon: MessageCircle, username: "@ExoNiteVX" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  // --- 1. TRACK ANALYTICS ON LOAD ---
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_type: 'page_view', data: 'Contact Section Loaded' }),
    }).catch(() => console.log("Backend offline, analytics skipped."));
  }, []);

  // --- 2. REAL BACKEND SUBMISSION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Formatting the message so it looks clean in your DB
          message: `[CONTACT FORM] Name: ${formData.name} | Email: ${formData.email} | Msg: ${formData.message}`,
          session_id: formData.email || 'guest_user'
        }),
      })

      if (response.ok) {
        setStatus("sent")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch (err) {
      console.error("Connection failed:", err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.08)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-primary text-xs sm:text-sm">05.</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">CONTACT_PROTOCOL</h2>
            <div className="flex-1 h-px bg-primary/30" />
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">
            {">"} python3 send_message.py --to exonitevx
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Side */}
          <div className="bg-card border border-primary/30 p-4 sm:p-6 relative overflow-hidden order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-primary/20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] text-muted-foreground">message_form.py</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-[10px] text-primary mb-1.5">{">"} YOUR_NAME:</label>
                <input
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-primary/30 px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                  placeholder="ExoNite..."
                />
              </div>

              <div>
                <label className="block text-[10px] text-primary mb-1.5">{">"} YOUR_EMAIL:</label>
                <input
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-primary/30 px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] text-primary mb-1.5">{">"} MESSAGE:</label>
                <textarea
                  required rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-primary/30 px-3 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Transmission details..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 text-xs tracking-wider hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? "SENDING..." : 
                 status === "sent" ? "MESSAGE_SUCCESS" : 
                 status === "error" ? "ERROR_RETRY" : "SEND_MESSAGE"}
                {status !== "sending" && <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

          {/* Socials Side */}
          <div className="space-y-4 order-1 lg:order-2">
            <div className="bg-card border border-primary/30 p-4 sm:p-6">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">{">"}</span> DIRECT_CHANNELS
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-secondary/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <link.icon className="w-4 h-4 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate group-hover:text-primary">{link.name}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}