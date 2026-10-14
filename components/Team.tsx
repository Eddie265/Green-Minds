import React from "react"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const Team = () => {
  const team = [
    {
      name: "Wayne Francis Hiwa",
      image: "/wayne.jpeg",
      linkedin: "https://www.linkedin.com/in/wayne-hiwa-b275a424a"
    },
    {
      name: "Wongani Mulanga",
      image: "/wongie.jpeg",
      linkedin: "https://www.linkedin.com/in/wongani-mulanga"
    },
    {
      name: "Lughano Mwalyambwire",
      image: "/lughano.jpeg",
      linkedin: "https://www.linkedin.com/in/lughano-mwalyambwire-463415282"
    },
    {
      name: "Pertunia Jesman",
      image: "/pertunia.jpeg",
      linkedin: "https://www.linkedin.com/in/pertunia-jesman-97a957349"
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
            {/*  <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Our Experts</span>*/}
            {/*</div>*/}
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Driven by passion, <br />
              guided by science.
            </h2>
          </div>
          <p className="text-muted text-lg max-w-sm leading-relaxed">
            Meet the young environmental scientists and leaders behind Green Minds Malawi.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
          {team.map((member, i) => (
            <div key={i} className="group premium-card p-2 sm:p-4">
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-[24px] overflow-hidden mb-4 sm:mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />
                {/* LinkedIn link: revealed on hover or keyboard focus, always shown on touch screens */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-8 translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 [@media(hover:none)]:translate-y-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              <div className="px-1 pb-1 sm:px-2 sm:pb-2">
                <h3 className="text-base sm:text-xl font-black text-primary group-hover:text-accent transition-colors">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
