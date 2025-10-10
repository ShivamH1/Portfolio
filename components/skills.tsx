"use client"

import { Code, Library, Grid3X3, Database } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: ["JavaScript", "Python", "TypeScript"],
  },
  {
    title: "Libraries/Frameworks",
    icon: <Library className="w-5 h-5 text-primary" />,
    skills: ["ReactJS", "NodeJS", "ExpressJS", "NextJS", "Tailwind CSS", "Bootstrap", "GSAP", "Locomotive", "Redux", "Zustand", "WebSockets", "Prisma ORM", "REST API", "GraphQL", "OAuth", "JWT"],
  },
  {
    title: "Tools/Platforms",
    icon: <Grid3X3 className="w-5 h-5 text-primary" />,
    skills: ["Git", "VS Code", "Bash", "Terminal", "Eclipse", "GitHub", "Docker", "Vitest", "Postman", "OpenAI API", "Anthropic Claude"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["MongoDB", "MySQL", "Postgres", "Redis"],
  },
]

const SkillCard = ({ category }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-card/50 border border-border transition-all duration-300 hover:bg-card/70"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      />
      <div className="relative p-6 backdrop-blur-sm z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          {category.icon}
          <h3 className="text-xl font-semibold">{category.title}</h3>
        </motion.div>
        <ul className="space-y-2">
          {category.skills.map((skill, idx) => (
            <motion.li
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-muted-foreground flex gap-2"
            >
              <span className="text-primary">•</span>
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

