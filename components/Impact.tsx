"use client"

import React, { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  SproutIcon,
  CommunityIcon,
  LeafCircleIcon,
  HeartLeafIcon,
  EarthGlobe,
} from "@/components/icons/ImpactIcons"

gsap.registerPlugin(ScrollTrigger)

const impacts = [
  { number: 35, suffix: "+", label: "Environmental Campaigns", Icon: SproutIcon },
  { number: 48, suffix: "", label: "Community Workshops", Icon: CommunityIcon },
  { number: 18, suffix: "", label: "Renewable Projects", Icon: LeafCircleIcon },
  { number: 120, suffix: "+", label: "Volunteers Involved", Icon: HeartLeafIcon },
]

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stats = containerRef.current?.querySelectorAll(".stat-number")

    stats?.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target") || "0", 10)

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
        }
      )
    })
  }, [])

  return (
    <section className="relative py-20 md:py-28 bg-[#F3F4F2] overflow-hidden" id="our-work">
      {/* Low-opacity earth background */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end"
        aria-hidden="true"
      >
        <div className="relative w-[min(90vw,720px)] h-[min(90vw,720px)] mr-[-8%] md:mr-[-2%] text-[#7A9B6D] opacity-[0.14]">
          <EarthGlobe />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Impact
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-5" />
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              Real numbers. Real change. A greener future in motion.
            </p>
            <button className="group inline-flex items-center gap-3 bg-primary text-white pl-6 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95">
              View Full Impact Report
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
              </span>
            </button>
          </div>

          {/* Right column — stat cards */}
          <div
            ref={containerRef}
            className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
          >
            {impacts.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-4 py-6 md:px-5 md:py-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/80 transition-transform hover:-translate-y-1"
              >
                <div className="text-accent mb-4 md:mb-5">
                  <item.Icon className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <div className="flex items-baseline justify-center mb-2">
                  <span
                    className="stat-number text-3xl md:text-4xl font-bold text-foreground tabular-nums"
                    data-target={item.number}
                  >
                    0
                  </span>
                  {item.suffix && (
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <p className="text-muted text-xs md:text-sm leading-snug max-w-[120px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
