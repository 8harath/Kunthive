"use client"

import { motion } from "framer-motion"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import {
  Code2,
  Palette,
  Search,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies",
      features: [
        "React & Next.js development",
        "TypeScript for type safety",
        "Responsive, mobile-first design",
        "Progressive Web Apps (PWA)",
        "API integration & backend",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Interaction design",
        "Usability testing",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Get found on Google with technical and content SEO",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Structured data markup",
        "Performance optimization",
        "Content strategy",
      ],
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast websites that convert",
      features: [
        "Core Web Vitals optimization",
        "Image & asset optimization",
        "Code splitting & lazy loading",
        "CDN & caching strategies",
        "Lighthouse score optimization",
      ],
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Validate ideas quickly with MVPs",
      features: [
        "Quick turnaround (1-2 weeks)",
        "Essential features only",
        "Iterative development",
        "User feedback integration",
        "Scale-ready architecture",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Keep your site running smoothly",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Bug fixes & improvements",
        "Content updates",
        "24/7 uptime monitoring",
      ],
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your goals, audience, and requirements through detailed discussions.",
    },
    {
      number: "02",
      title: "Planning",
      description: "Create a clear roadmap with timelines, milestones, and deliverables.",
    },
    {
      number: "03",
      title: "Design",
      description: "Craft beautiful, functional designs that align with your brand and goals.",
    },
    {
      number: "04",
      title: "Development",
      description: "Build your project with clean code, best practices, and modern technologies.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing across devices, browsers, and performance benchmarks.",
    },
    {
      number: "06",
      title: "Launch",
      description: "Deploy your project with support and documentation for a smooth launch.",
    },
  ]

  const benefits = [
    { icon: Globe, text: "Free .tech domain included" },
    { icon: Users, text: "Direct communication with developers" },
    { icon: TrendingUp, text: "Competitive student-friendly rates" },
    { icon: CheckCircle, text: "Quality assurance & testing" },
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
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8"
            >
              What we
              <br />
              <span className="text-accent">build for you</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
            >
              From concept to deployment, we create digital experiences that captivate users and drive results.
              Every project gets our full attention and expertise.
            </motion.p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 bg-background border-2 border-foreground/10 rounded-3xl hover:border-accent/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 rounded-3xl" />

                  <div className="relative z-10">
                    <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-foreground text-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Process</h2>
              <p className="text-xl md:text-2xl text-background/70 max-w-3xl mx-auto">
                A proven workflow that delivers results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative p-8"
                >
                  <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-background/70 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Why Choose Us</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to start your project?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              Let's discuss how we can help bring your vision to life
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-xl rounded-full hover:bg-accent hover:text-background transition-all duration-300 shadow-2xl hover:shadow-accent/50 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
