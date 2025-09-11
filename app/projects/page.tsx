"use client"

import { useEffect } from "react"
import { SidebarNavigation } from "@/components/sidebar-navigation"

export default function ProjectsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible")
      }, index * 200)
    })
  }, [])

  const projects = [
    {
      title: "Real Estate Platform",
      challenge:
        "A real estate company needed a modern property listing website to showcase their properties effectively and increase online inquiries.",
      solution:
        "Built a custom property showcase with advanced search functionality, responsive design, and inquiry management system using React, Node.js, and MongoDB.",
      outcome: "40% increase in online inquiries and 25% reduction in bounce rate within the first month of launch.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "T-Shirt Brand E-commerce",
      challenge:
        "Fashion startup needed to launch an online store with custom product configurator for personalized t-shirt designs.",
      solution:
        "Developed an e-commerce platform with design customization tools, payment integration, and inventory management using Next.js, Stripe, and PostgreSQL.",
      outcome:
        "Successful product launch with 200+ orders in the first month and seamless user experience for custom designs.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "UX Designer Portfolio",
      challenge: "UX designer needed an effective portfolio website to showcase design work and attract new clients.",
      solution:
        "Created a minimalist portfolio with case study focus, optimized loading, and mobile-responsive design using modern web technologies.",
      outcome: "3 new client acquisitions within 2 months and improved professional online presence.",
      tech: ["React", "Framer Motion", "Netlify", "Figma API"],
    },
    {
      title: "Photographer Portfolio",
      challenge:
        "Professional photographer needed an image-heavy portfolio with fast loading times and gallery functionality.",
      solution:
        "Built an optimized gallery with lazy loading, image compression, and content management using Gatsby, Netlify CMS, and Cloudinary.",
      outcome: "Improved page speed by 60% and enhanced user engagement with smooth gallery navigation.",
      tech: ["Gatsby", "Netlify CMS", "Cloudinary", "GraphQL"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        <section className="aesthetic-section">
          <div className="fade-in">
            <h1 className="aesthetic-heading">Recent Work</h1>
            <p className="aesthetic-body text-xl max-w-3xl">
              Here are some of the projects we've worked on recently. Each one taught us something new and helped us
              grow as developers.
            </p>
          </div>

          <div className="space-y-20 mt-16">
            {projects.map((project, index) => (
              <article key={index} className="fade-in group">
                <div className="border-l-2 border-accent pl-8 hover:pl-12 smooth-transition">
                  <h3 className="aesthetic-subheading group-hover:text-accent smooth-transition">{project.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                      <p className="aesthetic-body">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Solution</h4>
                      <p className="aesthetic-body">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Outcome</h4>
                      <p className="aesthetic-body">{project.outcome}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="fade-in mt-20 text-center">
            <a href="/contact" className="aesthetic-link text-xl font-medium">
              Want to work with us? →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
