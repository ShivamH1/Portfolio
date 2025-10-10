import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { BounceArrow } from "./bounce-arrow";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Shivam Sanjay Honrao
            </h1>
            <h2 className="text-3xl font-bold text-blue-500 mt-4">
              Full Stack Developer
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Experienced full-stack developer skilled in JavaScript/TypeScript,
              Node.js, React.js and Python, with expertise in optimizing performance,
              unifying complex systems, and integrating AI/LLM technologies,
              including OpenAI GPT and Anthropic Claude APIs. Passionate about
              improving key performance metrics and mentoring junior engineers.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="https://github.com/ShivamH1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-colors bg-zinc-800 hover:bg-zinc-700"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/shivam-honrao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-colors bg-blue-500 hover:bg-blue-600"
              >
                LinkedIn
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-colors bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                  <Image
                    src="https://avatars.githubusercontent.com/u/125744104"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-zinc-800">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Pune, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BounceArrow />
    </section>
  );
}
