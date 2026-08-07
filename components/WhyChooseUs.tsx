import React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const WhyChooseUs = () => {
  const points = [
    "Certified Professionals",
    "Community Driven",
    "Sustainable Innovation",
    "Transparent Reporting",
    "Measurable Impact",
    "Long-term Partnerships",
  ]

  return (
    <section className="relative py-24 md:py-40 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/4.jpg"
          alt="Sustainability initiative"
          fill
          className="object-cover brightness-[0.4] parallax scale-110"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl glass-dark p-10 md:p-20 rounded-[40px] border-white/10 shadow-premium">
          <div className="space-y-6">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
            {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Why Us</span>*/}
            {/*</div>*/}
            
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
              Innovation that <br />
              <span className="text-accent italic font-serif">lasts</span> generations.
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              We combine local expertise with global sustainability standards to 
              deliver impactful results that bridge the gap between human progress and nature.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 pt-8">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-white font-bold tracking-tight text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
