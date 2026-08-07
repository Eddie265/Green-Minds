import React from "react"
import Image from "next/image"

const WhoWeAre = () => {
  return (
    <section className="py-32 bg-[#FAFAF7]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpeg" // Using same hero for now as it's the only asset
              alt="Sustainable future"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110 scale-110 parallax"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              We believe innovation should never come at the expense of nature.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Green Minds INC is a non-profit organization dedicated to pioneering 
              sustainable development through technology, community action, and 
              education. Our mission is to bridge the gap between human progress 
              and ecological preservation, ensuring that every step forward for 
              humanity is also a step forward for our planet.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-serif italic text-primary">Together, we grow a better tomorrow.</span>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
