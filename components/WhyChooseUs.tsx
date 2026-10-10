import React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const WhyChooseUs = () => {
  const points = [
    "Youth-Led",
    "Community Driven",
    "Grounded in Science",
    "Practical Action",
    "Stories That Drive Change",
    "Long-term Partnerships",
  ]

  return (
    <section id="why-us" className="relative py-20 md:py-28 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Taller than the section so the parallax shift never exposes a gap */}
        <div className="parallax absolute inset-x-0 top-0 -bottom-24">
          <Image
            src="/work/advocacy-world-youth-day-audience.jpeg"
            alt="Young people gathered for the World Youth Day commemoration in Lilongwe"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl glass-dark p-7 sm:p-10 md:p-20 rounded-[28px] md:rounded-[40px] border-white/10 shadow-premium">
          <div className="space-y-6">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
            {/*  <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Why Us</span>*/}
            {/*</div>*/}
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
              Change that <br />
              <span className="text-accent italic font-serif">lasts</span> generations.
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              We combine local knowledge, environmental science and the energy of young
              people to deliver practical solutions that last beyond a single project.
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
