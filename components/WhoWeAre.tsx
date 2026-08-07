import React from "react"
import Image from "next/image"

const WhoWeAre = () => {
  return (
    <section className="py-32 bg-[#FAFAF7]" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square md:aspect-[4/5] lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/1.jpg"
              alt="Our team working on sustainable solutions"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold text-xs uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
              Innovation that <span className="text-accent italic">honors</span> nature.
            </h2>
            
            <div className="flex flex-col gap-6 text-muted text-lg leading-relaxed">
              <p>
                Green Minds INC is a pioneering non-profit organization dedicated to fostering 
                sustainable development through the strategic integration of technology, 
                grassroots community action, and transformative education.
              </p>
              <p>
                Founded on the principle that human progress and ecological preservation 
                are mutually dependent, we work tirelessly to ensure that every technological 
                leap forward is a victory for our planet. Our global network of innovators 
                and activists is building a future where nature and industry thrive in harmony.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted uppercase tracking-tighter">Years of Impact</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50k+</span>
                <span className="text-sm text-muted uppercase tracking-tighter">Trees Planted</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100+</span>
                <span className="text-sm text-muted uppercase tracking-tighter">Global Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
