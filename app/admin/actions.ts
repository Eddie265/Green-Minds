"use server"

import { NotAuthorizedError, refreshSite, requireAdmin } from "@/lib/admin"
import { sql } from "@/lib/db"
import { deleteImage } from "@/lib/storage"

export type ActionResult = { ok: true } | { ok: false; error: string }

// Runs an admin-only change and turns failures into a message for the page
async function adminAction(change: (adminEmail: string) => Promise<string | void>): Promise<ActionResult> {
  try {
    const admin = await requireAdmin()
    const problem = await change(admin.email)
    if (problem) return { ok: false, error: problem }
    refreshSite()
    return { ok: true }
  } catch (error) {
    if (error instanceof NotAuthorizedError) return { ok: false, error: error.message }
    console.error("Admin action failed:", error)
    return { ok: false, error: "Something went wrong. Please try again." }
  }
}

const clean = (value: unknown, max: number) => String(value ?? "").trim().slice(0, max)

export async function updatePerson(id: number, details: { name: string; role: string; bio: string; linkedin: string }) {
  return adminAction(async () => {
    const name = clean(details.name, 120)
    const role = clean(details.role, 120)
    const bio = clean(details.bio, 3000)
    const linkedin = clean(details.linkedin, 300)
    if (!name) return "Please enter a name."
    if (linkedin && !/^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(linkedin)) {
      return "The LinkedIn link should start with https://www.linkedin.com/"
    }
    await sql()`
      UPDATE people
      SET name = ${name}, role = ${role || null}, bio = ${bio}, linkedin = ${linkedin || null}, updated_at = now()
      WHERE id = ${id}
    `
  })
}

export async function updateCaption(id: number, caption: string) {
  return adminAction(async () => {
    await sql()`UPDATE gallery_photos SET caption = ${clean(caption, 300)} WHERE id = ${id}`
  })
}

// Swap a photo with its neighbour in the same gallery, then renumber the
// gallery so positions stay tidy
export async function movePhoto(id: number, direction: "up" | "down") {
  return adminAction(async () => {
    const order = (await sql()`
      SELECT id FROM gallery_photos
      WHERE programme = (SELECT programme FROM gallery_photos WHERE id = ${id})
      ORDER BY sort, id
    `) as { id: number }[]
    const ids = order.map((row) => row.id)
    const index = ids.indexOf(id)
    if (index === -1) return "That photo no longer exists."

    const target = direction === "up" ? index - 1 : index + 1
    if (target < 0 || target >= ids.length) return
    ;[ids[index], ids[target]] = [ids[target], ids[index]]

    await sql().transaction(ids.map((photoId, sort) => sql()`UPDATE gallery_photos SET sort = ${sort} WHERE id = ${photoId}`))
  })
}

export async function deletePhoto(id: number) {
  return adminAction(async () => {
    const [{ count }] = (await sql()`
      SELECT count(*)::int AS count FROM gallery_photos
      WHERE programme = (SELECT programme FROM gallery_photos WHERE id = ${id})
    `) as { count: number }[]
    if (count <= 1) return "Each gallery needs at least one photo. Add another photo before removing this one."

    const [photo] = (await sql()`DELETE FROM gallery_photos WHERE id = ${id} RETURNING image_key`) as {
      image_key: string | null
    }[]
    await deleteImage(photo?.image_key)
  })
}

export async function addAdmin(email: string) {
  return adminAction(async (adminEmail) => {
    const address = clean(email, 254).toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) return "Please enter a valid email address."
    await sql()`INSERT INTO admins (email, added_by) VALUES (${address}, ${adminEmail}) ON CONFLICT DO NOTHING`
  })
}

export async function removeAdmin(email: string) {
  return adminAction(async (adminEmail) => {
    const address = clean(email, 254).toLowerCase()
    if (address === adminEmail) return "You can't remove your own access."
    const [{ count }] = (await sql()`SELECT count(*)::int AS count FROM admins`) as { count: number }[]
    if (count <= 1) return "There must always be at least one admin."
    await sql()`DELETE FROM admins WHERE email = ${address}`
  })
}
