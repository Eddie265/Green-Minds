"use client"

import React, { useEffect, useRef } from "react"
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Leaf,
  MapPin,
  Sun,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: "01",
    title: "Green Ed Initiative",
    category: "Climate Education & Clean Energy",
    status: "Active & Growing",
    location: "Malawi",
    description:
        "Green Ed is Green Minds Malawi's schools programme, delivering climate and environmental education alongside solar lamp distribution to students without electricity at home.",
    stats: [
      {
        value: "100+",
        label: "Students Reached",
      },
      {
        value: "4",
        label: "Partner Schools",
      },
    ],
    tags: ["Climate Education", "Solar Energy", "Schools"],
    icon: Sun,
    highlights: [
      "Climate and environmental education delivered directly in schools, treating students as active participants rather than passive recipients.",
      "Solar lamps distributed to students from households without electricity, following household visits to verify need and ensure fair allocation.",
      "Environmental clubs established at partner schools alongside clean-up campaigns and bin donations for waste management.",
      "Tree planting activities run in partnership with partner schools.",
    ],
    timeline: [
      "October 2025 — Programme launch: solar lamp distribution begins at Chinsapo Secondary School.",
      "November 2025 — Environmental education session held at Domwe Primary School with Standards 6, 7, and 8 students.",
      "December 2025 — Returned to Domwe Primary School to donate classroom waste bins, reinforcing earlier lessons with a practical, everyday tool.",
      "January 2026 — Programme expanded to Glynn Jonnes Academy Primary School, engaging both staff and learners.",
    ],
    achievement:
        "Reached over 100 students across four partner schools, three primary and one secondary.",
    sdgs:
        "SDG 4 (Quality Education) · SDG 7 (Affordable and Clean Energy) · SDG 13 (Climate Action) · SDG 15 (Life on Land)",
  },
  {
    number: "02",
    title: "Climate Witness: Living the Crisis",
    category: "Climate Stories & Advocacy",
    status: "Active",
    location: "Mangochi & Malawi",
    description:
        "Climate Witness is a community-driven project documenting how families experience climate change from floods, heatwaves, droughts, and crop failures, turning these stories into tools for awareness, advocacy, policy change, and community resilience.",
    stats: [
      {
        value: "1",
        label: "Documentary Published",
      },
      {
        value: "3",
        label: "SDGs Aligned",
      },
    ],
    tags: ["Climate Justice", "Storytelling", "Advocacy"],
    icon: Camera,
    highlights: [
      "Story documentation through in-depth interviews and multimedia capture with affected families across a range of climate events.",
      "Advocacy and policy influence through documented testimony packaged into policy briefs, evidence materials, and direct advocacy.",
      "Community resilience and practical support through connections between documented communities, NGOs, and relief resources.",
      "Education and global awareness through school materials, travelling exhibitions, documentary production, and a youth ambassador programme.",
    ],
    timeline: [
      "First published video documents flood-affected communities in Mangochi.",
      "Firsthand testimony from flood-affected communities has been documented.",
      "Additional field interviews are ongoing.",
      "Additional Climate Witness content is currently in production.",
    ],
    achievement:
        "Documented firsthand testimony from flood-affected communities in Mangochi and published the first documentary-style video.",
    sdgs:
        "SDG 13 (Climate Action) · SDG 11 (Sustainable Cities and Communities) · SDG 17 (Partnerships for the Goals)",
  },
]

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const heading = sectionRef.current?.querySelector(".projects-heading")
      const intro = sectionRef.current?.querySelector(".projects-intro")
      const cards = sectionRef.current?.querySelectorAll(".project-card")
      const bottom = sectionRef.current?.querySelector(".projects-bottom")

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
              y: 30,
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
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cards[0],
                start: "top 80%",
                once: true,
              },
            }
        )
      }

      if (bottom) {
        gsap.fromTo(
            bottom,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bottom,
                start: "top 85%",
                once: true,
              },
            }
        )
      }
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
      <section
          ref={sectionRef}
          className="relative overflow-hidden bg-[#FAFAF7] py-24 md:py-40"
          id="projects"
      >
        {/* Decorative background */}
        <div
            className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full border-[80px] border-primary/[0.025]"
            aria-hidden="true"
        />

        {/* Decorative background */}
        <div
            className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full border-[60px] border-accent/[0.025]"
            aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          {/* Section heading */}
          <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="projects-heading max-w-3xl">
              {/* Section label */}
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                Our Programmes
              </span>
              </div>

              <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-primary md:text-6xl lg:text-7xl">
                Programmes creating
                <br />
                <span className="font-serif italic text-accent">
                meaningful
              </span>{" "}
                change.
              </h2>
            </div>

            {/* Section introduction */}
            <div className="projects-intro max-w-md">
              <p className="text-base leading-relaxed text-muted md:text-lg">
                Green Minds Malawi currently runs two active, on-the-ground
                programmes tackling climate education and climate justice in
                Malawi. Together, they form a growing ecosystem of education,
                clean energy access, and community storytelling.
              </p>
            </div>
          </div>

          {/* Programme cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                  <article
                      key={project.number}
                      className="project-card premium-card group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white"
                  >
                    {/* Programme header */}
                    <div className="relative overflow-hidden bg-primary p-8 md:p-10">
                      {/* Decorative accent */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/[0.04]" />

                      {/* Decorative accent */}
                      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-accent/[0.05]" />

                      <div className="relative z-10">
                        {/* Number and status */}
                        <div className="mb-8 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                        <span className="text-sm font-black text-white">
                          {project.number}
                        </span>
                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-accent" />

                            <span className="text-[9px] font-black uppercase tracking-widest text-white">
                          {project.status}
                        </span>
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* Category */}
                        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                          {project.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                          {project.title}
                        </h3>

                        {/* Location */}
                        <div className="mt-5 flex items-center gap-2 text-white/60">
                          <MapPin className="h-4 w-4 text-accent" />

                          <span className="text-xs font-bold uppercase tracking-widest">
                        {project.location}
                      </span>
                        </div>
                      </div>
                    </div>

                    {/* Programme content */}
                    <div className="flex flex-grow flex-col p-8 md:p-10">
                      {/* Description */}
                      <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">
                        {project.description}
                      </p>

                      {/* Statistics */}
                      <div className="mb-9 grid grid-cols-2 gap-4">
                        {project.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl bg-[#F5F7F2] p-5 transition-all duration-500 group-hover:bg-accent/10"
                            >
                              <div className="text-3xl font-black tracking-tight text-primary">
                                {stat.value}
                              </div>

                              <div className="mt-1 text-[9px] font-black uppercase tracking-widest text-primary/50">
                                {stat.label}
                              </div>
                            </div>
                        ))}
                      </div>

                      {/* Programme focus */}
                      <div className="mb-9">
                        {/* Section title */}
                        <div className="mb-5 flex items-center gap-3">
                          <span className="h-px w-7 bg-accent" />

                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        Programme Focus
                      </span>
                        </div>

                        <div className="space-y-4">
                          {project.highlights.map((highlight) => (
                              <div
                                  key={highlight}
                                  className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

                                <p className="text-sm leading-relaxed text-muted">
                                  {highlight}
                                </p>
                              </div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="mb-9">
                        {/* Section title */}
                        <div className="mb-5 flex items-center gap-3">
                          <span className="h-px w-7 bg-accent" />

                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        Programme Timeline
                      </span>
                        </div>

                        <div className="space-y-4">
                          {project.timeline.map((item) => (
                              <div
                                  key={item}
                                  className="flex items-start gap-3"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                                <p className="text-xs leading-relaxed text-muted">
                                  {item}
                                </p>
                              </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievement */}
                      <div className="mb-8 rounded-2xl border border-primary/5 bg-[#FAFAF7] p-5">
                        {/* Achievement title */}
                        <div className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-accent">
                          Key Achievement
                        </div>

                        <p className="text-sm font-medium leading-relaxed text-primary">
                          {project.achievement}
                        </p>
                      </div>

                      {/* SDG alignment */}
                      <div className="mt-auto">
                        {/* SDG title */}
                        <div className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary/40">
                          Aligned Sustainable Development Goals
                        </div>

                        <p className="text-xs leading-relaxed text-primary/60">
                          {project.sdgs}
                        </p>

                        {/* Bottom accent */}
                        <div className="mt-7 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-1/3 rounded-full bg-accent/40 transition-all duration-700 group-hover:w-full" />
                        </div>
                      </div>
                    </div>
                  </article>
              )
            })}
          </div>

          {/* Bottom statement */}
          <div className="projects-bottom mx-auto mt-20 max-w-3xl text-center md:mt-28">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Leaf className="h-6 w-6" />
            </div>

            {/* Heading */}
            <h3 className="text-3xl font-black leading-tight text-primary md:text-4xl">
              Education.
              <span className="font-serif italic text-accent">
              {" "}
                Action.
            </span>
              <br />
              Stories that drive change.
            </h3>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              From helping students access clean energy to amplifying the voices
              of communities living through the climate crisis, Green Minds is
              building practical pathways toward a more sustainable and just
              future.
            </p>

            {/* CTA */}
            <button className="group mt-8 inline-flex items-center gap-4 rounded-full bg-primary py-2.5 pl-8 pr-2 text-sm font-bold text-white transition-all duration-500 hover:bg-accent hover:text-primary">
              Learn More

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

export default FeaturedProjects