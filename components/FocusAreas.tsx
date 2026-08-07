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
      desc: "Developing next-gen solutions for eco-friendly living."
    },
    { 
      title: "Waste Management", 
      icon: <Recycle className="w-8 h-8" />,
      desc: "Circular economy initiatives to minimize footprint."
    },
    { 
      title: "Tree Restoration", 
      icon: <Trees className="w-8 h-8" />,
      desc: "Reforesting critical ecosystems across the region."
    },
    { 
      title: "Renewable Energy", 
      icon: <Zap className="w-8 h-8" />,
      desc: "Transitioning communities to clean, green power."
    },
    { 
      title: "Water Conservation", 
      icon: <Droplets className="w-8 h-8" />,
      desc: "Protecting our most precious resource for all."
    },
    { 
      title: "Climate Education", 
      icon: <BookOpen className="w-8 h-8" />,
      desc: "Empowering the next generation of climate leaders."
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Focus Areas</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Strategic pillars guiding our mission towards global sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <div 
              key={i}
              className="group p-10 rounded-premium bg-[#FAFAF7] border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,83,45,0.1)] hover:border-secondary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 {area.icon}
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{area.title}</h3>
              <p className="text-muted leading-relaxed">
                {area.desc}
              </p>
              
              {/* Soft glow effect */}
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusAreas
