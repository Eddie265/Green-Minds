"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    )
  }, [])

  return (
    <section id="home" className="hero-section relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpeg"
          alt="Lush green valley"
          fill
          className="hero-bg object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>

      {/* Foreground depth leaves */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute -left-16 top-[18%] w-48 h-72 bg-green-500/30 rounded-[60%] blur-2xl rotate-12" />
        <div className="absolute -left-8 bottom-[10%] w-56 h-40 bg-emerald-600/25 rounded-[50%] blur-3xl -rotate-6" />
        <div className="absolute -right-12 top-[12%] w-44 h-64 bg-lime-500/25 rounded-[55%] blur-2xl -rotate-12" />
        <div className="absolute right-4 bottom-[8%] w-52 h-36 bg-green-600/20 rounded-[45%] blur-3xl rotate-6" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center pt-24">
        <div ref={contentRef} className="max-w-2xl">
          {/* Slogan badge */}
          <div className="inline-flex items-center gap-2.5 bg-primary px-4 py-2 rounded-full mb-8">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/90">
              <ArrowRight className="w-3 h-3 text-primary" strokeWidth={3} />
            </span>
            <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
              Think Green. Act Clean. Live Better.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white mb-6 leading-[1.08]">
            Building Greener Ideas for a <br />
            <span className="text-accent">Sustainable Tomorrow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-lg">
            Green Minds INC empowers communities, organisations and innovators to create
            environmentally responsible solutions that protect our planet for future generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-3 bg-accent text-white pl-7 pr-2 py-2.5 rounded-full font-bold text-sm md:text-base hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent/25">
              Explore Our Mission
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
              </span>
            </button>
            <button className="border-2 border-white/80 text-white px-7 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-95">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
