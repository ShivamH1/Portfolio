import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Frontend Engineer",
    company: "miniOrange",
    period: "September 2024 - Present",
    responsibilities: [
      "Spearheaded front-end development for a web agency product, achieving a 20% improvement in page load speed and a 15% increase in user engagement. Integrated RTK Query for effective handling of cache and API responses.",
      "Collaborated with design and backend teams, contributing to a 40% decrease in development time for new feature implementation.",
      "Integrated WordPress Marketplace for efficient plugin management; merged web pages and created reusable React components to enhance maintainability.",
      "Engineered a dedicated page for agency plugin installation providing seamless auto-installation and nuanced manual guidance using WordPress credentials.",
    ],
  },
  {
    title: "SDE",
    company: "Bluestock Fintech",
    period: "June 2024 - July 2024",
    responsibilities: [
      "Designed and implemented a feature for the company's main product, reducing user response time by 30% using Python and React.",
      "Developed Real-Time IPO Data Feed (B2B): Provided real-time data on upcoming IPOs, including pricing, timelines, and financial information.",
      "Participated in code reviews, ensuring adherence to best practices and enhanced user experience by developing intuitive UI Components.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Sync Intern",
    period: "March 2023 - May 2024",
    responsibilities: [
      "Developed and deployed a machine learning model that increased predictive accuracy by 25% using Python, TensorFlow, and sci-kit-learn.",
      "Developed polished visualizations to share the results of data analyses and ran statistical analysis within the software to process large datasets.",
      "Applied loss functions and variance explanation techniques to compare performance metrics.",
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

