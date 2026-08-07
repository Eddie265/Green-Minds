import React from "react"
import Link from "next/link"
import Image from "next/image"

const CTA = () => {
  return (
    <section className="py-24 bg-white" id="get-involved">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] p-8 md:p-24 text-center">
          {/* Background Image */}
          <Image
            src="/6.jpg"
            alt="Nature background"
            fill
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,80 70,120 100,100 L100,0 L0,0 Z" fill="white" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
              Every Great Change Begins With One Green Idea.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Be part of the movement. Together, we can build a cleaner, greener and better world.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="#contact" className="bg-accent text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 text-center">
                Volunteer
              </Link>
              <Link href="#contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 text-center">
                Partner With Us
              </Link>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
