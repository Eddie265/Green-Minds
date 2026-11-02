import "server-only"
import { revalidatePath } from "next/cache"
import { getAuth, isAuthConfigured } from "@/lib/auth/server"
import { sql } from "@/lib/db"

export type AdminState =
  | { status: "signed-out" }
  | { status: "unverified"; email: string }
  | { status: "not-allowed"; email: string }
  | { status: "admin"; email: string; name: string }

// Who is signed in and whether they may use /admin. Access needs a verified
// email address that is on the admins list; an account alone grants nothing.
export async function getAdminState(): Promise<AdminState> {
  if (!isAuthConfigured()) return { status: "signed-out" }
  const { data: session } = await getAuth().getSession()
  const user = session?.user
  if (!user?.email) return { status: "signed-out" }

  const email = user.email.toLowerCase()
  if (!user.emailVerified) return { status: "unverified", email }

  const rows = await sql()`SELECT 1 FROM admins WHERE email = ${email}`
  if (rows.length === 0) return { status: "not-allowed", email }

  return { status: "admin", email, name: user.name || email }
}

export async function getAdminList() {
  const rows = (await sql()`SELECT email, added_by FROM admins ORDER BY added_at`) as {
    email: string
    added_by: string | null
  }[]
  return rows.map((row) => ({ email: row.email, addedBy: row.added_by }))
}

export class NotAuthorizedError extends Error {
  constructor() {
    super("You need to be signed in as an admin to do that.")
  }
}

// Every admin route handler and server action starts with this
export async function requireAdmin() {
  const state = await getAdminState()
  if (state.status !== "admin") throw new NotAuthorizedError()
  return state
}

// Rebuild every public page so changes show up on the next visit
export function refreshSite() {
  revalidatePath("/", "layout")
}
