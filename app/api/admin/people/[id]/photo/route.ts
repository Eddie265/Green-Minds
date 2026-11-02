import { NotAuthorizedError, refreshSite, requireAdmin } from "@/lib/admin"
import { sql } from "@/lib/db"
import { deleteImage, uploadImage } from "@/lib/storage"
import { readImage } from "@/lib/upload-validation"

// Replace a team or board member's photo
export async function POST(request: Request, ctx: RouteContext<"/api/admin/people/[id]/photo">) {
  try {
    await requireAdmin()
  } catch (error) {
    if (error instanceof NotAuthorizedError) return Response.json({ error: error.message }, { status: 401 })
    throw error
  }

  const id = Number((await ctx.params).id)
  if (!Number.isInteger(id)) return Response.json({ error: "Unknown person." }, { status: 404 })

  const [person] = (await sql()`SELECT image_key FROM people WHERE id = ${id}`) as { image_key: string | null }[]
  if (!person) return Response.json({ error: "Unknown person." }, { status: 404 })

  const image = await readImage(await request.formData())
  if ("error" in image) return Response.json({ error: image.error }, { status: 400 })

  const { key, url } = await uploadImage("people", image.body, image.type)
  await sql()`UPDATE people SET image = ${url}, image_key = ${key}, updated_at = now() WHERE id = ${id}`
  await deleteImage(person.image_key)

  refreshSite()
  return Response.json({ image: url })
}
