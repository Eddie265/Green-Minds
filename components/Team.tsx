import React from "react"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Executive Director",
      bio: "Ecologist with 15+ years experience in sustainable development.",
      image: "/p1.jpg"
    },
    {
      name: "Marcus Tumpale",
      role: "Operations Director",
      bio: "Expert in community-led conservation and logistics.",
      image: "/p2.jpg" 
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Innovator",
      bio: "Renewable energy engineer focusing on rural microgrids.",
      image: "/p3.jpg"
    },
    {
      name: "David Phiri",
      role: "Community Liaison",
      bio: "Specialist in grassroots mobilization and education.",
      image: "/p4.jpg"
    }
  ]

  return (
    <section className="py-32 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Team</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals working tirelessly to bridge the gap between human progress and ecological preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    {[Twitter, Linkedin, Github].map((Icon, idx) => (
                      <button key={idx} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
