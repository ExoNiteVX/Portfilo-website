"use client"

import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const API_BASE_URL = "http://127.0.0.1:5000"

function getSessionId(): string {
  if (typeof window === "undefined") return "server"
  let sessionId = sessionStorage.getItem("exobot_session")
  if (!sessionId) {
    sessionId = `session_${Date.now()}`
    sessionStorage.setItem("exobot_session", sessionId)
  }
  return sessionId
}

// Add this inside your ExoBot component, before the handleSend function

useEffect(() => {
  // 1. Function to ping the server
  const wakeUpServer = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/health`);
      if (res.ok) {
        setIsOnline(true);
        console.log("Backend is awake! 🚀");
      }
    } catch (err) {
      setIsOnline(false);
      console.log("Backend is still sleeping... 💤");
    }
  };

  // 2. Run it immediately when the page loads
  wakeUpServer();

  // 3. SET THE ALARM: Ping every 45 seconds (45000 milliseconds)
  // This prevents Render from turning off your server while someone is on your site.
  const interval = setInterval(wakeUpServer, 45000);

  // 4. Clean up the alarm if the user leaves the page
  return () => clearInterval(interval);
}, []);

export function ExoBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "System initialized. How can I assist you?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Only scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // EFFECT 1: Check server only ONCE on mount
  useEffect(() => {
    const checkServer = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/health`)
        if (res.ok) setIsOnline(true)
      } catch (err) {
        setIsOnline(false)
      }
    }
    checkServer()
  }, []) // Empty array [] means "Only run once when the page loads"

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    // Update state immediately for UI responsiveness
    setMessages((prev) => [...prev, userMsg])
    const textToSend = inputValue
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          session_id: getSessionId(),
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        const botMsg: Message = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMsg])
      }
    } catch (error) {
      console.error("Fetch Error:", error)
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "Connection lost. Please check if the Flask server is running.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <div className={`fixed bottom-20 right-4 z-50 w-full max-w-[350px] transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div className="bg-card border border-primary/30 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[450px]">
          <div className="p-4 border-b border-primary/20 bg-secondary/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className={`w-5 h-5 ${isOnline ? "text-primary" : "text-muted-foreground"}`} />
              <div>
                <p className="text-sm font-bold">ExoBot v2.0</p>
                <p className="text-[10px] uppercase">{isOnline ? "● Online" : "○ Offline"}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}><X className="w-4 h-4"/></Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/30 scrollbar-hide">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-xs ${m.sender === "user" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-secondary border border-primary/10"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[10px] text-primary animate-pulse ml-2">ExoBot is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-secondary/20 border-t border-primary/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask something..."
                className="flex-1 bg-background border border-primary/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary transition-all"
              />
              <Button onClick={handleSend} size="icon" className="h-8 w-8 transition-transform active:scale-95"><Send className="w-4 h-4"/></Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>
    </>
  )
}
