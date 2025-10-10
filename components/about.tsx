"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Info } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  { icon: <Mail className="h-5 w-5" />, text: "shivamhonrao.sae.comp@gmail.com" },
  { icon: <Phone className="h-5 w-5" />, text: "7498481659" },
  { icon: <MapPin className="h-5 w-5" />, text: "Pune, India" },
]

const quickFacts = [
  "Full Stack Developer",
  "Open Source Contributor",
  "AI/LLM Enthusiast",
  "Performance Optimizer",
]

export function About() {
  return (
    <section id="about" className="py-12 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-foreground/80">
              As a full-stack developer, I specialize in building end-to-end web applications with a focus on performance and user experience. My expertise in JavaScript/TypeScript, Node.js, and Python, combined with hands-on experience in React, Redux, and Next.js, allows me to tackle complex challenges and deliver robust solutions.
            </p>
            <p className="mt-4 text-foreground/80">
              I am passionate about integrating AI/LLM technologies into my work and have recently prototyped features using the OpenAI GPT and Anthropic Claude APIs. I thrive on owning product features from concept to deployment, continuously seeking to improve performance metrics and mentor junior engineers to elevate our team's capabilities.
            </p>
            <div className="mt-6 space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-foreground/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {info.icon}
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card/50 border-border hover:bg-card/70 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  {quickFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      className="text-foreground/80 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <Info className="h-4 w-4 text-primary" />
                      <span>{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

