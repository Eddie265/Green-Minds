"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* Brand & Mission */}
            <div>
              <h3 className="text-2xl font-black mb-6">
                Green Minds INC
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                Empowering communities to create environmentally responsible
                solutions that protect our planet for future generations through
                technology and education.
              </p>

              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <Link
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                ))}
              </div>
            </div>


            {/* Navigation */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-accent">
                Navigation
              </h4>

              <ul className="flex flex-col gap-5">
                {[
                  "Home",
                  "About Us",
                  "Team",
                  "Our Work",
                  "Projects",
                  "News",
                  "Contact",
                ].map((item) => (
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
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-accent">
                Resources
              </h4>

              <ul className="flex flex-col gap-5">
                {[
                  "Impact Reports",
                  "Case Studies",
                  "Environmental Guides",
                  "Volunteer Portal",
                  "Partner Resources",
                ].map((item) => (
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
            <div>

              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-4 text-accent">
                Newsletter
              </h4>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Stay updated with our latest green initiatives and impact stories.
              </p>


              <form className="flex flex-col gap-3">

                <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent"
                />


                <button
                    type="submit"
                    className="bg-accent text-primary font-black uppercase text-xs tracking-widest py-4 rounded-2xl hover:bg-white transition-all"
                >
                  Subscribe
                </button>

              </form>


              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  hello@greenminds.inc
                </div>


                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  Lilongwe, Malawi
                </div>

              </div>

            </div>

          </div>



          {/* Technology Partner */}
          <div className="mt-20 pt-12 border-t border-white/10">

            <div className="bg-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">


              <div className="flex items-center gap-6">


                {/* Transparent CodeCraft Cloud Logo */}
                <div className="flex items-center justify-center">

                  <Image
                      src="/logo1.png"
                      width={150}
                      height={70}
                      alt="CodeCraft Cloud Logo"
                      className="object-contain"
                  />

                </div>



                <div>

                  <p className="text-accent text-xs uppercase tracking-widest font-black mb-2">
                    Technology Partner
                  </p>


                  <h4 className="text-xl font-black">
                    CodeCraft Cloud
                  </h4>


                  <p className="text-white/60 text-sm mt-2 max-w-md">
                    Building scalable digital experiences through modern software
                    development, cloud solutions, and innovative technology.
                  </p>

                </div>


              </div>



              <a
                  href="https://www.codecraftcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent font-bold hover:text-white transition"
              >
                Visit CodeCraft Cloud
                <ExternalLink className="w-4 h-4" />
              </a>


            </div>

          </div>



          {/* Bottom Bar */}
          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">


            <p>
              © 2026 Green Minds INC. All rights reserved.
            </p>



            <div className="flex gap-8">

              <Link
                  href="#"
                  className="hover:text-white transition"
              >
                Privacy Policy
              </Link>


              <Link
                  href="#"
                  className="hover:text-white transition"
              >
                Terms of Service
              </Link>

            </div>



            <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 hover:text-accent transition"
            >

              Back to Top


              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition">

              <ArrowUp className="w-4 h-4" />

            </span>


            </button>


          </div>



          {/* Developer Credit */}
          <div className="mt-6 text-center text-white/30 text-xs">

            Digital experience designed and developed by{" "}

            <a
                href="https://www.codecraftcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-bold hover:text-white transition"
            >
              CodeCraft Cloud
            </a>

          </div>


        </div>
      </footer>
  );
};


export default Footer;