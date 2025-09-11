"use client"

import { useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { ContactForm } from "@/components/contact-form"
import { Mail, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 150)
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        <section className="aesthetic-section">
          <div className="fade-in">
            <h1 className="aesthetic-heading">Get In Touch</h1>
            <p className="aesthetic-body text-xl max-w-3xl">
              Ready to start your project? We'd love to hear about your ideas and discuss how we can help bring them to
              life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            <div className="fade-in">
              <h2 className="aesthetic-subheading">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:hello@avalongroup.tech" className="aesthetic-link text-lg">
                      hello@avalongroup.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                    <p className="aesthetic-body">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="aesthetic-body">Based in Bangalore, serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
