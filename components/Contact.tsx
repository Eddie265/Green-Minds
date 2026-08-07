"use client"

import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  return (
    <section className="py-32 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content & Info */}
          <div className="reveal-child">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch <br />
              <span className="text-accent italic">With Us</span>
            </h2>
            <p className="text-muted text-lg mb-12 leading-relaxed max-w-md">
              Have questions about our initiatives or want to join our movement? 
              Reach out to us and our team will get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAF7] border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold text-primary">hello@greenminds.inc</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAF7] border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold text-primary">+265 990 000 000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAF7] border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-primary">Area 10, Lilongwe, Malawi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#FAFAF7] p-8 md:p-12 rounded-[40px] border border-gray-100 reveal-child shadow-sm">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-primary ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-primary ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-primary ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  placeholder="How can we help?" 
                  required 
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-primary ml-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  placeholder="Tell us more about your inquiry..." 
                  required 
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/10 active:scale-[0.98]"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
