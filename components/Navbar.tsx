"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Team", href: "#team" },
  { label: "Our Work", href: "#our-work" },
  { label: "Projects", href: "#projects" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [dotStyle, setDotStyle] = useState<React.CSSProperties>({ opacity: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Intersection Observer for active section
    const sections = navLinks.map(link => link.href.replace("#", ""))
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const activeLink = document.querySelector(`[data-section="${activeSection}"]`) as HTMLElement
    if (activeLink) {
      setDotStyle({
        left: `${activeLink.offsetLeft + activeLink.offsetWidth / 2}px`,
        transform: "translateX(-50%)",
        opacity: 1
      })
    }
  }, [activeSection, scrolled])

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "top-4 md:top-5 px-4 md:px-8" : "top-0 px-6 md:px-8"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl flex items-center justify-between gap-4 transition-all duration-500 ease-out",
          scrolled
            ? "rounded-full px-5 py-2.5 md:px-8 md:py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/40"
            : "rounded-none px-0 py-5 md:py-6 bg-transparent border border-transparent shadow-none backdrop-blur-none"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          <div className="relative h-10 w-10 shrink-0 transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Green Minds Logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className={cn(
              "hidden sm:block font-bold text-base md:text-lg tracking-tight uppercase whitespace-nowrap transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Green Minds <span className="text-accent font-extrabold">INC</span>
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace("#", "")
            return (
              <Link
                key={item.label}
                href={item.href}
                data-section={item.href.replace("#", "")}
                className={cn(
                  "relative text-sm font-medium transition-all duration-500 pb-1",
                  scrolled
                    ? isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                    : isActive
                      ? "text-accent"
                      : "text-white/85 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
          {/* Moving Dot */}
          <div 
            className={cn(
              "absolute -bottom-0.5 h-1.5 w-1.5 rounded-full transition-all duration-500 ease-in-out",
              scrolled ? "bg-primary" : "bg-accent"
            )}
            style={dotStyle}
          />
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className={cn(
            "flex shrink-0 items-center gap-2 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-500 hover:scale-[1.02] active:scale-95",
            scrolled
              ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
              : "bg-primary/90 hover:bg-primary backdrop-blur-sm"
          )}
        >
          Join The Movement
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
