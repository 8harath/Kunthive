"use client"

import { motion, useInView } from "framer-motion"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { Users, Target, Heart, Award, Sparkles, TrendingUp, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function AboutPage() {
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

  const values = [
    {
      icon: Target,
      title: "Transparent Process",
      description: "Clear project scopes, honest timelines, and open communication throughout every stage of development.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Every project is a learning opportunity. We grow with each challenge and share that knowledge with our clients.",
    },
    {
      icon: Heart,
      title: "Value First",
      description: "Free domains, competitive rates, and no compromise on quality. We believe great work should be accessible.",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Small team means personal attention. Every line of code, every design element gets our full focus.",
    },
  ]

  const stats = [
    { icon: Sparkles, value: "2024", label: "Founded" },
    { icon: TrendingUp, value: "50+", label: "Projects" },
    { icon: Zap, value: "24h", label: "Avg Response" },
    { icon: Shield, value: "98%", label: "Satisfaction" },
  ]

  const team = [
    {
      role: "Development",
      description: "Full-stack engineers passionate about modern web technologies and clean code.",
    },
    {
      role: "Design",
      description: "UI/UX designers focused on creating intuitive, beautiful user experiences.",
    },
    {
      role: "Strategy",
      description: "Problem solvers who understand business needs and translate them into technical solutions.",
    },
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
              <span className="text-sm font-medium">Our Story</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8"
            >
              Building portfolios,
              <br />
              <span className="text-accent">learning together</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
            >
              We're a collective of curious students based in Bangalore who believe in learning while building.
              What started as a way to fund our education has become our platform for real-world experience and
              meaningful client relationships.
            </motion.p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-foreground text-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={scaleIn} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Approach</h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                Four principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 border-2 border-foreground/10 rounded-3xl hover:border-accent/50 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-foreground/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                A small, dedicated team of students who care deeply about the work we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center p-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{member.role}</h3>
                  <p className="text-foreground/70 leading-relaxed">{member.description}</p>
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
              Ready to work together?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12">
              Let's discuss how we can help bring your vision to life
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-xl rounded-full hover:bg-accent hover:text-background transition-all duration-300 shadow-2xl hover:shadow-accent/50 hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
