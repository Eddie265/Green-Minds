import React from "react"

type IconProps = { className?: string }

export function SproutIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 28V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 20 C10 20 8 14 8 10 C12 10 16 13 16 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 20 C22 20 24 14 24 10 C20 10 16 13 16 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M13 28 H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CommunityIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 26 C8 20 11.5 17 16 17 C20.5 17 24 20 24 26"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 26 C3 22 5 19 8 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M29 26 C29 22 27 19 24 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LeafCircleIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 22 C16 22 10 18 10 13 C10 9 13 7 16 10 C19 7 22 9 22 13 C22 18 16 22 16 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 10 V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeartLeafIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 26 C16 26 6 19 6 12.5 C6 9 8.5 7 11 7 C13 7 15 8 16 10 C17 8 19 7 21 7 C23.5 7 26 9 26 12.5 C26 19 16 26 16 26Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 14 C16 14 14 11 14 9.5 C14 8.5 14.8 8 15.5 8.5 C16 8.8 16 9.5 16 10 C16 9.5 16 8.8 16.5 8.5 C17.2 8 18 8.5 18 9.5 C18 11 16 14 16 14Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function EarthGlobe({ className = "w-full h-full" }: IconProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="earthShade" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.45" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="188" fill="url(#earthShade)" />
      <circle cx="200" cy="200" r="188" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <ellipse cx="200" cy="200" rx="188" ry="62" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <ellipse cx="200" cy="200" rx="188" ry="118" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
      <path
        d="M10 200 H390 M200 10 V390"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
      />
      {/* Continents */}
      <path
        d="M55 115 C95 95 135 105 175 90 C215 75 255 85 295 70 C315 63 335 67 355 60"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M45 175 C85 165 125 180 165 170 C205 160 245 175 285 163 C325 151 345 160 365 153"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M65 235 C105 225 145 240 185 230 C225 220 265 235 305 223 C335 215 355 227 375 220"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M75 295 C115 280 155 290 195 283 C235 276 275 290 315 277 C340 269 360 275 380 268"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      />
      <path
        d="M125 55 C145 85 135 125 155 155 C170 180 150 205 165 235 C180 265 155 295 175 325"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M245 45 C265 75 255 115 275 145 C290 170 270 195 285 225 C300 255 275 285 295 315"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.35"
        fill="none"
      />
    </svg>
  )
}
