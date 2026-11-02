"use client"

import React, { useRef, useState, useTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowDown, ArrowUp, ExternalLink, ImagePlus, Pencil, Trash2, Upload, UserPlus, X } from "lucide-react"
import type { GalleryRow, PersonRow } from "@/lib/content"
import { programmeIds, type ProgrammeId } from "@/lib/default-content"
import { uploadPhoto } from "@/lib/resize-image"
import {
  addAdmin,
  deletePhoto,
  movePhoto,
  removeAdmin,
  updateCaption,
  updatePerson,
  type ActionResult,
} from "@/app/admin/actions"
import SignOutButton from "@/components/admin/SignOutButton"
import { Notice } from "@/components/admin/form-ui"

const programmeNames: Record<ProgrammeId, string> = {
  "green-ed": "Green-Ed Initiative",
  advocacy: "Environmental Advocacy & Campaigns",
  resources: "Resource Distribution",
  "climate-witness": "Climate Witness: Living the Crisis",
}

type Status = { tone: "error" | "success"; text: string } | null

// Runs a server action, reloads the page data and reports the outcome
const useAdminAction = () => {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState<Status>(null)

  const run = (action: () => Promise<ActionResult>, success: string) =>
    startTransition(async () => {
      const result = await action()
      setStatus(result.ok ? { tone: "success", text: success } : { tone: "error", text: result.error })
      if (result.ok) router.refresh()
    })

  return { pending, status, setStatus, run, refresh: () => router.refresh() }
}

const tabs = [
  { id: "people", label: "Team & Board" },
  { id: "galleries", label: "Our Work galleries" },
  { id: "admins", label: "Admins" },
] as const

type Tab = (typeof tabs)[number]["id"]

const AdminDashboard = ({
  admin,
  people,
  photos,
  admins,
}: {
  admin: { email: string; name: string }
  people: PersonRow[]
  photos: GalleryRow[]
  admins: { email: string; addedBy: string | null }[]
}) => {
  const [tab, setTab] = useState<Tab>("people")

  return (
    <div className="min-h-screen bg-[#F3F4F2]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-32">
              <Image src="/logo2.png" alt="Green Minds Malawi" fill sizes="128px" className="object-contain" />
            </div>
            <span className="hidden rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary sm:inline">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-sm text-muted md:inline">{admin.name}</span>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-primary hover:border-accent hover:text-accent transition"
            >
              View site <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <SignOutButton compact />
          </div>
        </div>

        {/* Tabs */}
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 sm:px-6" aria-label="Admin sections">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-current={tab === t.id ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold transition ${
                tab === t.id ? "border-accent text-primary" : "border-transparent text-primary/50 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          Changes are saved straight away and appear on the website within a minute (reload the page to see them).
        </p>

        {tab === "people" && (
          <div className="space-y-12">
            <PeopleSection title="Team" people={people.filter((p) => p.section === "team")} />
            <PeopleSection title="Board" people={people.filter((p) => p.section === "board")} />
          </div>
        )}

        {tab === "galleries" && (
          <div className="space-y-12">
            {programmeIds.map((id) => (
              <GallerySection key={id} programme={id} photos={photos.filter((p) => p.programme === id)} />
            ))}
          </div>
        )}

        {tab === "admins" && <AdminsSection admins={admins} currentEmail={admin.email} />}
      </main>
    </div>
  )
}

/* ---------- Team & Board ---------- */

const PeopleSection = ({ title, people }: { title: string; people: PersonRow[] }) => (
  <section>
    <h2 className="mb-5 text-2xl font-black text-primary">{title}</h2>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  </section>
)

