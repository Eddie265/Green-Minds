import React from "react"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Executive Director",
      bio: "Ecologist with 15+ years experience in sustainable development and reforestation.",
      image: "/p1.jpg"
    },
    {
      name: "Marcus Tumpale",
      role: "Operations Director",
      bio: "Expert in community-led conservation, logistics, and grassroots mobilization.",
      image: "/p2.jpg" 
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Innovator",
      bio: "Renewable energy engineer focusing on rural microgrids and clean tech.",
      image: "/p3.jpg"
    },
    {
      name: "David Phiri",
      role: "Community Liaison",
      bio: "Specialist in environmental education and local stakeholder engagement.",
      image: "/p4.jpg"
    }
  ]

  return (
    <section className="py-24 md:py-40 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
            {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Our Experts</span>*/}
            {/*</div>*/}
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Driven by <span className="text-accent italic font-serif">passion</span>, <br />
              guided by science.
            </h2>
          </div>
          <p className="text-muted text-lg max-w-sm leading-relaxed">
            Meet the dedicated individuals working to bridge the gap between human progress and ecological preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group premium-card p-4">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-3">
                    {[Twitter, Linkedin, Github].map((Icon, idx) => (
                      <button key={idx} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-black text-primary mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
