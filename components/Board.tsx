import React from "react"
import ProfileGrid from "@/components/ProfileGrid"
import { getPeople } from "@/lib/content"

const Board = async () => {
  const board = await getPeople("board")

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7]" id="board">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Section label */}
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Board Members
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Experience that <br />
              guides our growth.
            </h2>
          </div>
          <p className="text-muted text-lg max-w-sm leading-relaxed">
            Our board brings expertise in climate resilience, environmental governance and impact measurement.
          </p>
        </div>

        {/* On phones, an odd last card is centred instead of left on its own */}
        <ProfileGrid
          people={board}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8 max-md:[&>*:last-child:nth-child(odd)]:col-span-2 max-md:[&>*:last-child:nth-child(odd)]:justify-self-center max-md:[&>*:last-child:nth-child(odd)]:w-[calc(50%-0.625rem)]"
        />
      </div>
    </section>
  )
}

export default Board
