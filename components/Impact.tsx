"use client"

import React, { useEffect, useRef } from "react"
import {
  ArrowRight,
  Camera,
  Leaf,
  Sun,
  TreePine,
  Users,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EarthGlobe } from "@/components/icons/ImpactIcons"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: "01",
    image:"/work1.png",
    title: "Green-Ed Initiative",
    category: "Clean Energy & Education",
    description:
        "Access to light should not determine a child's future. The Green-Ed Initiative provides solar lighting to learners from households without electricity, helping them study safely and extend their study hours.",
    icon: Sun,
    stories: [
      "A Form 3 student at Chinsapo Secondary School received a solar desk lamp after studying under the dim glow of her mother's phone torch.",
      "Alex Mdowa, a Standard 7 learner at Makeshi Primary School, received solar lighting support to extend his study hours as he prepares for his Primary School Leaving Exams.",
      "Lucky Sikelo also received a solar lamp, providing reliable light at night and one less barrier between him and his goals.",
    ],
  },
  {
    number: "02",
    image:"/work2.jpeg",
    title: "Environmental Advocacy & Campaigns",
    category: "Climate Action & Youth Engagement",
    description:
        "From classrooms to communities, Green Minds works directly with students, schools, youth networks and communities to build environmental literacy and drive collective action.",
    icon: Leaf,
    stories: [
      "School engagements at Domwe Primary School focused on climate change and the role young people can play in addressing it.",
      "Green Minds engaged staff and learners at Glynn Jonnes Academy around environmental protection and the 3 R's: Reduce, Reuse, Recycle.",
      "The team joined the 16 Days of Activism campaign to raise awareness against digital violence, abuse and harassment against women and girls.",
      "The Girls & Green Futures webinar brought together young women and climate leaders to discuss sustainability, innovation and leadership.",
      "Green Minds joined the Climate Justice Walk, standing alongside young people, environmental advocates and community members calling for urgent climate action.",
      "The organisation participated in the National Youth Symposium, World Youth Day and the 2026 National Youth Summit, engaging in conversations around youth empowerment, leadership, climate action and national development.",
    ],
  },
  {
    number: "03",
    image:"/work3.jpeg",
    title: "Resource Distribution",
    category: "Community & Environmental Resources",
    description:
        "Green Minds supports schools and communities with practical resources that help turn environmental awareness into everyday action.",
    icon: TreePine,
    stories: [
      "At Mbidzi Secondary School, Green Minds and learners planted trees together, with each seedling representing cleaner air, hope and a commitment to protecting the earth.",
      "Green Minds returned to Domwe Primary School to donate classroom waste bins, reinforcing earlier environmental lessons.",
      "The resource distribution work helps learners put sustainable environmental practices into their daily lives.",
    ],
  },
  {
    number: "04",
    image:"/work4.png",
    title: "Climate Witness: Living the Crisis",
    category: "Climate Stories & Community Resilience",
    description:
        "Climate Witness is a community-driven project documenting how families experience climate change firsthand, turning these stories into tools for awareness, advocacy, policy change and community resilience.",
    icon: Camera,
    stories: [
      "The project amplifies the voices of people on the frontlines whose lives are being shaped by a changing climate.",
      "Green Minds documents lived experiences to inspire awareness, drive action and influence policies that protect both people and the planet.",
      "Mrs Katherine Kumwenda's story was documented to highlight how heavy rains and flooding have affected her and her family in Mangochi.",
    ],
  },
]

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const heading = containerRef.current?.querySelector(".work-heading")
      const intro = containerRef.current?.querySelector(".work-intro")
      const cards = containerRef.current?.querySelectorAll(".work-card")
      const bottomStatement =
          containerRef.current?.querySelector(".bottom-statement")

      if (heading) {
        gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true,
              },
            }
        )
      }

      if (intro) {
        gsap.fromTo(
            intro,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: intro,
                start: "top 85%",
                once: true,
              },
            }
        )
      }

      if (cards && cards.length > 0) {
        gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards[0],
                start: "top 80%",
                once: true,
              },
            }
        )
      }

      if (bottomStatement) {
        gsap.fromTo(
            bottomStatement,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bottomStatement,
                start: "top 85%",
                once: true,
              },
            }
        )
      }
    }, containerRef)

    return () => context.revert()
  }, [])

  return (
      <section
          id="our-work"
          className="relative overflow-hidden bg-[#F3F4F2] py-24 md:py-36"
      >
        {/* Decorative earth background */}
        <div
            className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
            aria-hidden="true"
        >
          <div className="relative mr-[-15%] h-[min(100vw,900px)] w-[min(100vw,900px)] text-[#7A9B6D] opacity-[0.07]">
            <EarthGlobe />
          </div>
        </div>

        <div
            ref={containerRef}
            className="relative z-10 mx-auto max-w-7xl px-6 md:px-8"
        >
          {/* Section introduction */}
          <div className="mb-16 grid grid-cols-1 items-end gap-12 lg:mb-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Left heading */}
            <div className="work-heading">
              {/* Section label */}
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />

                <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Our Work
              </span>
              </div>

              <h2 className="text-5xl font-black leading-[0.92] tracking-tight text-primary md:text-6xl lg:text-7xl">
                Turning ideas
                <br />
                into{" "}
                <span className="font-serif italic text-accent">
                action.
              </span>
              </h2>
            </div>

            {/* Right introduction */}
            <div className="work-intro max-w-2xl lg:pb-2">
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                Green Minds Malawi runs programmes that respond directly to the
                challenges young people and their communities face today:
                energy poverty, environmental degradation, gender-based violence,
                and the widening effects of climate change.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                From providing solar lighting to learners to documenting
                communities experiencing climate change, our work is rooted in
                practical action, education, advocacy and community resilience.
              </p>
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                  <article
                      key={project.number}
                      className="work-card premium-card group overflow-hidden rounded-[2rem] bg-white"
                  >
                    {/* Project image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8EDE5]">
                      {/* Place project image here */}

                      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/30">

                        <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      <Image
                          src={project.image}
                          alt={project.title}
                          fill


                      />
                    </span>
                      </div>

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                      {/* Project number */}
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="text-sm font-black text-primary">
                      {project.number}
                    </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-7 md:p-9">
                      {/* Icon and category */}
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>

                        <span className="text-right text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
                      {project.category}
                    </span>
                      </div>

                      {/* Project title */}
                      <h3 className="mb-4 text-2xl font-black leading-tight text-primary md:text-3xl">
                        {project.title}
                      </h3>

                      {/* Project description */}
                      <p className="mb-7 leading-relaxed text-muted">
                        {project.description}
                      </p>

                      {/* Project activities */}
                      <div className="space-y-3">
                        {project.stories.map((story, storyIndex) => (
                            <div
                                key={storyIndex}
                                className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                              <p className="text-sm leading-relaxed text-muted">
                                {story}
                              </p>
                            </div>
                        ))}
                      </div>

                      {/* Bottom accent line */}
                      <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-1/3 rounded-full bg-accent/40 transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </article>
              )
            })}
          </div>

          {/* Bottom statement */}
          <div className="bottom-statement mx-auto mt-16 max-w-4xl text-center md:mt-24">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Users className="h-6 w-6" />
            </div>

            <h3 className="text-3xl font-black leading-tight text-primary md:text-4xl">
              Real stories.
              <span className="font-serif italic text-accent">
              {" "}
                Real communities.
            </span>
              <br />
              Real change.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              We believe that meaningful change begins by listening to
              communities, empowering young people and turning knowledge into
              action.
            </p>

            {/* View more work button */}
            <button className="btn-premium group mt-8 inline-flex items-center gap-4 rounded-full bg-primary py-2.5 pl-8 pr-2 text-sm font-bold text-white transition-all duration-500 hover:bg-accent hover:text-primary">
              Explore Our Work

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-transform duration-500 group-hover:scale-110">
              <ArrowRight
                  className="h-5 w-5"
                  strokeWidth={3}
              />
            </span>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Impact