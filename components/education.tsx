import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Info } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-12 px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <Card className="bg-zinc-800/50 border-zinc-700 max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800/70">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
              <span className="text-blue-500">2024</span>
            </div>
            <p className="text-xl mt-2">Computer Science and Engineering</p>
            <div className="flex items-center gap-2 mt-4 text-zinc-400">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>University of Pune, India</span>
            </div>
            <p className="text-green-500 mt-4">CGPA: 8.72</p>
            <div className="mt-4 flex gap-2 text-zinc-400">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
              <p>
                Specialized in Computer Science and Engineering with focus on software development and web technologies
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

