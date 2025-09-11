"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  company: string
  budget: string
  description: string
  timeline: string
  website: string // honeypot field
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    description: "",
    timeline: "",
    website: "", // honeypot
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Name is required" })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Email is required" })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" })
      return false
    }
    if (!formData.description.trim()) {
      setStatus({ type: "error", message: "Project description is required" })
      return false
    }
    // Check honeypot field
    if (formData.website) {
      setStatus({ type: "error", message: "Spam detected" })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus({ type: "loading", message: "Sending message..." })

    try {
      // Send form data to server action for EmailJS processing
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thanks! We'll get back to you within 24 hours.",
        })

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          description: "",
          timeline: "",
          website: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly at hello@avalongroup.tech",
      })
    }
  }

  return (
    <div className="fade-in">
      <h2 className="aesthetic-subheading">Project Inquiry</h2>

      {status.message && (
        <div
          className={`mb-8 p-6 text-lg smooth-transition ${
            status.type === "success"
              ? "bg-accent text-accent-foreground"
              : status.type === "error"
                ? "bg-foreground text-background"
                : "bg-muted text-foreground"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-3">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={status.type === "loading"}
              className="w-full p-4 bg-transparent border-b-2 border-foreground text-foreground text-lg focus:outline-none focus:border-accent smooth-transition disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-3">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={status.type === "loading"}
              className="w-full p-4 bg-transparent border-b-2 border-foreground text-foreground text-lg focus:outline-none focus:border-accent smooth-transition disabled:opacity-50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="company" className="block text-lg font-medium mb-3">
              Company/Project Type
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              disabled={status.type === "loading"}
              className="w-full p-4 bg-transparent border-b-2 border-foreground text-foreground text-lg focus:outline-none focus:border-accent smooth-transition disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="timeline" className="block text-lg font-medium mb-3">
              Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              disabled={status.type === "loading"}
              placeholder="e.g., 2-3 weeks, flexible, ASAP"
              className="w-full p-4 bg-transparent border-b-2 border-foreground text-foreground text-lg focus:outline-none focus:border-accent smooth-transition disabled:opacity-50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium mb-3">
            Project Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={6}
            disabled={status.type === "loading"}
            className="w-full p-4 bg-transparent border-2 border-foreground text-foreground text-lg focus:outline-none focus:border-accent smooth-transition resize-vertical disabled:opacity-50"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="aesthetic-link text-xl font-medium py-6 px-12 bg-accent text-accent-foreground hover:bg-foreground hover:text-background smooth-transition disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span className="group-hover:scale-105 smooth-transition inline-block">
            {status.type === "loading" ? "Sending..." : "Send Message →"}
          </span>
        </button>
      </form>
    </div>
  )
}
