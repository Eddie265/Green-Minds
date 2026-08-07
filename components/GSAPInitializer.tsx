"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const GSAPInitializer = () => {
  useEffect(() => {
    // Reveal animations for all sections
    const reveals = document.querySelectorAll(".reveal")
    
    reveals.forEach((el) => {
      // Main section reveal
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true
          },
        }
      )

      // Staggered children reveal
      const children = el.querySelectorAll("h2, h3, h4, p, button, a, .grid > div, img, .stat-card, li")
      if (children.length > 0) {
        gsap.fromTo(children,
          { 
            opacity: 0, 
            y: 20 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true
            },
          }
        )
      }
    })

    // Parallax effect for all elements with .parallax class
    const parallaxElements = document.querySelectorAll(".parallax")
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    // Parallax effect for hero
    gsap.to(".hero-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Tab title change logic
    const originalTitle = document.title
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Save the environment"
      } else {
        document.title = originalTitle
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}
