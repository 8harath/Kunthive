"use client"

import { motion } from "framer-motion"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Code2,
  Palette,
  Globe,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  const projects = [
    {
      title: "Real Estate Platform",
      category: "Web Application",
      challenge:
        "A real estate company needed a modern property listing website to showcase their properties effectively and increase online inquiries.",
      solution:
        "Built a custom property showcase with advanced search functionality, responsive design, and inquiry management system using React, Node.js, and MongoDB.",
      outcome: "40% increase in online inquiries and 25% reduction in bounce rate within the first month of launch.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      metrics: [
        { label: "Inquiries", value: "+40%" },
        { label: "Bounce Rate", value: "-25%" },
        { label: "Page Speed", value: "95/100" },
      ],
    },
    {
      title: "T-Shirt Brand E-commerce",
      category: "E-commerce",
      challenge:
        "Fashion startup needed to launch an online store with custom product configurator for personalized t-shirt designs.",
      solution:
        "Developed an e-commerce platform with design customization tools, payment integration, and inventory management using Next.js, Stripe, and PostgreSQL.",
      outcome:
        "Successful product launch with 200+ orders in the first month and seamless user experience for custom designs.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      metrics: [
        { label: "Orders", value: "200+" },
        { label: "Conversion", value: "3.2%" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
    {
      title: "UX Designer Portfolio",
      category: "Portfolio",
      challenge: "UX designer needed an effective portfolio website to showcase design work and attract new clients.",
      solution:
        "Created a minimalist portfolio with case study focus, optimized loading, and mobile-responsive design using modern web technologies.",
      outcome: "3 new client acquisitions within 2 months and improved professional online presence.",
      tech: ["React", "Framer Motion", "Netlify", "Figma API"],
      metrics: [
        { label: "New Clients", value: "3" },
        { label: "Load Time", value: "1.2s" },
        { label: "Mobile Score", value: "100/100" },
      ],
    },
    {
      title: "Photographer Portfolio",
      category: "Portfolio",
      challenge:
        "Professional photographer needed an image-heavy portfolio with fast loading times and gallery functionality.",
      solution:
        "Built an optimized gallery with lazy loading, image compression, and content management using Gatsby, Netlify CMS, and Cloudinary.",
      outcome: "Improved page speed by 60% and enhanced user engagement with smooth gallery navigation.",
      tech: ["Gatsby", "Netlify CMS", "Cloudinary", "GraphQL"],
      metrics: [
        { label: "Speed Improvement", value: "+60%" },
        { label: "Image Quality", value: "Perfect" },
        { label: "SEO Score", value: "98/100" },
      ],
    },
  ]

  const capabilities = [
    { icon: Code2, label: "Clean Code" },
    { icon: Palette, label: "Beautiful Design" },
    { icon: Zap, label: "Fast Performance" },
    { icon: Globe, label: "SEO Optimized" },
    { icon: Users, label: "User Focused" },
    { icon: Shield, label: "Secure & Reliable" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      <main className="ml-20 smooth-transition">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Our Work</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8"
            >
              Projects that
              <br />
              <span className="text-accent">make an impact</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
            >
              Here's a selection of recent work. Each project taught us something new and helped us grow as
              developers while delivering real value to our clients.
            </motion.p>
          </motion.div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 border-y border-foreground/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <capability.icon className="w-8 h-8 text-accent" />
                  <span className="text-sm font-medium text-foreground/70">{capability.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-32">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="group"
              >
                {/* Project Header */}
                <motion.div variants={fadeInUp} className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-accent">{project.category}</span>
                    <div className="h-px flex-1 bg-accent/20" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                </motion.div>

                {/* Project Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Details */}
                  <div className="space-y-8">
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        Challenge
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{project.challenge}</p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        Solution
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        Outcome
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{project.outcome}</p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-medium hover:border-accent/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Metrics */}
                  <motion.div variants={scaleIn} className="lg:pl-12">
                    <div className="sticky top-32 p-8 border-2 border-foreground/10 rounded-3xl bg-foreground/5 hover:border-accent/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-8">Key Metrics</h3>
                      <div className="space-y-6">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-end justify-between pb-4 border-b border-foreground/10 last:border-0">
                            <span className="text-sm text-foreground/60">{metric.label}</span>
                            <span className="text-3xl font-bold text-accent">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-foreground text-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Track Record</h2>
              <p className="text-xl text-background/70">Numbers that speak to our commitment</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: "50+", label: "Projects Delivered" },
                { icon: Users, value: "98%", label: "Client Satisfaction" },
                { icon: Zap, value: "24h", label: "Average Response" },
                { icon: Globe, value: "100%", label: "On-Time Delivery" },
              ].map((stat, index) => (
                <motion.div key={index} variants={scaleIn} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Want to be our next success story?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              Let's build something amazing together
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-xl rounded-full hover:bg-accent hover:text-background transition-all duration-300 shadow-2xl hover:shadow-accent/50 hover:scale-105"
            >
              Start Your Project
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
