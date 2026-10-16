"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Linkedin, X } from "lucide-react"

export type Profile = {
  name: string
  image: string
  bio: string
  linkedin?: string
}

const ProfileGrid = ({
  people,
  className,
}: {
  people: Profile[]
  className: string
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<Profile | null>(null)

  const openBio = (person: Profile) => {
    setSelected(person)
    dialogRef.current?.showModal()
  }

  const closeBio = () => dialogRef.current?.close()

  return (
    <>
      <div className={className}>
        {people.map((person) => (
          <div key={person.name} className="group premium-card flex flex-col p-2 sm:p-4">
            <div className="relative aspect-[4/5] rounded-2xl sm:rounded-[24px] overflow-hidden mb-4 sm:mb-5">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
              />

              {/* LinkedIn link: revealed on hover or keyboard focus, always shown on touch screens */}
              {person.linkedin && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-8 translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 [@media(hover:none)]:translate-y-0">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col px-1 pb-1 sm:px-2 sm:pb-2">
              <h3 className="text-base sm:text-xl font-black text-primary group-hover:text-accent transition-colors">
                {person.name}
              </h3>

              <button
                type="button"
                onClick={() => openBio(person)}
                className="mt-auto inline-flex items-center gap-2 self-start pt-3 text-sm font-bold text-accent hover:text-primary transition-colors"
                aria-haspopup="dialog"
              >
                Read bio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bio dialog (closes on Escape, the close button or a click outside) */}
      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeBio()
        }}
        onClose={() => setSelected(null)}
        aria-label={selected ? `${selected.name} biography` : undefined}
        className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[90vh] overflow-hidden rounded-[28px] border-0 bg-white p-0 shadow-2xl outline-none backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <div className="relative grid max-h-[90vh] overflow-y-auto md:grid-cols-[2fr_3fr]">
            <button
              type="button"
              onClick={closeBio}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md hover:bg-accent hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                sizes="(min-width: 768px) 300px, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>

            <div className="p-7 md:p-10">
              <h3 className="pr-10 text-2xl md:text-3xl font-black text-primary leading-tight">
                {selected.name}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-muted">
                {selected.bio}
              </p>

              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-accent hover:text-primary transition"
                >
                  <Linkedin className="w-4 h-4" />
                  View LinkedIn profile
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

export default ProfileGrid
