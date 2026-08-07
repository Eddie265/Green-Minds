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
    <section className="relative py-32 overflow-hidden min-h-[600px] flex items-center">
      {/* Dark Forest Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Dark forest"
          fill
          className="object-cover brightness-50 parallax scale-110"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl glass-dark p-12 md:p-16 rounded-[40px] border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why Choose <br />
            <span className="text-accent">Green Minds INC</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            We combine local expertise with global sustainability standards to 
            deliver impactful results that last for generations.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
