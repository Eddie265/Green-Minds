"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stats = containerRef.current?.querySelectorAll(".stat-number")
    
    stats?.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target") || "0")
      
      gsap.to(stat, {
        innerText: target,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
        },
      })
    })
  }, [])

  const impacts = [
    { number: "35", suffix: "+", label: "Environmental Campaigns" },
    { number: "48", suffix: "", label: "Community Workshops" },
    { number: "18", suffix: "", label: "Renewable Projects" },
    { number: "120", suffix: "+", label: "Volunteers Involved" },
  ]

  return (
    <section className="py-32 bg-white" id="our-work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Impact</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real numbers. Real change. A greener future in motion.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((item, i) => (
            <div 
              key={i} 
              className="p-8 rounded-premium bg-[#FAFAF7] border border-gray-100 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
            >
              <div className="flex items-baseline mb-2">
                <span 
                  className="stat-number text-5xl md:text-6xl font-black text-primary" 
                  data-target={item.number}
                >
                  0
                </span>
                <span className="text-4xl md:text-5xl font-black text-accent">{item.suffix}</span>
              </div>
              <p className="text-muted font-medium uppercase tracking-wider text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
