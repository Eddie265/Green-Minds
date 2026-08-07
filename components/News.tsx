import React from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const News = () => {
  const newsItems = [
    {
      title: "New Partnership for a Greener Malawi",
      date: "August 15, 2026",
      summary: "Joining forces with international agencies to scale our impact across the nation.",
      image: "/1.jpg"
    },
    {
      title: "Tree Planting Campaign Success",
      date: "July 22, 2026",
      summary: "Over 50,000 native trees planted this season thanks to our dedicated volunteers.",
      image: "/2.jpg"
    },
    {
      title: "Youth Climate Leadership Programme",
      date: "June 30, 2026",
      summary: "Empowering 200 young innovators to lead environmental change in their communities.",
      image: "/3.jpg"
    },
  ]

  return (
    <section className="py-32 bg-[#FAFAF7]" id="news">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Latest News</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Stay updated with our latest initiatives and success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <div 
              key={i}
              className="group bg-white rounded-premium overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{news.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8">
                  {news.summary}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
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
