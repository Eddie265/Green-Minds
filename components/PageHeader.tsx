import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// Dark banner at the top of inner pages: gives each page its own main heading
// and keeps the transparent navbar's white text readable
const PageHeader = ({
  label,
  title,
  intro,
}: {
  label: string
  title: React.ReactNode
  intro: string
}) => {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Soft glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-accent" aria-current="page">{label}</span>
        </nav>

        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75">
          {intro}
        </p>
      </div>
    </section>
  )
}

export default PageHeader
