// The site's original people and gallery content. It seeds the database the
// first time (scripts/seed-content.mjs) and is shown if the database is ever
// unreachable, so the site never renders empty.

export type Person = {
  name: string
  role?: string
  bio: string
  image: string
  linkedin?: string
}

export type GalleryPhoto = {
  src: string
  width: number
  height: number
  caption: string
}

export const programmeIds = ["green-ed", "advocacy", "resources", "climate-witness"] as const

export type ProgrammeId = (typeof programmeIds)[number]

export const defaultTeam: Person[] = [
  {
    name: "Wayne Francis Hiwa",
    role: "Founding Director",
    image: "/wayne.jpeg",
    linkedin: "https://www.linkedin.com/in/wayne-hiwa-b275a424a",
    bio: "Wayne is an environmental science graduate passionate about sustainability, environmental protection, and youth empowerment. He previously served as an Environmental Officer at Green Impact Technologies, where he gained practical experience in environmental management and sustainability initiatives. Through Green Minds Malawi, he is committed to promoting environmental awareness, empowering young people, and driving community-led initiatives that address environmental challenges. He believes that equipping young people with knowledge and opportunities is key to building a greener, more sustainable future for Malawi and beyond.",
  },
  {
    name: "Wongani Mulanga",
    role: "Executive Director",
    image: "/wongie.jpeg",
    linkedin: "https://www.linkedin.com/in/wongani-mulanga",
    bio: "Wongani is a climate educator who works to help young people understand climate change and act on it within their own communities. She holds a BSc in Environmental Science from LUANAR and works as a Programmes Officer at Go Fund a Girl Child. She is the founder of Her Climate Lab, a girl-led climate education programme that has grown beyond the school where it began, and has taken part in UNFCCC climate negotiation sessions. She also speaks to students and young people on climate and environmental issues, career development, and encouraging young women to pursue their ambitions. Through Green Minds, she leads partnerships and external representation, building the relationships that carry the organization’s work into schools and communities.",
  },
  {
    name: "Lughano Mwalyambwire",
    role: "Operations and Communications Officer",
    image: "/lughano.jpeg",
    linkedin: "https://www.linkedin.com/in/lughano-mwalyambwire-463415282",
    bio: "Lughano holds a BSc in Environmental Science and brings experience in GIS and drone mapping, including humanitarian mapping during Cyclone Freddy. His background in monitoring, evaluation and fieldwork spans several sectors. He has worked as an M&E field consultant on a UN Migration project, supervised the evaluation of the National Numeracy Programme in primary schools across Malawi, and carried out fieldwork with the Ministry of Lands, UNFPA and the University of Chicago's BEFIT programme. He has helped build the Green Ed Initiative and Climate Witness, bringing climate education and community-based environmental documentation to communities across Malawi.",
  },
  {
    name: "Pertunia Jesman",
    role: "General Secretary",
    image: "/pertunia.jpeg",
    linkedin: "https://www.linkedin.com/in/pertunia-jesman-97a957349",
    bio: "Pertunia is an agribusiness professional focused on agricultural commercialisation as a way to improve livelihoods, develop sustainable enterprises and manage the environment. She holds a BSc in Agribusiness Management from LUANAR and currently works with the World Bank-funded Agricultural Commercialization Project (AGCOM II), also known as the Malawi Food Systems Resilience Program, under the Ministry of Agriculture. There she supports smallholder producer organisations through concept note development, business plan assessment, matching-grant processes and field-based monitoring, with an emphasis on environmentally responsible business practices. Through Green Minds, she supports initiatives that promote environmental education and create sustainable opportunities for young people and local communities.",
  },
]

export const defaultBoard: Person[] = [
  {
    name: "Dr. Josephine Marion Zimba-Chirwa",
    image: "/Josephine.jpeg",
    linkedin: "https://www.linkedin.com/in/josephine-marion-zimba-69a8002a4",
    bio: "Dr. Zimba-Chirwa is a Lecturer in Environment and Development at LUANAR. She holds a PhD in Environmental Geography and Earth Sciences from the University of Glasgow, with a particular focus on situated resilience to climate change. Her postgraduate research has examined how environmental challenges are experienced differently by urban and rural communities, and the distinct ways each responds to them. She is a member of the Malawi Higher Education Institutions Network on Climate Change Learning and Coordinator of the Bunda Environmental Club. Overall, her work focuses on helping communities become more resilient to environmental change.",
  },
  {
    name: "Richard Chikonga",
    image: "/Richard.jpeg",
    linkedin: "https://www.linkedin.com/in/richard-chikonga-49037a77",
    bio: "A management systems specialist with extensive experience in environmental, health and safety standards, Richard currently serves as HSSEQ Manager at Petroleum Importers Limited. He holds an MSc in Environmental Protection and Management from MUBAS and a BSc in Health Management from KUHES. He led the development and certification of an Integrated Management System at PressCane Limited aligned with ISO 9001, ISO 14001 and ISO 45001, and is certified as a lead developer, implementer and auditor across several further ISO standards. His expertise directly strengthens the Organisation's credibility in environmental governance, risk management and responsible programme delivery.",
  },
  {
    name: "Emmanuel Mkagula",
    image: "/Emmanuel.jpeg",
    linkedin: "https://www.linkedin.com/in/emmanuel-mkagula-5bb830389",
    bio: "A monitoring and evaluation specialist with over four years of experience measuring what agricultural and community development programmes actually achieve, Emmanuel currently works at Art and Global Health Center Africa (ArtGlo) in Zomba, where he also leads fundraising. He began his career at the Department of Agricultural Research Services on the World Bank-funded Agricultural Productivity Program for Southern Africa (APPSA), and has published research on nutrition and agriculture in Malawi. He holds a BSc in Agricultural Economics from LUANAR and is completing an MSc in Agricultural and Applied Economics there. His expertise directly strengthens the Organisation's ability to evidence its impact and build the fundraising capacity it needs to grow.",
  },
]

