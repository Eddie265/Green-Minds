import React from "react"
import Image from "next/image"

const WhoWeAre = () => {
  return (
    <section className="py-24 md:py-40 bg-[#FAFAF7] overflow-hidden" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-premium group">
            <Image
              src="/1.jpg"
              alt="Our team working on sustainable solutions"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
              <p className="text-primary font-bold text-sm">
                "Our mission is to bridge the gap between human progress and ecological preservation."
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
              {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />*/}
              {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Our Story</span>*/}
              {/*</div>*/}
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
                Innovation that <br />
                <span className="text-accent italic font-serif">honors</span> nature.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-muted text-lg leading-relaxed max-w-xl">
              <p>
                Green Minds INC is a pioneering non-profit organization dedicated to fostering 
                sustainable development through the strategic integration of technology, 
                grassroots community action, and transformative education.
              </p>
              <p>
                Founded on the principle that human progress and ecological preservation 
                are mutually dependent, we work tirelessly to ensure that every technological 
                leap forward is a victory for our planet.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div className="space-y-1">
                <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">10+</span>
                <span className="block text-xs text-accent font-bold uppercase tracking-widest">Years of Impact</span>
              </div>
              <div className="space-y-1">
                <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">50k+</span>
                <span className="block text-xs text-accent font-bold uppercase tracking-widest">Trees Planted</span>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">100+</span>
                <span className="block text-xs text-accent font-bold uppercase tracking-widest">Global Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
