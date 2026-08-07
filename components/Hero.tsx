"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.8, ease: "expo.out", delay: 0.2 }
    )
  }, [])

  return (
    <section id="home" className="hero-section relative min-h-screen w-full overflow-hidden flex items-center pb-20 md:pb-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Lush green valley"
          fill
          className="hero-bg object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Foreground depth elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-[10%] w-64 h-96 bg-accent/20 rounded-[60%] blur-[100px] rotate-12" />
        <div className="absolute -right-20 bottom-[10%] w-80 h-80 bg-primary/30 rounded-[50%] blur-[120px] -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div ref={contentRef} className="max-w-4xl">
          {/* Slogan badge */}
          {/*<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-8">*/}
          {/*  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />*/}
          {/*  <span className="text-white/90 text-xs md:text-sm font-bold tracking-wider uppercase">*/}
          {/*    Pioneering Sustainability*/}
          {/*  </span>*/}
          {/*</div>*/}

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-white mb-8 leading-[0.95] tracking-tight">
            Building <span className="text-accent italic font-serif">Greener</span> Ideas <br className="hidden sm:inline" />
            for a Better World
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-xl text-balance">
            Green Minds INC empowers innovators to create
            environmentally responsible solutions that protect our planet for future generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <button className="btn-premium group flex items-center justify-between sm:justify-start gap-4 bg-accent text-primary pl-8 pr-2 py-2.5 rounded-full font-bold text-base hover:bg-white transition-all w-full sm:w-auto">
              Explore Our Mission
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white group-hover:scale-110 transition-transform duration-500">
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </span>
            </button>
            <Link 
              href="#contact" 
              className="btn-premium px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all text-center w-full sm:w-auto"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
      
      {/*/!* Scroll indicator *!/*/}
      {/*<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">*/}
      {/*  <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white to-white/0" />*/}
      {/*  <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em]">Scroll</span>*/}
      {/*</div>*/}
    </section>
  )
}

export default Hero
