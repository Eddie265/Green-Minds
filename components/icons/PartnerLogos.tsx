import React from "react"

type LogoProps = { className?: string }

export function MalawiCoatOfArms({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-label="Government of Malawi">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" />
      <path
        d="M40 14 L48 28 L62 28 L51 38 L55 52 L40 44 L25 52 L29 38 L18 28 L32 28 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect x="28" y="56" width="24" height="6" rx="1" fill="currentColor" />
      <path d="M34 62 H46" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function UNEnvironmentLogo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 120 48" fill="none" className={className} aria-label="UN Environment Programme">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 8 C16 14 10 22 10 24 C10 30 16 36 24 40 C32 36 38 30 38 24 C38 22 32 14 24 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M12 24 H36 M24 12 V36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="50" y="20" fill="currentColor" fontSize="9" fontWeight="700" fontFamily="sans-serif">
        UN Environment
      </text>
      <text x="50" y="34" fill="currentColor" fontSize="8" fontWeight="500" fontFamily="sans-serif">
        Programme
      </text>
    </svg>
  )
}

export function WWFLogo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className} aria-label="WWF">
      <ellipse cx="32" cy="28" rx="22" ry="18" fill="currentColor" />
      <circle cx="22" cy="20" r="5" fill="white" />
      <circle cx="42" cy="20" r="5" fill="white" />
      <circle cx="23" cy="20" r="2.5" fill="currentColor" />
      <circle cx="43" cy="20" r="2.5" fill="currentColor" />
      <ellipse cx="32" cy="26" rx="5" ry="4" fill="white" />
      <path d="M26 34 Q32 40 38 34" stroke="white" strokeWidth="2" fill="none" />
      <text x="4" y="46" fill="currentColor" fontSize="10" fontWeight="800" fontFamily="sans-serif">
        WWF
      </text>
    </svg>
  )
}

export function UNDPLogo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 80 48" fill="none" className={className} aria-label="UNDP">
      <rect x="2" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 20 H24 M8 26 H20" stroke="currentColor" strokeWidth="1.5" />
      <text x="36" y="32" fill="currentColor" fontSize="18" fontWeight="800" fontFamily="sans-serif">
        UNDP
      </text>
    </svg>
  )
}

export function AfricanUnionLogo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 80 48" fill="none" className={className} aria-label="African Union">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 10 C18 14 14 20 14 26 C14 32 18 36 24 38 C30 36 34 32 34 26 C34 20 30 14 24 10Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="24" cy="22" r="2" fill="white" />
      <text x="50" y="22" fill="currentColor" fontSize="7" fontWeight="700" fontFamily="sans-serif">
        African
      </text>
      <text x="50" y="32" fill="currentColor" fontSize="7" fontWeight="700" fontFamily="sans-serif">
        Union
      </text>
    </svg>
  )
}

export function GreenEconomyLogo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 120 48" fill="none" className={className} aria-label="Green Economy Coalition">
      <circle cx="20" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 32 V18 M20 18 C20 18 14 20 14 26 C14 30 17 32 20 32 C23 32 26 30 26 26 C26 20 20 18 20 18Z"
        fill="currentColor"
      />
      <text x="40" y="20" fill="currentColor" fontSize="7" fontWeight="700" fontFamily="sans-serif">
        Green Economy
      </text>
      <text x="40" y="32" fill="currentColor" fontSize="7" fontWeight="600" fontFamily="sans-serif">
        Coalition
      </text>
    </svg>
  )
}