const PersonCard = ({ person }: { person: PersonRow }) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [editing, setEditing] = useState(false)
  const { pending, status, setStatus, run, refresh } = useAdminAction()

  const replacePhoto = async (file: File | undefined) => {
    if (!file) return
    setUploading(true)
    setStatus(null)
    try {
      await uploadPhoto(`/api/admin/people/${person.id}/photo`, file)
      setStatus({ tone: "success", text: "Photo updated." })
      refresh()
    } catch (error) {
      setStatus({ tone: "error", text: (error as Error).message })
    } finally {
      setUploading(false)
      if (fileInput.current) fileInput.current.value = ""
    }
  }

  const saveDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    run(
      () =>
        updatePerson(person.id, {
          name: String(form.get("name")),
          role: String(form.get("role")),
          bio: String(form.get("bio")),
          linkedin: String(form.get("linkedin")),
        }),
      "Details saved.",
    )
    setEditing(false)
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[4/5] bg-[#E8EDE5]">
        <Image src={person.image} alt={person.name} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/60 text-sm font-bold text-white">
            <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Uploading...
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-black text-primary">{person.name}</h3>
          {person.role && <p className="text-xs font-bold uppercase tracking-widest text-accent">{person.role}</p>}
        </div>

        <input
          ref={fileInput}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => replacePhoto(e.target.files?.[0])}
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-accent hover:text-primary disabled:opacity-60 transition"
          >
            <Upload className="h-4 w-4" /> Replace photo
          </button>
          <button
            type="button"
            onClick={() => setEditing((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-primary hover:border-accent hover:text-accent transition"
          >
            {editing ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />} {editing ? "Cancel" : "Edit details"}
          </button>
        </div>

        {editing && (
          <form onSubmit={saveDetails} className="space-y-3 border-t border-gray-100 pt-4">
            <AdminInput label="Name" name="name" defaultValue={person.name} required />
            <AdminInput label="Role" name="role" defaultValue={person.role ?? ""} />
            <AdminInput label="LinkedIn link" name="linkedin" type="url" defaultValue={person.linkedin ?? ""} placeholder="https://www.linkedin.com/in/..." />
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary/70">Bio</span>
              <textarea
                name="bio"
                defaultValue={person.bio}
                rows={7}
                className="w-full rounded-xl border-2 border-gray-100 bg-[#FAFAF7] px-3 py-2 text-sm text-primary outline-none focus:border-accent/50 focus:bg-white"
              />
            </label>
            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-accent hover:text-primary disabled:opacity-60 transition"
            >
              Save details
            </button>
          </form>
        )}

        {status && <Notice tone={status.tone}>{status.text}</Notice>}
      </div>
    </article>
  )
}

const AdminInput = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <label className="block">
    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary/70">{label}</span>
    <input
      {...props}
      className="w-full rounded-xl border-2 border-gray-100 bg-[#FAFAF7] px-3 py-2 text-sm text-primary outline-none focus:border-accent/50 focus:bg-white"
    />
  </label>
)

/* ---------- Our Work galleries ---------- */

const GallerySection = ({ programme, photos }: { programme: ProgrammeId; photos: GalleryRow[] }) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [progress, setProgress] = useState<string | null>(null)
  const { status, setStatus, refresh } = useAdminAction()

  const addPhotos = async (files: FileList | null) => {
    if (!files?.length) return
    setStatus(null)
    const list = Array.from(files)
    const failures: string[] = []
    for (const [i, file] of list.entries()) {
      setProgress(`Uploading ${i + 1} of ${list.length}...`)
      try {
        await uploadPhoto("/api/admin/gallery", file, { programme, caption: "" })
      } catch (error) {
        failures.push(`${file.name}: ${(error as Error).message}`)
      }
    }
    setProgress(null)
    if (fileInput.current) fileInput.current.value = ""
    const added = list.length - failures.length
    setStatus(
      failures.length
        ? { tone: "error", text: `${added} added. Couldn't add ${failures.join("; ")}` }
        : { tone: "success", text: `${added} photo${added === 1 ? "" : "s"} added. Add captions below.` },
    )
    refresh()
  }

  return (
    <section>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-primary">{programmeNames[programme]}</h2>
          <p className="text-sm text-muted">{photos.length} photo{photos.length === 1 ? "" : "s"} · shown in this order on the website</p>
        </div>
        <input
          ref={fileInput}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          className="hidden"
          onChange={(e) => addPhotos(e.target.files)}
        />
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          disabled={Boolean(progress)}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-accent hover:text-primary disabled:opacity-60 transition"
        >
          <ImagePlus className="h-4 w-4" /> {progress ?? "Add photos"}
        </button>
      </div>

      {status && (
        <div className="mb-5">
          <Notice tone={status.tone}>{status.text}</Notice>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFirst={index === 0}
            isLast={index === photos.length - 1}
            onRemoved={() => setStatus({ tone: "success", text: "Photo removed." })}
          />
        ))}
      </div>
    </section>
  )
}

