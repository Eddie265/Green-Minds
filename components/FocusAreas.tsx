import React from "react"
import { 
  BookOpen, 
  Zap, 
  Users, 
  Trees, 
  Scale 
} from "lucide-react"

const FocusAreas = () => {
  const areas = [
    { 
      title: "Climate Education & Awareness", 
      icon: <BookOpen className="w-8 h-8" />,
      desc: "We help young people and communities understand climate change and the environmental challenges affecting their lives. Through schools, community engagements, campaigns and practical learning, we turn knowledge into action."
    },
    { 
      title: "Clean Energy Access", 
      icon: <Zap className="w-8 h-8" />,
      desc: "We promote access to clean and affordable energy, particularly for underserved communities. We support practical solutions that reduce energy poverty while creating opportunities for young people to engage in the transition to clean energy."
    },
    { 
      title: "Youth Leadership & Empowerment", 
      icon: <Users className="w-8 h-8" />,
      desc: "We believe young people should be at the centre of creating solutions for their communities and their future. Our work builds knowledge, leadership skills and opportunities that enable young people to take initiative and lead meaningful change."
    },
    { 
      title: "Environmental Conservation", 
      icon: <Trees className="w-8 h-8" />,
      desc: "We work with communities to protect and restore the environment and promote responsible management of natural resources. Our approach supports practical action such as tree planting, environmental awareness, waste management and the protection of local ecosystems."
    },
    { 
      title: "Climate Justice & Advocacy", 
      icon: <Scale className="w-8 h-8" />,
      desc: "We work to ensure that young people and marginalised communities have a voice in conversations and decisions on climate change. By bringing community experiences and youth perspectives into advocacy, we push for climate action that is fair, inclusive and responsive to the people most affected."
    },
  ]

  return (
    <section id="focus-areas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
          {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
          {/*  <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Our Focus</span>*/}
          {/*</div>*/}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
            Strategic pillars for <br />
            a <span className="text-accent italic font-serif">sustainable</span> future.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {areas.map((area, i) => (
            <div 
              key={i}
              className={`group premium-card p-12 relative overflow-hidden flex flex-col items-start lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
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
