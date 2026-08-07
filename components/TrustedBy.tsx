import React from "react"

const TrustedBy = () => {
  const partners = [
    "Government of Malawi",
    "UN Environment Programme",
    "WWF",
    "UNDP",
    "African Union",
    "Green Economy Coalition"
  ]

  return (
    <section className="py-20 bg-background border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-12">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner} className="flex flex-col items-center">
               <span className="text-xl font-bold text-foreground text-center max-w-[150px]">
                 {partner}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
