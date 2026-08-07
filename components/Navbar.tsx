"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about-us" },
  { label: "Our Work", href: "#our-work" },
  { label: "Projects", href: "#projects" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8">
      <div
        className={cn(
          "mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-full px-5 py-2.5 md:px-8 md:py-3 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/40"
            : "bg-white/70 backdrop-blur-xl border border-white/30 shadow-md shadow-black/5"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white">
            <Image
              src="/logo.jpeg"
              alt=""
              width={36}
              height={90}
              className="absolute left-0 top-0 w-9 h-[90px] object-cover object-top"
            />
          </div>
          <span className="hidden sm:block font-bold text-sm md:text-[15px] tracking-tight text-foreground uppercase whitespace-nowrap">
            Green Minds <span className="font-extrabold">INC</span>
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors pb-1",
                item.active
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
              {item.active && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="flex shrink-0 items-center gap-2 bg-primary text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95">
          Join The Movement
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
