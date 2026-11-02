// Shared checks for uploaded images (the browser resizes photos first, so
// anything bigger than this is not coming from the admin page)
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"]

export async function readImage(form: FormData) {
  const file = form.get("file")
  if (!(file instanceof File)) return { error: "No photo was uploaded." } as const
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return { error: "Please upload a JPG, PNG or WebP photo." } as const
  if (file.size > MAX_UPLOAD_BYTES) return { error: "That photo is too large (4 MB maximum)." } as const

  const width = Number(form.get("width"))
  const height = Number(form.get("height"))
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 10000 || height > 10000) {
    return { error: "The photo's size could not be read." } as const
  }

  return { body: new Uint8Array(await file.arrayBuffer()), type: file.type, width, height } as const
}
