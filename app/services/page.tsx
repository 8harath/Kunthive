"use client"

import { useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Code, Palette, Search, Zap } from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 150)
    })
  }, [])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Landing Pages & Portfolios",
      description:
        "Custom-designed websites that showcase your work and convert visitors into clients. Optimized for performance and professional presentation.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full-Stack Applications",
      description:
        "Complete web applications with backend functionality, user authentication, databases, and API integrations.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "Technical SEO audits and implementation, content optimization, and meta-tag setup to improve your search visibility.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User research and interface design, prototyping and user testing to create intuitive digital experiences.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        <section className="aesthetic-section">
          <div className="fade-in">
            <h1 className="aesthetic-heading">What We Build</h1>
            <p className="aesthetic-body text-xl max-w-3xl">
              We specialize in creating modern, efficient web solutions that help businesses and individuals establish
              their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {services.map((service, index) => (
              <article key={index} className="fade-in group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-accent group-hover:scale-110 smooth-transition">{service.icon}</div>
                  <div>
                    <h3 className="aesthetic-subheading mb-4">{service.title}</h3>
                    <p className="aesthetic-body">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="fade-in mt-20 text-center">
            <a href="/contact" className="aesthetic-link text-xl font-medium">
              Ready to start your project? →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
