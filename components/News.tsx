import React from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const News = () => {
  const newsItems = [
    {
      title: "New Partnership for a Greener Malawi",
      date: "August 15, 2026",
      summary: "Joining forces with international agencies to scale our impact across the nation through advanced reforestation tech.",
      image: "/1.jpg",
      category: "Partnership"
    },
    {
      title: "Tree Planting Campaign Success",
      date: "July 22, 2026",
      summary: "Over 50,000 native trees planted this season thanks to our dedicated volunteers and innovative community seeds.",
      image: "/2.jpg",
      category: "Impact"
    },
    {
      title: "Youth Climate Leadership Programme",
      date: "June 30, 2026",
      summary: "Empowering 200 young innovators to lead environmental change in their local communities with digital tools.",
      image: "/3.jpg",
      category: "Education"
    },
  ]

  return (
    <section className="py-24 md:py-40 bg-[#FAFAF7]" id="news">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl text-left">
            {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">*/}
            {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
            {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Latest Updates</span>*/}
            {/*</div>*/}
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[0.95] tracking-tight">
              Stay <span className="text-accent italic font-serif">informed</span>, <br />
              get inspired.
            </h2>
          </div>
          <p className="text-muted text-lg max-w-sm leading-relaxed">
            Discover our latest initiatives, success stories, and the people behind our mission for a better planet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {newsItems.map((news, i) => (
            <div 
              key={i}
              className="group premium-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full shadow-lg">
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest">{news.category}</span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-accent/60 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{news.date}</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-500">
                  {news.title}
                </h3>
                <p className="text-muted leading-relaxed mb-10 flex-grow text-base">
                  {news.summary}
                </p>
                <button className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-[0.2em] hover:text-accent transition-all group/btn">
                  Read Article 
                  <span className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
