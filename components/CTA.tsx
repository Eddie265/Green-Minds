import React from "react"
import Link from "next/link"
import Image from "next/image"

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="get-involved">
      <div className="max-w-7xl mx-auto px-6">
        <div className="group relative overflow-hidden rounded-[28px] md:rounded-[60px] px-6 py-14 sm:p-12 md:p-24 lg:p-32 text-center shadow-premium">
          {/* Background Image */}
          <Image
            src="/work/resources-mbidzi-seedlings.jpeg"
            alt="Learners at Mbidzi Secondary School holding tree seedlings"
            fill
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
          />
          {/* Dark Overlay with texture */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/60" />
          {/* Extra shade behind the headline so text and faces don't compete */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(15,40,28,0.75),transparent)]" />
          
          <div className="relative z-10 space-y-12">
            <div className="space-y-6">
              {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mx-auto">*/}
              {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />*/}
              {/*  <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Join the movement</span>*/}
              {/*</div>*/}
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight max-w-4xl mx-auto">
                Every Great Change Begins With <span className="text-accent italic font-serif">One</span> Green Idea.
              </h2>
            </div>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Be part of a youth-led movement for a sustainable Malawi. Together, we can build a cleaner, greener and better world for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <Link 
                href="#contact" 
                className="btn-premium w-full sm:w-auto bg-accent text-primary px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-xl shadow-accent/20"
              >
                Volunteer Now
              </Link>
              <Link 
                href="#contact" 
                className="btn-premium w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl shadow-white/10"
              >
                Partner With Us
              </Link>
              {/* TODO: point this at the ZonsePay checkout once it is integrated */}
              <Link
                href="#contact"
                className="w-full sm:w-auto px-12 py-5 rounded-full border-2 border-white/30 text-white font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
