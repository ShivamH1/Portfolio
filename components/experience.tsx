import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "miniOrange (Pune, India)",
    period: "Sep 2024 – Present",
    responsibilities: [
      "Led a full-stack initiative to unify the company’s Data Loss Prevention (DLP) and Mobile Device Management (MDM) platforms into a single streamlined solution, enhancing functionality and maintainability.",
      "Enhanced user authentication security by developing an OTP-based signup flow and enforcing login rate limiting with smart CAPTCHA challenges.",
      "Mentored and guided junior developers and interns on modern React and TypeScript best practices, improving team productivity and code quality.",
      "Spearheaded front-end development for a new Web Agency product using React, achieving a 20% faster page load and 15% higher user engagement through performance optimizations.",
      "Integrated Redux Toolkit Query (RTK Query) for efficient API data fetching and caching, reducing duplicate network calls and simplifying state management.",
      "Refactored the React codebase with reusable component libraries and TypeScript types, cutting feature development time by 40%.",
      "Built a WordPress admin dashboard for security and maintenance (backups, firewall, access logs), and automated plugin management (auto-installation and marketplace integration) to streamline site administration.",
      "Developed a React-based login flow for an Identity Provider product, modernizing the user interface and improving overall UX.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Bluestock Fintech (India)",
    period: "Jun 2024 – Jul 2024",
    responsibilities: [
      "Developed a full-stack feature (Python backend, React frontend) that improved application response time by 30%, enhancing the real-time performance of financial dashboards.",
      "Implemented live IPO and startup news feeds for B2B clients, fetching and displaying real-time financial data to keep users informed.",
      "Participated in code reviews and collaborated on UI enhancements, contributing to a more intuitive and polished product interface.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-zinc-800/50 border-zinc-700 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800/70"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <a href="#" className="text-blue-500 hover:underline">
                      {exp.company}
                    </a>
                  </div>
                  <span className="text-zinc-400">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-zinc-400 flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

