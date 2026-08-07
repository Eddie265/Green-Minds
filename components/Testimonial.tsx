import React from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Green Minds INC transformed our community with sustainable solutions that truly make a difference. Their approach to solar energy is revolutionary for rural development.",
      author: "Chifundo Banda",
      role: "Community Leader",
      org: "Dedza District Council",
      image: "/p2.jpg",
      rating: 5
    },
    {
      quote: "Partnering with Green Minds has allowed us to scale our reforestation efforts by 300%. Their technical expertise and local knowledge are unmatched in the region.",
      author: "Sarah J. Miller",
      role: "Project Director",
      org: "Global Green Fund",
      image: "/p1.jpg",
      rating: 5
    },
    {
      quote: "The youth leadership programme is creating a new generation of environmental activists. My daughter is now leading a waste management initiative in her school.",
      author: "Patrick Phiri",
      role: "Parent & Educator",
      org: "Lilongwe Academy",
      image: "/p4.jpg",
      rating: 5
    }
  ]

  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
          {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
          {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Voice of Impact</span>*/}
          {/*</div>*/}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
            Stories of <span className="text-accent italic font-serif">real</span> change.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group premium-card p-10 flex flex-col h-full relative">
              {/* Quote icon */}
              <div className="absolute top-8 right-10 text-accent/10 group-hover:text-accent/20 transition-colors">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H16.017C15.465 8 15.017 8.448 15.017 9V12C15.017 12.552 14.569 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.899 6.899 16 8.017 16H11.017C11.569 16 12.017 15.552 12.017 15V9C12.017 8.448 11.569 8 11.017 8H8.017C7.465 8 7.017 8.448 7.017 9V12C7.017 12.552 6.569 13 6.017 13H5.017V21H6.017Z" />
                 </svg>
              </div>

              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg font-bold text-primary mb-10 leading-relaxed flex-grow">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                   <Image 
                     src={t.image} 
                     alt={t.author}
                     fill
                     className="object-cover"
                   />
                </div>
                <div>
                  <p className="font-black text-primary leading-tight">{t.author}</p>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest mt-1">
                    {t.role}, <span className="text-accent">{t.org}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
