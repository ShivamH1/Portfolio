"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="h-5 w-5" />
                <span>shivamhonrao.sae.comp@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-5 w-5" />
                <span>7498481659</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="h-5 w-5" />
                <span>Pune, India</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-blue-500">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" className="bg-zinc-900 border-zinc-700" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-zinc-900 border-zinc-700" />
                </div>
                <div>
                  <Textarea placeholder="Message" className="bg-zinc-900 border-zinc-700 min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

