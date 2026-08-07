"use client"

import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  return (
    <section className="py-24 md:py-40 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left: Content & Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">*/}
              {/*  <span className="w-1.5 h-1.5 rounded-full bg-accent" />*/}
              {/*  <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">Contact Us</span>*/}
              {/*</div>*/}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[0.95] tracking-tight">
                Let's grow a <br />
                <span className="text-accent italic font-serif">greener</span> future.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-lg">
                Have a question, an idea, or want to partner with us? We'd love to hear from you. 
                Our team usually responds within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg md:text-xl font-black text-primary break-all">hello@greenminds.inc</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg md:text-xl font-black text-primary">+265 990 000 000</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-premium transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg md:text-xl font-black text-primary">Area 10, Lilongwe, Malawi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="premium-card p-8 md:p-12 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <form className="relative z-10 flex flex-col gap-6" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1">Full Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1">Subject</label>
                <input 
                  id="subject"
                  name="subject"
                  type="text" 
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-primary/60 ml-1">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  required
                  className="w-full bg-[#FAFAF7] border-2 border-transparent focus:border-accent/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium resize-none"
                />
              </div>

              <button 
                type="submit"
                className="btn-premium bg-primary text-white w-full py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10"
              >
                Send Message
              </button>
              
              <p className="text-center text-[10px] text-muted font-bold uppercase tracking-widest pt-4">
                By clicking send, you agree to our <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
