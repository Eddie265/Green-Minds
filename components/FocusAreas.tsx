import React from "react"
import { 
  Lightbulb, 
  Recycle, 
  Trees, 
  Zap, 
  Droplets, 
  BookOpen 
} from "lucide-react"

const FocusAreas = () => {
  const areas = [
    { 
      title: "Sustainable Innovation", 
      icon: <Lightbulb className="w-8 h-8" />,
      desc: "Developing next-gen solutions for eco-friendly living and smart urban infrastructure."
    },
    { 
      title: "Waste Management", 
      icon: <Recycle className="w-8 h-8" />,
      desc: "Circular economy initiatives to minimize ecological footprint and promote zero-waste."
    },
    { 
      title: "Tree Restoration", 
      icon: <Trees className="w-8 h-8" />,
      desc: "Reforesting critical ecosystems across the region to combat climate change effects."
    },
    { 
      title: "Renewable Energy", 
      icon: <Zap className="w-8 h-8" />,
      desc: "Transitioning communities to clean, green power through solar and wind initiatives."
    },
    { 
      title: "Water Conservation", 
      icon: <Droplets className="w-8 h-8" />,
      desc: "Protecting our most precious resource for all through smart filtration and recycling."
    },
    { 
      title: "Climate Education", 
      icon: <BookOpen className="w-8 h-8" />,
      desc: "Empowering the next generation of climate leaders through immersive learning."
    },
  ]

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
          {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
          {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Our Focus</span>*/}
          {/*</div>*/}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
            Strategic pillars for <br />
            a <span className="text-accent italic font-serif">sustainable</span> future.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <div 
              key={i}
              className="group premium-card p-12 relative overflow-hidden flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-accent/5 rounded-[20px] flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                {area.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{area.title}</h3>
              <p className="text-muted leading-relaxed text-base">
                {area.desc}
              </p>
              
              {/* Subtle accent corner */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusAreas
