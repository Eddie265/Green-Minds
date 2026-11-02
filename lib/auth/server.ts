import { createNeonAuth } from "@neondatabase/auth/next/server"

type NeonAuth = ReturnType<typeof createNeonAuth>

let instance: NeonAuth | null = null

// Created on first use rather than at import, so the public site still builds
// and runs where the admin settings (NEON_AUTH_*) haven't been added yet
export const getAuth = (): NeonAuth => {
  if (!instance) {
    const baseUrl = process.env.NEON_AUTH_BASE_URL
    const secret = process.env.NEON_AUTH_COOKIE_SECRET
    if (!baseUrl || !secret) {
      throw new Error("Admin sign-in is not configured: set NEON_AUTH_BASE_URL and NEON_AUTH_COOKIE_SECRET.")
    }
    instance = createNeonAuth({ baseUrl, cookies: { secret } })
  }
  return instance
}

export const isAuthConfigured = () => Boolean(process.env.NEON_AUTH_BASE_URL && process.env.NEON_AUTH_COOKIE_SECRET)
