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
          duration: 3,
          snap: { innerText: 1 },
          ease: "expo.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            once: true
          },
        }
      )
    })
  }, [])

  return (
    <section className="relative py-24 md:py-40 bg-[#F3F4F2] overflow-hidden" id="our-work">
      {/* Decorative earth background */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-[min(100vw,800px)] h-[min(100vw,800px)] mr-[-10%] text-[#7A9B6D] opacity-[0.08] parallax">
          <EarthGlobe />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">*/}
              {/*  <span className="w-1.5 h-1.5 rounded-full bg-primary" />*/}
              {/*  <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Our Impact</span>*/}
              {/*</div>*/}
              <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
                Measurable change for a <span className="text-accent italic font-serif">greener</span> world.
              </h2>
            </div>
            
            <p className="text-muted text-lg leading-relaxed max-w-sm">
              Real numbers. Real impact. We track every initiative to ensure we're making a tangible difference for our planet.
            </p>
            
            <button className="btn-premium group inline-flex items-center gap-4 bg-primary text-white pl-8 pr-2 py-2.5 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all duration-500">
              View Impact Report
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary group-hover:scale-110 transition-transform duration-500">
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </span>
            </button>
          </div>

          {/* Right column — stat cards */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          >
            {impacts.map((item, i) => (
              <div
                key={i}
                className="premium-card p-8 md:p-10 flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <item.Icon className="w-8 h-8" />
                </div>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="stat-number text-5xl md:text-6xl font-black text-primary tabular-nums tracking-tighter"
                    data-target={item.number}
                  >
                    0
                  </span>
                  {item.suffix && (
                    <span className="text-3xl md:text-4xl font-black text-accent">
                      {item.suffix}
                    </span>
                  )}
                </div>
                
                <p className="text-muted font-bold text-sm uppercase tracking-widest">
                  {item.label}
                </p>
                
                <div className="w-full h-1 bg-gray-100 rounded-full mt-8 overflow-hidden">
                   <div className="w-1/3 h-full bg-accent/30 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
