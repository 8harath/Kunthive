"use client"

import { useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Users, Target, Heart, Award } from "lucide-react"

export default function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 150)
    })
  }, [])

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparent Process",
      description: "Clear project scopes and honest communication throughout",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "We grow with every project and share that growth with clients",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Value First",
      description: "Free domains and student-friendly rates without compromising quality",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Focused",
      description: "Small team means personal attention to every detail",
    },
  ]

  const benefits = [
    "Free .tech domain with every project",
    "Direct communication with builders (no project managers)",
    "Flexible timelines that work for students and clients",
    "Competitive rates without compromising quality",
    "Based in Bangalore tech hub, serving clients globally",
  ]

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        <section className="aesthetic-section">
          <div className="fade-in">
            <h1 className="aesthetic-heading">Our Story</h1>
            <div className="max-w-4xl space-y-8">
              <p className="aesthetic-body text-xl">
                We're a collective of curious students based in Bangalore who believe in learning while building.
                Started as a way to fund our education, AvalonGroup has become our platform for real-world experience
                and meaningful client relationships.
              </p>
            </div>
          </div>

          <div className="fade-in mt-20">
            <h2 className="aesthetic-subheading">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {values.map((value, index) => (
                <div key={index} className="fade-in group">
                  <div className="flex items-start gap-4">
                    <div className="text-accent group-hover:scale-110 smooth-transition">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="aesthetic-body">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in mt-20">
            <h2 className="aesthetic-subheading">Why Choose Us</h2>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="fade-in flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent"></div>
                  <p className="aesthetic-body">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in mt-20 text-center">
            <a href="/contact" className="aesthetic-link text-xl font-medium">
              Ready to work together? →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
