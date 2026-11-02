import React from "react"
import ProfileGrid from "@/components/ProfileGrid"
import { getPeople } from "@/lib/content"

const Team = async () => {
  const team = await getPeople("team")

  return (
    <section className="py-20 md:py-28 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Driven by passion, <br />
              guided by science.
            </h2>
          </div>
          <p className="text-muted text-lg max-w-sm leading-relaxed">
            Meet the team behind Green Minds Malawi.
          </p>
        </div>

        <ProfileGrid
          people={team}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8"
        />
      </div>
    </section>
  )
}

export default Team
