import React from "react"
import {
  MalawiCoatOfArms,
  UNEnvironmentLogo,
  WWFLogo,
  UNDPLogo,
  AfricanUnionLogo,
  GreenEconomyLogo,
} from "@/components/icons/PartnerLogos"

const partners = [
  { name: "Government of Malawi", Logo: MalawiCoatOfArms },
  { name: "UN Environment Programme", Logo: UNEnvironmentLogo },
  { name: "WWF", Logo: WWFLogo },
  { name: "UNDP", Logo: UNDPLogo },
  { name: "African Union", Logo: AfricanUnionLogo },
  { name: "Green Economy Coalition", Logo: GreenEconomyLogo },
]

const TrustedBy = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-b border-gray-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 md:gap-16">
          <div className="shrink-0">
            <h2 className="text-sm font-black text-primary/40 uppercase tracking-[0.3em] mb-2">
              Trusted By
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-10 flex-1">
            {partners.map(({ name, Logo }) => (
              <div
                key={name}
                className="group flex items-center justify-center text-primary/30 hover:text-primary grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                title={name}
              >
                <Logo className="h-8 md:h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
