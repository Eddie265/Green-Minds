import React from "react"
import { Star } from "lucide-react"

const Testimonial = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#FAFAF7] p-12 md:p-20 rounded-[48px] border border-gray-100 relative overflow-hidden text-center">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            <blockquote className="text-3xl md:text-4xl font-bold text-primary mb-12 leading-tight">
              "Green Minds INC transformed our community with sustainable solutions that truly make a difference."
            </blockquote>

            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-primary text-xl">Chifundo Banda</p>
                <p className="text-muted font-medium">Community Leader, Dedza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
