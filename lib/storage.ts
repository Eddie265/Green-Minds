import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

// Uploaded photos live in the public_read "site-images" bucket on Neon.
// Credentials, endpoint and region come from the AWS_* env vars Neon provides.
const BUCKET = "site-images"

let s3: S3Client | null = null
const client = () => (s3 ??= new S3Client({ forcePathStyle: true }))

export const publicUrl = (key: string) => `${process.env.AWS_ENDPOINT_URL_S3}/${BUCKET}/${key}`

export async function uploadImage(folder: string, body: Uint8Array, contentType: string) {
  const extension = contentType === "image/png" ? "png" : contentType === "image/webp" ? "webp" : "jpg"
  // A new key per upload, so cached copies of the old photo never linger
  const key = `${folder}/${crypto.randomUUID()}.${extension}`
  await client().send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  )
  return { key, url: publicUrl(key) }
}

export async function deleteImage(key: string | null | undefined) {
  if (!key) return
  try {
    await client().send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }))
  } catch (error) {
    // A leftover file only costs storage; never fail the user's change over it
    console.error(`Could not delete ${key} from storage:`, error)
  }
}
