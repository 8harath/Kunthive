"use client"

import { motion } from "framer-motion"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { ContactForm } from "@/components/contact-form"
import { Mail, Clock, MapPin, MessageSquare, Sparkles, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@avalongroup.tech",
      link: "mailto:hello@avalongroup.tech",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within 24 hours",
      link: null,
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Bangalore, Karnataka, India",
      link: null,
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Talk directly with the builders",
      link: null,
    },
  ]

  const benefits = [
    "Free consultation and project assessment",
    "Transparent pricing with no hidden fees",
    "Direct communication with developers",
    "Flexible payment options",
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
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8"
            >
              Let's build
              <br />
              <span className="text-accent">something amazing</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed"
            >
              Ready to start your project? We'd love to hear about your ideas and discuss how we can help bring
              them to life. Get in touch and let's make it happen.
            </motion.p>
          </motion.div>
        </section>

        {/* Main Contact Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Left Column - Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="lg:col-span-2 space-y-12"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-foreground/70 leading-relaxed">
                    Choose the best way to reach out. We're here to help and answer any questions you might have.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="group p-6 border-2 border-foreground/10 rounded-2xl hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="w-6 h-6 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground/70 hover:text-accent transition-colors duration-300"
                            >
                              {info.description}
                            </a>
                          ) : (
                            <p className="text-foreground/70">{info.description}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <motion.div variants={fadeInUp} className="pt-8">
                  <h3 className="text-xl font-bold mb-6">What to Expect</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
                className="lg:col-span-3"
              >
                <div className="p-8 lg:p-12 border-2 border-foreground/10 rounded-3xl bg-foreground/5 hover:border-accent/30 transition-all duration-300">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
                    <p className="text-foreground/70">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-foreground text-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">Quick Questions</h2>
              <p className="text-xl text-background/70">Common questions we get asked</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Most projects take 2-6 weeks depending on complexity. We'll give you a detailed timeline during our initial consultation.",
                },
                {
                  q: "What's included in your pricing?",
                  a: "Our pricing includes design, development, testing, deployment, and a free .tech domain. We provide transparent quotes with no hidden fees.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes! We offer maintenance packages and are always available to help with updates, improvements, or technical issues.",
                },
                {
                  q: "Can you work with existing projects?",
                  a: "Absolutely. We can take over existing projects, add new features, or help with redesigns and improvements.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 border border-background/20 rounded-2xl hover:border-accent/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-background/70 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
              <Send className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Ready when you are
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70">
              One message away from bringing your vision to life
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