export const defaultGalleries: Record<ProgrammeId, GalleryPhoto[]> = {
  "green-ed": [
      { src: "/work1.png", width: 1538, height: 1023, caption: "Lucky Sikelo receives his solar lamp from the Green Minds team" },
      { src: "/work/greened-chinsapo-student.jpeg", width: 608, height: 1080, caption: "A Form 3 student at Chinsapo Secondary School with her new solar desk lamp" },
      { src: "/work/greened-alex-mdowa.jpeg", width: 666, height: 887, caption: "Alex Mdowa, Standard 7 at Makeshi Primary School, ready to extend his study hours" },
    ],
  "advocacy": [
      { src: "/work2.jpeg", width: 1080, height: 608, caption: "Domwe Primary School: climate change session with Standards 6, 7 and 8" },
      { src: "/work/advocacy-domwe-session.jpeg", width: 1080, height: 608, caption: "Learners at Domwe Primary School during the climate session" },
      { src: "/work/advocacy-glynn-jonnes.jpeg", width: 1080, height: 810, caption: "Glynn Jonnes Academy: learning about the 3 R's" },
      { src: "/work/advocacy-glynn-jonnes-class.jpeg", width: 1080, height: 608, caption: "Reduce, Reuse, Recycle lesson at Glynn Jonnes Academy" },
      { src: "/work/advocacy-16-days.jpeg", width: 896, height: 503, caption: "16 Days of Activism at LUANAR Bunda Campus" },
      { src: "/work/advocacy-girls-green-futures.jpeg", width: 896, height: 844, caption: "Girls & Green Futures webinar" },
      { src: "/work/advocacy-webinar-session.jpeg", width: 881, height: 473, caption: "Young women and climate leaders live on the Girls & Green Futures webinar" },
      { src: "/work/advocacy-climate-justice-walk.jpeg", width: 952, height: 1170, caption: "Climate Justice Walk with the Clean Cities Project" },
      { src: "/work/advocacy-youth-symposium.jpeg", width: 608, height: 1080, caption: "National Youth Symposium on Public Debt" },
      { src: "/work/advocacy-world-youth-day.jpeg", width: 1412, height: 1059, caption: "World Youth Day at Nanjati CDS, Lilongwe" },
      { src: "/work/advocacy-world-youth-day-panel.jpeg", width: 1412, height: 685, caption: "World Youth Day panel discussion on youth participation in the economy" },
      { src: "/work/advocacy-world-youth-day-audience.jpeg", width: 1412, height: 1059, caption: "Young people at the World Youth Day commemoration" },
      { src: "/work/advocacy-youth-summit.jpeg", width: 523, height: 697, caption: "2026 National Youth Summit at BICC, Lilongwe" },
      { src: "/work/advocacy-youth-summit-bicc.jpeg", width: 587, height: 783, caption: "Representing Green Minds at the National Youth Summit" },
    ],
  "resources": [
      { src: "/work3.jpeg", width: 1080, height: 810, caption: "Tree planting at Mbidzi Secondary School" },
      { src: "/work/resources-mbidzi-seedlings.jpeg", width: 1080, height: 608, caption: "Mbidzi learners with their seedlings" },
      { src: "/work/resources-mbidzi-learners.jpeg", width: 1080, height: 608, caption: "Learners and the Green Minds team ready to plant" },
      { src: "/work/resources-domwe-bins.jpeg", width: 1080, height: 608, caption: "Donating classroom waste bins at Domwe Primary School" },
      { src: "/work/resources-domwe-learners.jpeg", width: 900, height: 916, caption: "Domwe Primary School learners" },
    ],
  "climate-witness": [
      { src: "/work4.png", width: 1448, height: 1086, caption: "Documenting flooding in Mangochi" },
      { src: "/work/witness-kumwenda-interview.jpeg", width: 690, height: 651, caption: "Interviewing Mrs Katherine Kumwenda about how floods have affected her family" },
      { src: "/work/witness-poster.jpeg", width: 629, height: 844, caption: "Climate Witness: Living the Crisis" },
    ],
}