const PhotoCard = ({
  photo,
  isFirst,
  isLast,
  onRemoved,
}: {
  photo: GalleryRow
  isFirst: boolean
  isLast: boolean
  onRemoved: () => void
}) => {
  const [caption, setCaption] = useState(photo.caption)
  const { pending, status, setStatus, refresh } = useAdminAction()
  const [busy, startTransition] = useTransition()

  // Changes made from this card; a removal is reported by the gallery,
  // because this card disappears once the photo is gone
  const run = (action: () => Promise<ActionResult>, success: string, removing = false) =>
    startTransition(async () => {
      const result = await action()
      if (!result.ok) return setStatus({ tone: "error", text: result.error })
      if (removing) onRemoved()
      else setStatus({ tone: "success", text: success })
      refresh()
    })
  const working = pending || busy
  const changed = caption.trim() !== photo.caption

  const remove = () => {
    if (!window.confirm("Remove this photo from the website?")) return
    run(() => deletePhoto(photo.id), "Photo removed.", true)
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-[#E8EDE5]">
        <Image src={photo.src} alt={photo.caption || "Gallery photo"} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-contain" />
      </div>
      <div className="space-y-3 p-4">
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary/70">Caption</span>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={2}
            maxLength={300}
            placeholder="Who or what is in this photo?"
            className="w-full rounded-xl border-2 border-gray-100 bg-[#FAFAF7] px-3 py-2 text-sm text-primary outline-none focus:border-accent/50 focus:bg-white"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          {changed && (
            <button
              type="button"
              onClick={() => run(() => updateCaption(photo.id, caption), "Caption saved.")}
              disabled={working}
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white hover:bg-accent hover:text-primary disabled:opacity-60 transition"
            >
              Save caption
            </button>
          )}
          <div className="ml-auto flex gap-1">
            <IconButton label="Move earlier" onClick={() => run(() => movePhoto(photo.id, "up"), "Moved.")} disabled={working || isFirst}>
              <ArrowUp className="h-4 w-4" />
            </IconButton>
            <IconButton label="Move later" onClick={() => run(() => movePhoto(photo.id, "down"), "Moved.")} disabled={working || isLast}>
              <ArrowDown className="h-4 w-4" />
            </IconButton>
            <IconButton label="Remove photo" onClick={remove} disabled={working} danger>
              <Trash2 className="h-4 w-4" />
            </IconButton>
          </div>
        </div>

        {status && <Notice tone={status.tone}>{status.text}</Notice>}
      </div>
    </article>
  )
}

const IconButton = ({
  label,
  danger,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string; danger?: boolean }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    {...props}
    className={`flex h-9 w-9 items-center justify-center rounded-full border transition disabled:opacity-30 ${
      danger ? "border-red-100 text-red-600 hover:bg-red-50" : "border-gray-200 text-primary hover:border-accent hover:text-accent"
    }`}
  >
    {children}
  </button>
)

/* ---------- Admins ---------- */

const AdminsSection = ({ admins, currentEmail }: { admins: { email: string; addedBy: string | null }[]; currentEmail: string }) => {
  const [email, setEmail] = useState("")
  const { pending, status, run } = useAdminAction()

  const add = (event: React.FormEvent) => {
    event.preventDefault()
    run(() => addAdmin(email), `${email.trim()} can now create an account and sign in.`)
    setEmail("")
  }

  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl font-black text-primary">Admins</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        People with these email addresses can manage the website. To add someone, enter their email below, then ask them to
        create an account at <strong>greenmindsmw.org/admin/sign-up</strong> using that same address.
      </p>

      <form onSubmit={add} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="flex-1 rounded-xl border-2 border-gray-100 bg-white px-4 py-3 text-sm text-primary outline-none focus:border-accent/50"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-accent hover:text-primary disabled:opacity-60 transition"
        >
          <UserPlus className="h-4 w-4" /> Add admin
        </button>
      </form>

      {status && (
        <div className="mt-4">
          <Notice tone={status.tone}>{status.text}</Notice>
        </div>
      )}

      <ul className="mt-6 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white">
        {admins.map((a) => (
          <li key={a.email} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="min-w-0">
              <p className="truncate font-bold text-primary">
                {a.email} {a.email === currentEmail && <span className="text-xs font-normal text-muted">(you)</span>}
              </p>
              {a.addedBy && a.addedBy !== "seed" && <p className="text-xs text-muted">Added by {a.addedBy}</p>}
            </div>
            {a.email !== currentEmail && (
              <button
                type="button"
                onClick={() => window.confirm(`Remove admin access for ${a.email}?`) && run(() => removeAdmin(a.email), "Access removed.")}
                disabled={pending}
                className="shrink-0 rounded-full border border-red-100 px-3 py-1.5 text-sm font-bold text-red-600 hover:bg-red-50 disabled:opacity-60 transition"
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AdminDashboard
