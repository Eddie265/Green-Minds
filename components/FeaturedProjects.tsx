import React from "react"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Solar for Communities",
      location: "Lilongwe, Malawi",
      desc: "Providing clean energy to rural villages using advanced solar microgrids and smart distribution systems.",
      progress: 75,
      image: "/2.jpg",
      tags: ["Energy", "Tech"]
    },
    {
      title: "Green Reforestation",
      location: "Zomba Plateau",
      desc: "Restoring native forest cover to protect local biodiversity and critical water sources for the region.",
      progress: 40,
      image: "/3.jpg",
      tags: ["Conservation", "Action"]
    },
    {
      title: "Waste to Value Project",
      location: "Blantyre City",
      desc: "Transforming urban waste into organic fertilizer and renewable biogas for sustainable city living.",
      progress: 90,
      image: "/4.jpg",
      tags: ["Circular", "Urban"]
    },
    {
      title: "Clean Water Initiative",
      location: "Shire River Basin",
      desc: "Implementing solar-powered filtration systems for remote communities to ensure safe drinking water.",
      progress: 60,
      image: "/5.jpg",
      tags: ["Water", "Health"]
    },
  ]

  return (
    <section className="py-24 md:py-40 bg-[#FAFAF7]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-primary" />*/}
            {/*  <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Our Initiatives</span>*/}
            {/*</div>*/}
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Tangible solutions <br />
              <span className="text-accent italic font-serif">making</span> a difference.
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-primary font-black uppercase text-sm tracking-widest hover:text-accent transition-colors">
            View All Projects 
            <span className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group premium-card overflow-hidden flex flex-col h-full"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{project.location}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-primary/60">Phase Completion</span>
                    <span className="text-accent">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-1000 ease-out origin-left group-hover:scale-x-105"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <button className="w-full py-4 rounded-2xl border-2 border-primary/5 text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-500">
                  Project Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
