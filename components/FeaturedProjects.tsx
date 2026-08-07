import React from "react"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Solar for Communities",
      location: "Lilongwe, Malawi",
      desc: "Providing clean energy to rural villages using advanced solar microgrids.",
      progress: 75,
      image: "/2.jpg"
    },
    {
      title: "Green Reforestation",
      location: "Zomba Plateau",
      desc: "Restoring native forest cover to protect local biodiversity and water sources.",
      progress: 40,
      image: "/3.jpg"
    },
    {
      title: "Waste to Value Project",
      location: "Blantyre City",
      desc: "Transforming urban waste into organic fertilizer and renewable biogas.",
      progress: 90,
      image: "/4.jpg"
    },
    {
      title: "Clean Water Initiative",
      location: "Shire River Basin",
      desc: "Implementing solar-powered filtration systems for remote communities.",
      progress: 60,
      image: "/5.jpg"
    },
  ]

  return (
    <section className="py-32 bg-[#FAFAF7]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
            <p className="text-muted text-lg">
              Tangible solutions making a real impact on the ground today.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            View All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group bg-white rounded-premium overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{project.location}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-primary">Progress</span>
                    <span className="text-accent">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <button className="w-full py-3 rounded-2xl border border-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-colors duration-300">
                  Learn More
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
