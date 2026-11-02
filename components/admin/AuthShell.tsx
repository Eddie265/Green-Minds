import React from "react"
import Image from "next/image"
import Link from "next/link"

// Centered card used by the admin sign-in, sign-up and password reset pages
const AuthShell = ({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#F3F4F2] flex items-center justify-center px-4 py-12">
    <div className="w-full max-w-md">
      <Link href="/" className="mx-auto mb-8 block h-12 w-48 relative" aria-label="Green Minds Malawi home">
        <Image src="/logo2.png" alt="Green Minds Malawi" fill sizes="192px" className="object-contain" />
      </Link>
      <div className="rounded-3xl bg-white p-7 sm:p-9 shadow-premium border border-gray-100">
        <h1 className="text-2xl font-black text-primary">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>
        <div className="mt-7">{children}</div>
      </div>
      <p className="mt-6 text-center text-xs text-primary/50">Green Minds Malawi · Website admin</p>
    </div>
  </div>
)

export default AuthShell
