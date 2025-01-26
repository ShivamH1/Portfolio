"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Shiptivitas",
    description: "Open Source Contribution at Forage",
    details: [
      "Contributed to optimizing key modules, achieving 15% reduction in code execution time",
      "Implemented Kanban board feature for shipping request tracking",
    ],
    github: "#",
  },
  {
    title: "JPMC Perspective",
    description: "Open Source Contribution at Forage",
    details: [
      "Created dynamic graphs using JPMorgan Chase's Perspective library",
      "Enhanced trading data visualization with real-time updates",
    ],
    github: "#",
  },
  {
    title: "Transaction Application",
    description: "Full Stack Development",
    details: [
      "Built with React, Express, and MongoDB",
      "Implemented secure user authentication using Zod",
      "Features include balance display and user transfers",
    ],
    github: "#",
  },
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card/50 border-border h-full transition-all duration-300 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/20">
        <CardContent className="p-6">
          <motion.div
            className="flex justify-between items-start"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="flex gap-2">
              <a href={project.github} className="text-primary hover:text-primary/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          <p className="text-foreground/80 mt-2">{project.description}</p>
          <ul className="mt-4 space-y-2">
            {project.details.map((detail, idx) => (
              <motion.li
                key={idx}
                className="text-foreground/80 flex gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
              >
                <span className="text-primary">•</span>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-12 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

