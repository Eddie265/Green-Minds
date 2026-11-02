"use client"

// Photos are resized in the browser before upload: phone photos are often
// 5–15 MB, which is slow on mobile data and above the server's upload limit.
const MAX_EDGE = 2400
const QUALITY = 0.86

export type PreparedImage = { blob: Blob; width: number; height: number }

export async function prepareImage(file: File): Promise<PreparedImage> {
  let bitmap: ImageBitmap
  try {
    // "from-image" applies the camera's rotation so photos aren't sideways
    bitmap = await createImageBitmap(file, { imageOrientation: "from-image" })
  } catch {
    throw new Error(
      file.type === "image/heic" || /\.hei[cf]$/i.test(file.name)
        ? "iPhone HEIC photos can't be read here. Please export the photo as JPG and try again."
        : "This file couldn't be read as a photo. Please use a JPG, PNG or WebP image.",
    )
  }

  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
  const width = Math.round(bitmap.width * scale)
  const height = Math.round(bitmap.height * scale)

  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext("2d")
  if (!context) throw new Error("Your browser couldn't process this photo.")
  context.drawImage(bitmap, 0, 0, width, height)
  bitmap.close()

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", QUALITY))
  if (!blob) throw new Error("Your browser couldn't process this photo.")
  return { blob, width, height }
}

// Upload a prepared photo to one of the admin upload endpoints
export async function uploadPhoto(url: string, file: File, extra: Record<string, string> = {}) {
  const image = await prepareImage(file)
  const form = new FormData()
  form.append("file", image.blob, "photo.jpg")
  form.append("width", String(image.width))
  form.append("height", String(image.height))
  for (const [key, value] of Object.entries(extra)) form.append(key, value)

  const response = await fetch(url, { method: "POST", body: form })
  const result = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(result.error || "The upload failed. Please try again.")
  return result
}
