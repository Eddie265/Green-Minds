import { hasDatabase, sql } from "@/lib/db"
import {
  defaultBoard,
  defaultGalleries,
  defaultTeam,
  programmeIds,
  type GalleryPhoto,
  type Person,
  type ProgrammeId,
} from "@/lib/default-content"

export type PersonRow = Person & { id: number; section: "team" | "board"; imageKey: string | null }
export type GalleryRow = GalleryPhoto & { id: number; programme: ProgrammeId; imageKey: string | null }

type DbPerson = {
  id: number
  section: "team" | "board"
  name: string
  role: string | null
  bio: string
  linkedin: string | null
  image: string
  image_key: string | null
}

type DbPhoto = {
  id: number
  programme: ProgrammeId
  src: string
  image_key: string | null
  width: number
  height: number
  caption: string
}

const toPerson = (row: DbPerson): PersonRow => ({
  id: row.id,
  section: row.section,
  name: row.name,
  role: row.role ?? undefined,
  bio: row.bio,
  linkedin: row.linkedin ?? undefined,
  image: row.image,
  imageKey: row.image_key,
})

const toPhoto = (row: DbPhoto): GalleryRow => ({
  id: row.id,
  programme: row.programme,
  src: row.src,
  imageKey: row.image_key,
  width: row.width,
  height: row.height,
  caption: row.caption,
})

export async function getPeopleRows(): Promise<PersonRow[]> {
  const rows = (await sql()`SELECT * FROM people ORDER BY section, sort, id`) as DbPerson[]
  return rows.map(toPerson)
}

export async function getGalleryRows(): Promise<GalleryRow[]> {
  const rows = (await sql()`SELECT * FROM gallery_photos ORDER BY programme, sort, id`) as DbPhoto[]
  return rows.map(toPhoto)
}

// Public site: the database content, or the built-in defaults if it is
// unavailable, so a database problem never leaves the page empty
export async function getPeople(section: "team" | "board"): Promise<Person[]> {
  const fallback = section === "team" ? defaultTeam : defaultBoard
  if (!hasDatabase()) return fallback
  try {
    const rows = (await getPeopleRows()).filter((p) => p.section === section)
    return rows.length > 0 ? rows : fallback
  } catch (error) {
    console.error(`Could not load ${section} from the database, using defaults:`, error)
    return fallback
  }
}

export async function getGalleries(): Promise<Record<ProgrammeId, GalleryPhoto[]>> {
  if (!hasDatabase()) return defaultGalleries
  try {
    const rows = await getGalleryRows()
    if (rows.length === 0) return defaultGalleries
    const galleries = {} as Record<ProgrammeId, GalleryPhoto[]>
    for (const id of programmeIds) galleries[id] = rows.filter((r) => r.programme === id)
    return galleries
  } catch (error) {
    console.error("Could not load galleries from the database, using defaults:", error)
    return defaultGalleries
  }
}
