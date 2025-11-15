"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import {
  CheckCircle,
  Globe,
  MessageSquare,
  Clock,
  DollarSign,
  MapPin,
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Animation variants
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

  return (
    <div className="min-h-screen bg-background">
      <SidebarNavigation />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <main className="ml-20 smooth-transition">
        {/* Hero Section - Apple-inspired with gradient and animations */}
        <motion.section
          style={{ opacity, scale }}
          className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden px-6 md:px-12 lg:px-20"
        >
          {/* Animated background gradient orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="max-w-6xl relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Student Innovation Meets Professional Excellence</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
              >
                Building the
                <br />
                <span className="text-accent">future of web</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl leading-relaxed"
              >
                We're a collective of passionate students in Bangalore crafting exceptional web experiences.
                Every project is an opportunity to learn, innovate, and deliver value.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-lg rounded-full hover:bg-accent hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-foreground text-foreground font-semibold text-lg rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-8 pt-12 text-sm text-foreground/60"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Free .tech Domain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Mobile-First Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>SEO Optimized</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-accent rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-foreground/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
              { value: 24, suffix: "h", label: "Average Response" },
              { value: 100, suffix: "%", label: "Student Driven" },
            ].map((stat, index) => (
              <motion.div key={index} variants={scaleIn} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">What We Craft</h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                From concept to deployment, we build digital experiences that captivate and convert
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Web Development",
                  description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description: "Beautiful, intuitive interfaces designed with Apple-level attention to detail and user experience.",
                },
                {
                  icon: Rocket,
                  title: "Performance Optimization",
                  description: "Lightning-fast load times, SEO optimization, and perfect Lighthouse scores for maximum visibility.",
                },
                {
                  icon: Shield,
                  title: "Reliable Hosting",
                  description: "Secure, scalable hosting solutions with 99.9% uptime and automated backups for peace of mind.",
                },
                {
                  icon: Zap,
                  title: "Rapid Prototyping",
                  description: "Quick turnaround for MVPs and prototypes, perfect for startups and iterative development.",
                },
                {
                  icon: Users,
                  title: "Ongoing Support",
                  description: "Dedicated support and maintenance to keep your digital presence fresh and functioning flawlessly.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative p-8 bg-background border-2 border-foreground/10 rounded-3xl hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300 rounded-3xl" />

                  <div className="relative z-10">
                    <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-foreground text-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-xl md:text-2xl text-background/70 max-w-3xl mx-auto">
                Student innovation meets professional excellence for unbeatable value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Free .tech Domain",
                  description: "Every project includes a complimentary .tech domain, giving your business a modern web presence.",
                },
                {
                  icon: MessageSquare,
                  title: "Direct Communication",
                  description: "Work directly with the builders. Faster responses, clearer communication, better results.",
                },
                {
                  icon: Clock,
                  title: "Flexible Timelines",
                  description: "Adaptable schedules that balance quality delivery with reasonable timeframes.",
                },
                {
                  icon: DollarSign,
                  title: "Competitive Rates",
                  description: "Professional quality at student-friendly prices. Get more value for your investment.",
                },
                {
                  icon: MapPin,
                  title: "Bangalore Tech Hub",
                  description: "Located in India's Silicon Valley, bringing cutting-edge knowledge to every project.",
                },
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "Rigorous testing and code reviews. Your success builds our reputation.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="flex items-start gap-4 p-6 rounded-2xl hover:bg-background/5 transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-background/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Built on Trust</h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Every line of code, every design decision, every interaction reflects our commitment to excellence
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: TrendingUp,
                  title: "Proven Track Record",
                  description: "Consistent 5-star ratings and repeat clients speak to our reliability and quality.",
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  description: "Industry-standard security practices and reliable infrastructure protect your investment.",
                },
                {
                  icon: Sparkles,
                  title: "Continuous Innovation",
                  description: "Always learning, always improving, bringing the latest technologies to your projects.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center p-8 rounded-3xl border-2 border-foreground/10 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Animated background */}
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
              Ready to build something amazing?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed">
              Let's transform your vision into a digital reality. Free consultation, transparent pricing, exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-xl rounded-full hover:bg-accent hover:text-background transition-all duration-300 shadow-2xl hover:shadow-accent/50 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-foreground text-foreground font-bold text-xl rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Explore Our Portfolio
              </Link>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-foreground/60"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Free Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Money-Back Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-foreground/10">
          <div className="max-w-6xl mx-auto text-center text-foreground/60">
            <p className="text-sm">
              © 2024 AvalonGroup. Building portfolios, learning together. Based in Bangalore, India.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
