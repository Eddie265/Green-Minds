import React from "react"
import Image from "next/image"

const WhoWeAre = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7] overflow-hidden" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-[28px] md:rounded-[40px] overflow-hidden shadow-premium group">
            <Image
              src="/about5.jpeg"
              alt="Our team working on sustainable solutions"
              fill
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass p-4 md:p-6 rounded-2xl md:rounded-3xl">
              <p className="text-primary font-bold text-sm">
                &ldquo;Young people are not sideliners on the receiving end of change. They can be active drivers of it.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
              {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />*/}
              {/*  <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Our Story</span>*/}
              {/*</div>*/}
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
                Be Part <br />
                <span className="text-accent italic font-serif">of the</span>  Change.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-muted text-lg leading-relaxed max-w-xl">
              <p>
                Green Minds is a youth-led organization committed to creating sustainable opportunities that
                empower communities and help build a better future.
                <br/>
                We believe that meaningful change begins when young people are given the knowledge,
                resources, and opportunities they need to take action. Through education, environmental
                initiatives, and community development, we work to address real-world challenges and develop
                practical, sustainable solutions.
              </p>
              <p>
                At its core, Green Minds believes that young people are not simply sideliners on the receiving
                end of change, but rather can be active drivers of it. We aim to inspire youth to recognize their
                potential, take ownership of the challenges affecting their communities, and become part of
                creating the solutions and not just waiting for others to do it.

              </p>
            </div>

            {/*<div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">*/}
            {/*  <div className="space-y-1">*/}
            {/*    <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">10+</span>*/}
            {/*    <span className="block text-xs text-accent font-bold uppercase tracking-widest">Years of Impact</span>*/}
            {/*  </div>*/}
            {/*  <div className="space-y-1">*/}
            {/*    <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">50k+</span>*/}
            {/*    <span className="block text-xs text-accent font-bold uppercase tracking-widest">Trees Planted</span>*/}
            {/*  </div>*/}
            {/*  <div className="space-y-1 col-span-2 md:col-span-1">*/}
            {/*    <span className="block text-4xl md:text-5xl font-black text-primary tabular-nums">100+</span>*/}
            {/*    <span className="block text-xs text-accent font-bold uppercase tracking-widest">Global Partners</span>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
