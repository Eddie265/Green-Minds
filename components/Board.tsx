import React from "react"
import ProfileGrid, { type Profile } from "@/components/ProfileGrid"

const board: Profile[] = [
  {
    name: "Dr. Josephine Marion Zimba-Chirwa",
    image: "/Josephine.jpeg",
    bio: "Dr. Zimba-Chirwa is a Lecturer in Environment and Development at LUANAR. She holds a PhD in Environmental Geography and Earth Sciences from the University of Glasgow, with a particular focus on situated resilience to climate change. Her postgraduate research has examined how environmental challenges are experienced differently by urban and rural communities, and the distinct ways each responds to them. She is a member of the Malawi Higher Education Institutions Network on Climate Change Learning and Coordinator of the Bunda Environmental Club. Overall, her work focuses on helping communities become more resilient to environmental change.",
  },
  {
    name: "Richard Chikonga",
    image: "/Richard.jpeg",
    bio: "A management systems specialist with extensive experience in environmental, health and safety standards, Richard currently serves as HSSEQ Manager at Petroleum Importers Limited. He holds an MSc in Environmental Protection and Management from MUBAS and a BSc in Health Management from KUHES. He led the development and certification of an Integrated Management System at PressCane Limited aligned with ISO 9001, ISO 14001 and ISO 45001, and is certified as a lead developer, implementer and auditor across several further ISO standards. His expertise directly strengthens the Organisation's credibility in environmental governance, risk management and responsible programme delivery.",
  },
  {
    name: "Emmanuel Mkagula",
    image: "/Emmanuel.jpeg",
    bio: "A monitoring and evaluation specialist with over four years of experience measuring what agricultural and community development programmes actually achieve, Emmanuel currently works at Art and Global Health Center Africa (ArtGlo) in Zomba, where he also leads fundraising. He began his career at the Department of Agricultural Research Services on the World Bank-funded Agricultural Productivity Program for Southern Africa (APPSA), and has published research on nutrition and agriculture in Malawi. He holds a BSc in Agricultural Economics from LUANAR and is completing an MSc in Agricultural and Applied Economics there. His expertise directly strengthens the Organisation's ability to evidence its impact and build the fundraising capacity it needs to grow.",
  },
]

const Board = () => {
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
