"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Home, Code, FolderOpen, Users, Mail, Menu, X } from "lucide-react"

interface NavigationItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "services", label: "Services", icon: Code, href: "/services" },
  { id: "projects", label: "Projects", icon: FolderOpen, href: "/projects" },
  { id: "about", label: "About", icon: Users, href: "/about" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
]

export function SidebarNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    router.push(href)
    setIsMobileOpen(false)
  }

  const getCurrentPageFromPath = () => {
    if (pathname === "/") return "home"
    return pathname.slice(1) // Remove leading slash
  }

  const activePage = getCurrentPageFromPath()

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 bg-accent text-accent-foreground hover:scale-110 smooth-transition"
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-12">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-6 text-2xl font-medium smooth-transition hover:scale-110 ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  <Icon size={28} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      )}

      <aside
        className={`fixed left-0 top-0 h-full bg-sidebar z-30 hidden md:block smooth-transition border-r-2 border-accent ${
          isHovered ? "sidebar-expanded" : "sidebar-collapsed"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center h-20 border-b border-accent/20">
          {isHovered ? (
            <div className="text-center opacity-0 animate-fade-in">
              <h2 className="text-xl font-bold text-accent">AvalonGroup</h2>
              <p className="text-xs text-foreground/60">Web Solutions</p>
            </div>
          ) : (
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-background font-bold text-sm">A</span>
            </div>
          )}
        </div>

        <nav className="flex flex-col h-full pt-4">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center px-6 py-6 smooth-transition group relative ${
                  isActive
                    ? "text-sidebar-primary bg-sidebar-accent/10"
                    : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent/5"
                }`}
                title={!isHovered ? item.label : undefined}
              >
                <Icon
                  size={24}
                  className={`flex-shrink-0 group-hover:scale-110 smooth-transition ${
                    isActive ? "text-sidebar-primary" : "text-sidebar-foreground group-hover:text-sidebar-primary"
                  }`}
                />
                {isHovered && (
                  <span className="ml-6 text-lg font-medium whitespace-nowrap opacity-0 animate-fade-in">
                    {item.label}
                  </span>
                )}

                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-sidebar-primary"></div>
                )}
              </button>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          {isHovered && (
            <div className="text-sidebar-foreground/60 text-sm opacity-0 animate-fade-in">
              <p className="font-medium">Building together</p>
              <p>Bangalore, India</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
