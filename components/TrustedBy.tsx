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
    <section className="py-10 md:py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <h2 className="shrink-0 text-xl md:text-2xl font-bold text-foreground whitespace-nowrap">
            Trusted By
          </h2>

          <div className="flex flex-wrap items-center justify-start md:justify-between gap-x-8 gap-y-6 flex-1 opacity-60 grayscale">
            {partners.map(({ name, Logo }) => (
              <div
                key={name}
                className="flex items-center justify-center text-[#4A4A4A] hover:opacity-80 transition-opacity"
                title={name}
              >
                <Logo className="h-9 md:h-10 w-auto max-w-[120px] md:max-w-[140px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
