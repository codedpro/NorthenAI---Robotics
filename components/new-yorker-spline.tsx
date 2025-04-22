"use client"

import type React from "react"

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function NewYorkerSpline() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div
      className="h-screen w-full bg-white text-black relative overflow-hidden font-serif"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <header className="z-30 p-6 flex justify-between items-center bg-black/90 text-white">
          <div className="text-sm uppercase tracking-widest">Est. 2025</div>
          <div className="text-xl font-bold italic tracking-tight">NorthernAI - Robotics</div>
          <div className="text-sm uppercase tracking-widest">Edmonton, AB</div>
        </header>

        {/* Main content */}
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Left content - Editorial */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-16 relative z-10 overflow-hidden">
            <div
              className="absolute pointer-events-none bg-black rounded-full opacity-[0.07] blur-md transition-transform duration-300 ease-out"
              style={{
                width: "250px",
                height: "250px",
                left: `${mousePosition.x - 125}px`,
                top: `${mousePosition.y - 125}px`,
                transform: `translate(${(mousePosition.x - 125) * 0.02}px, ${(mousePosition.y - 125) * 0.02}px)`,
              }}
            />
            <div className="max-w-xl relative">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                The Digital Frontier
              </h1>

              <div className="my-8 border-t-2 border-b-2 border-black py-4">
                <p className="italic text-lg">Where Edmonton's innovation meets the future of autonomous systems.</p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                In the heart of Alberta's tech hub, NorthernAI Robotics is pushing the boundaries of artificial
                intelligence and robotics. Our cutting-edge solutions are transforming industries and redefining
                human-machine collaboration.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                From smart manufacturing to advanced healthcare assistants, our AI-powered robots are designed to
                enhance efficiency, safety, and quality of life. We're not just building machines; we're shaping a
                future where technology and humanity thrive together.
              </p>

              <div className="mt-12 flex items-center">
                <div className="h-px bg-black flex-grow mr-4"></div>
                <span className="text-sm uppercase tracking-widest">Explore Our Innovations</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="w-full md:w-1/2 h-full relative bg-black overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid-background"></div>
            <div className="relative z-10 w-full h-full">
              <Spotlight className="left-1/2 top-1/2" size={300} fill="white" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="z-20 p-6 flex justify-between items-center text-xs uppercase tracking-widest">
          <div>© 2025 NorthernAI Robotics</div>
          <div>Edmonton's AI Frontier</div>
        </footer>
      </div>
    </div>
  )
}
