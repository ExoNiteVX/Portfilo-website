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

// --- IMPORTANT: Use your RENDER URL here for the live site ---
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://protfolio-backend-yekd.onrender.com"

function getSessionId(): string {
  if (typeof window === "undefined") return "server"
  let sessionId = sessionStorage.getItem("exobot_session")
  if (!sessionId) {
    sessionId = `session_${Date.now()}`
    sessionStorage.setItem("exobot_session", sessionId)
  }
  return sessionId
}

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

  // --- FIX: The useEffect MUST be inside the ExoBot function ---
  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/health`);
        if (res.ok) {
          setIsOnline(true);
          console.log("Backend is awake! 🚀");
        } else {
          setIsOnline(false);
        }
      } catch (err) {
        setIsOnline(false);
        console.log("Backend is still sleeping... 💤");
      }
    };

    wakeUpServer(); // Run immediately

    // Ping every 45 seconds to keep Render awake
    const interval = setInterval(wakeUpServer, 45000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

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
        text: "I'm having trouble connecting to my brain. Please wait a moment while I wake up.",
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
      {/* ... (Keep the rest of your UI/Return code exactly as you wrote it) ... */}
    </>
  )
}
