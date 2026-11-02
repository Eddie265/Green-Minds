// Creates the admin tables and fills them with the site's original content.
// Safe to re-run: it only seeds tables that are still empty.
//
//   node --env-file=.env.local scripts/seed-content.mjs [first-admin-email]

import { readFileSync } from "node:fs"
import { Pool } from "@neondatabase/serverless"
import { defaultBoard, defaultGalleries, defaultTeam } from "../lib/default-content.ts"

const firstAdmin = process.argv[2]?.trim().toLowerCase()
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

await pool.query(readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8"))

const { rows: [{ count: peopleCount }] } = await pool.query("SELECT count(*)::int AS count FROM people")
if (peopleCount === 0) {
  const people = [
    ...defaultTeam.map((p) => ({ ...p, section: "team" })),
    ...defaultBoard.map((p) => ({ ...p, section: "board" })),
  ]
  for (const [i, p] of people.entries()) {
    await pool.query(
      "INSERT INTO people (section, name, role, bio, linkedin, image, sort) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [p.section, p.name, p.role ?? null, p.bio, p.linkedin ?? null, p.image, i],
    )
  }
  console.log(`Seeded ${people.length} people`)
} else {
  console.log("people already has rows, left unchanged")
}

const { rows: [{ count: photoCount }] } = await pool.query("SELECT count(*)::int AS count FROM gallery_photos")
if (photoCount === 0) {
  let total = 0
  for (const [programme, photos] of Object.entries(defaultGalleries)) {
    for (const [i, photo] of photos.entries()) {
      await pool.query(
        "INSERT INTO gallery_photos (programme, src, width, height, caption, sort) VALUES ($1, $2, $3, $4, $5, $6)",
        [programme, photo.src, photo.width, photo.height, photo.caption, i],
      )
      total++
    }
  }
  console.log(`Seeded ${total} gallery photos`)
} else {
  console.log("gallery_photos already has rows, left unchanged")
}

if (firstAdmin) {
  await pool.query("INSERT INTO admins (email, added_by) VALUES ($1, 'seed') ON CONFLICT DO NOTHING", [firstAdmin])
  console.log(`Admin allowed: ${firstAdmin}`)
}

await pool.end()
