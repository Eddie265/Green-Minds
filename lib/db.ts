import { neon, type NeonQueryFunction } from "@neondatabase/serverless"

// Lazily created so the site can still build and render (with its default
// content) where DATABASE_URL is not configured
let client: NeonQueryFunction<false, false> | null = null

export const hasDatabase = () => Boolean(process.env.DATABASE_URL)

export const sql = () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set")
  client ??= neon(process.env.DATABASE_URL)
  return client
}
