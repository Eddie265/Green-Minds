"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

// TODO: add the organisation's social media profile URLs
const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Team", href: "#team" },
  { label: "Our Work", href: "#our-work" },
  { label: "Projects", href: "#projects" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Contact", href: "#contact" },
];

const getInvolved = [
  { label: "Volunteer", href: "#contact" },
  { label: "Partner With Us", href: "#contact" },
  // TODO: point Donate at the ZonsePay checkout once it is integrated
  { label: "Donate", href: "#contact" },
  { label: "Why Green Minds", href: "#why-us" },
];

const Footer = () => {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEBFORM || "");
    formData.set("subject", "New Newsletter Subscriber - Green Minds Malawi");
    formData.set("from_name", "Green Minds Malawi Website");
    formData.set("message", `Please add ${formData.get("email")} to the newsletter list.`);

    setNewsletterStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setNewsletterStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", result);
        setNewsletterStatus("error");
      }
    } catch (error) {
      console.error("Newsletter form error:", error);
      setNewsletterStatus("error");
    }
  };

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
                Green Minds
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                A youth-led organisation empowering young people and communities
                in Malawi through climate education, clean energy access and
                environmental action.
              </p>

              <div className="flex gap-4">
                {socials.map(({ label, icon: Icon, href }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-label={`Green Minds Malawi on ${label}`}
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
                {navigation.map((item) => (
                    <li key={item.label}>
                      <Link
                          href={item.href}
                          className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 font-bold"
                      >
                        {item.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>


            {/* Get Involved */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-10 text-accent">
                Get Involved
              </h4>

              <ul className="flex flex-col gap-5">
                {getInvolved.map((item) => (
                    <li key={item.label}>
                      <Link
                          href={item.href}
                          className="text-white/60 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 font-bold"
                      >
                        {item.label}
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


              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">

                {/* Honeypot spam protection */}
                <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>

                <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    disabled={newsletterStatus === "sending"}
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent disabled:opacity-60"
                />


                <button
                    type="submit"
                    disabled={newsletterStatus === "sending"}
                    className="bg-accent text-primary font-black uppercase text-xs tracking-widest py-4 rounded-2xl hover:bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {newsletterStatus === "sending" ? "Subscribing..." : "Subscribe"}
                </button>

                <p aria-live="polite" className="text-sm text-white/70 min-h-5">
                  {newsletterStatus === "success" && "Thanks for subscribing!"}
                  {newsletterStatus === "error" && "Something went wrong. Please try again."}
                </p>

              </form>


              <div className="mt-8 space-y-4">

                <a
                    href="mailto:greenminds43@gmail.com"
                    className="flex items-center gap-4 text-white/60 text-sm hover:text-white transition"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  greenminds43@gmail.com
                </a>


                {/*<div className="flex items-center gap-4 text-white/50 text-sm">*/}
                {/*  <MapPin className="w-4 h-4 text-accent" />*/}
                {/*  Lilongwe, Malawi*/}
                {/*</div>*/}

              </div>

            </div>

          </div>



          {/* Technology Partner */}
          <div className="mt-20 pt-12 border-t border-white/10">

            <div className="bg-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">


              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">


                {/* Transparent CodeCraft Cloud Logo */}
                <div className="flex shrink-0 items-center justify-center">

                  <Image
                      src="/logo1.png"
                      width={150}
                      height={70}
                      alt="CodeCraft Cloud Logo"
                      className="h-auto w-[120px] md:w-[150px] object-contain"
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
              © {new Date().getFullYear()} Green Minds Malawi. All rights reserved.
            </p>



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