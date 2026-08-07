import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1">
                <Image 
                  src="/logo.png" 
                  alt="Green Minds INC Logo" 
                  fill 
                  className="object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Green Minds <span className="text-accent">INC</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Empowering communities to create environmentally responsible solutions that protect our planet for future generations.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-accent">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "About Us", "Team", "Our Work", "Projects", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-accent">Resources</h4>
            <ul className="flex flex-col gap-4">
              {["Impact Reports", "Case Studies", "Environmental Guides", "Volunteer Portal", "Partner Resources"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-accent">Newsletter</h4>
            <p className="text-white/60 mb-6">Subscribe to get the latest updates on our green initiatives.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-primary font-bold py-3 rounded-xl hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10 mb-10">
          <div className="flex items-center gap-4 text-white/60">
            <Mail className="w-5 h-5 text-accent" />
            <span>hello@greenminds.inc</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <Phone className="w-5 h-5 text-accent" />
            <span>+265 990 000 000</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Area 10, Lilongwe, Malawi</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-white/40 text-sm">
          <p>© 2026 Green Minds INC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
