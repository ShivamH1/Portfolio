"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function BounceArrow() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Hide arrow when the last section is visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.5 },
    )

    const lastSection = document.querySelector("#contact")
    if (lastSection) {
      observer.observe(lastSection)
    }

    return () => {
      if (lastSection) {
        observer.unobserve(lastSection)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="h-8 w-8 text-blue-500" />
    </div>
  )
}

