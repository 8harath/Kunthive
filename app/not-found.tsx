"use client"

import { useState } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"

export default function NotFound() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation
        expanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded(!sidebarExpanded)}
        currentPage=""
      />

      <main className={`smooth-transition ${sidebarExpanded ? "content-shifted" : "content-normal"}`}>
        <section className="aesthetic-section min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-8xl md:text-9xl font-bold mb-8">404</h1>
          <h2 className="aesthetic-subheading">Page Not Found</h2>
          <p className="aesthetic-body max-w-2xl">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <a href="/" className="aesthetic-link text-xl font-medium mt-8">
            ← Back to Home
          </a>
        </section>
      </main>
    </div>
  )
}
