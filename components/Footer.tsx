'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl bg-white p-2 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/logo.png" 
                  alt="Green Minds INC Logo" 
                  fill 
                  className="object-contain p-1"
                />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                Green Minds <span className="text-accent italic font-serif">INC</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-base max-w-xs">
              Empowering communities to create environmentally responsible solutions that protect our planet for future generations through technology and education.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 hover:-translate-y-1" aria-label="Social Media">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-accent">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {["Home", "About Us", "Team", "Our Work", "Projects", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-accent">Resources</h4>
            <ul className="flex flex-col gap-5">
              {["Impact Reports", "Case Studies", "Environmental Guides", "Volunteer Portal", "Partner Resources"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-4 text-accent">Newsletter</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">Stay updated with our latest green initiatives and impact stories.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all outline-none"
                  aria-label="Email for newsletter"
                />
                <button className="btn-premium bg-accent text-primary font-black uppercase text-xs tracking-widest py-4 rounded-2xl hover:bg-white transition-all">
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-white/50 text-sm">
                 <Mail className="w-4 h-4 text-accent" />
                 <span>hello@greenminds.inc</span>
              </div>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                 <MapPin className="w-4 h-4 text-accent" />
                 <span>Lilongwe, Malawi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 text-white/40 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 Green Minds INC. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-accent transition-colors duration-500"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
               <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
