import React from "react"
import ProfileGrid, { type Profile } from "@/components/ProfileGrid"

const team: Profile[] = [
  {
    name: "Wayne Francis Hiwa",
    image: "/wayne.jpeg",
    linkedin: "https://www.linkedin.com/in/wayne-hiwa-b275a424a",
    bio: "Wayne is an environmental science graduate passionate about sustainability, environmental protection, and youth empowerment. He previously served as an Environmental Officer at Green Impact Technologies, where he gained practical experience in environmental management and sustainability initiatives. Through Green Minds Malawi, he is committed to promoting environmental awareness, empowering young people, and driving community-led initiatives that address environmental challenges. He believes that equipping young people with knowledge and opportunities is key to building a greener, more sustainable future for Malawi and beyond.",
  },
  {
    name: "Wongani Mulanga",
    image: "/wongie.jpeg",
    linkedin: "https://www.linkedin.com/in/wongani-mulanga",
    bio: "Wongani is a climate educator who works to help young people understand climate change and act on it within their own communities. She holds a BSc in Environmental Science from LUANAR and works as a Programmes Officer at Go Fund a Girl Child. She is the founder of Her Climate Lab, a girl-led climate education programme that has grown beyond the school where it began, and has taken part in UNFCCC climate negotiation sessions. She also speaks to students and young people on climate and environmental issues, career development, and encouraging young women to pursue their ambitions. Through Green Minds, she leads partnerships and external representation, building the relationships that carry the organization’s work into schools and communities.",
  },
  {
    name: "Lughano Mwalyambwire",
    image: "/lughano.jpeg",
    linkedin: "https://www.linkedin.com/in/lughano-mwalyambwire-463415282",
    bio: "Lughano holds a BSc in Environmental Science and brings experience in GIS and drone mapping, including humanitarian mapping during Cyclone Freddy. His background in monitoring, evaluation and fieldwork spans several sectors. He has worked as an M&E field consultant on a UN Migration project, supervised the evaluation of the National Numeracy Programme in primary schools across Malawi, and carried out fieldwork with the Ministry of Lands, UNFPA and the University of Chicago's BEFIT programme. He has helped build the Green Ed Initiative and Climate Witness, bringing climate education and community-based environmental documentation to communities across Malawi.",
  },
  {
    name: "Pertunia Jesman",
    image: "/pertunia.jpeg",
    linkedin: "https://www.linkedin.com/in/pertunia-jesman-97a957349",
    bio: "Pertunia is an agribusiness professional focused on agricultural commercialisation as a way to improve livelihoods, develop sustainable enterprises and manage the environment. She holds a BSc in Agribusiness Management from LUANAR and currently works with the World Bank-funded Agricultural Commercialization Project (AGCOM II), also known as the Malawi Food Systems Resilience Program, under the Ministry of Agriculture. There she supports smallholder producer organisations through concept note development, business plan assessment, matching-grant processes and field-based monitoring, with an emphasis on environmentally responsible business practices. Through Green Minds, she supports initiatives that promote environmental education and create sustainable opportunities for young people and local communities.",
  },
]

const Team = () => {
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
            Meet the young environmental scientists and leaders behind Green Minds Malawi.
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
