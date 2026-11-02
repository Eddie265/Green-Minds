import { NotAuthorizedError, refreshSite, requireAdmin } from "@/lib/admin"
import { sql } from "@/lib/db"
import { programmeIds, type ProgrammeId } from "@/lib/default-content"
import { uploadImage } from "@/lib/storage"
import { readImage } from "@/lib/upload-validation"

// Add a photo to the end of a programme's gallery
export async function POST(request: Request) {
  try {
    await requireAdmin()
  } catch (error) {
    if (error instanceof NotAuthorizedError) return Response.json({ error: error.message }, { status: 401 })
    throw error
  }

  const form = await request.formData()
  const programme = String(form.get("programme")) as ProgrammeId
  if (!programmeIds.includes(programme)) return Response.json({ error: "Unknown programme." }, { status: 400 })
  const caption = String(form.get("caption") ?? "").trim().slice(0, 300)

  const image = await readImage(form)
  if ("error" in image) return Response.json({ error: image.error }, { status: 400 })

  const { key, url } = await uploadImage(`gallery/${programme}`, image.body, image.type)
  const [photo] = await sql()`
    INSERT INTO gallery_photos (programme, src, image_key, width, height, caption, sort)
    VALUES (
      ${programme}, ${url}, ${key}, ${image.width}, ${image.height}, ${caption},
      (SELECT coalesce(max(sort), -1) + 1 FROM gallery_photos WHERE programme = ${programme})
    )
    RETURNING id
  `

  refreshSite()
  return Response.json({ id: photo.id, src: url })
}
