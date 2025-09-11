"use client"

import { useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { CheckCircle, Globe, MessageSquare, Clock, DollarSign, MapPin } from "lucide-react"

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 100)
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        {/* Hero Section */}
        <section className="aesthetic-section min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="fade-in">
              <h1 className="aesthetic-heading mb-8">AvalonGroup</h1>
              <p className="text-2xl md:text-3xl text-accent mb-12 font-medium">
                Building portfolios, learning together
              </p>
            </div>

            <div className="fade-in max-w-3xl">
              <p className="aesthetic-body">
                We're a group of curious students in Bangalore creating affordable web solutions. Every project helps us
                grow while delivering real value to our clients.
              </p>
              <p className="aesthetic-body">
                Student-driven web development with free domain inclusion, learning and growing alongside our clients.
              </p>

              <div className="flex gap-6 mt-12">
                <a href="/contact" className="aesthetic-link text-xl font-medium">
                  Start your project →
                </a>
                <a href="/projects" className="aesthetic-link text-xl font-medium">
                  View our work →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="aesthetic-section py-24">
          <div className="max-w-6xl">
            <div className="fade-in mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-xl text-foreground/80 max-w-3xl">
                We combine student innovation with professional delivery, offering unique advantages that traditional
                agencies can't match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <Globe className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Free .tech Domain</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Every project includes a complimentary .tech domain, giving your business a modern, professional
                      web presence from day one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <MessageSquare className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Work directly with the builders, not project managers. Get faster responses, clearer
                      communication, and better understanding of your vision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Flexible Timelines</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Student-friendly schedules that adapt to both academic calendars and client needs, ensuring
                      quality without rushing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <DollarSign className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Affordable pricing without compromising on quality. We deliver professional results at
                      student-friendly rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Bangalore Tech Hub</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Based in India's Silicon Valley, we bring cutting-edge tech knowledge while serving clients
                      globally with modern solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="fade-in group">
                <div className="flex items-start space-x-4 p-6 hover:bg-accent/5 smooth-transition rounded-lg">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Every project undergoes thorough testing and review. We're building our reputation, so your
                      success is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
