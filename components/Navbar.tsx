"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [dotStyle, setDotStyle] = useState<React.CSSProperties>({ opacity: 0 })

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

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
        <Link 
          href="/" 
          className="flex shrink-0 items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative h-9 w-9 md:h-10 w-10 shrink-0 transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Green Minds Logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className={cn(
              "hidden xs:block font-bold text-base md:text-lg tracking-tight uppercase whitespace-nowrap transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Green Minds <span className="text-accent font-extrabold">INC</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
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

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="#contact"
            className={cn(
              "hidden sm:flex shrink-0 items-center gap-2 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-500 hover:scale-[1.02] active:scale-95",
              scrolled
                ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                : "bg-primary/90 hover:bg-primary backdrop-blur-sm"
            )}
          >
            Join The Movement
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors relative z-[60]",
              isMobileMenuOpen 
                ? "text-primary bg-primary/5" 
                : scrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden bg-white transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <div className="flex flex-col gap-2">
            {navLinks.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-3xl font-bold py-3 transition-all duration-300 transform",
                    isActive ? "text-primary translate-x-2" : "text-foreground/40 hover:text-primary",
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="mt-auto flex flex-col gap-6">
            <div className="h-px w-full bg-gray-100" />
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between bg-primary text-white p-6 rounded-3xl font-bold text-xl group"
            >
              Join The Movement
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
