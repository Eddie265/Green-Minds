import type { NextRequest } from "next/server"
import { getAuth } from "@/lib/auth/server"

type Context = { params: Promise<{ path: string[] }> }

// Forwards sign-in requests from the browser to Neon Auth
const forward = (method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH") => (request: NextRequest, context: Context) =>
  getAuth().handler()[method](request, context)

export const GET = forward("GET")
export const POST = forward("POST")
export const PUT = forward("PUT")
export const DELETE = forward("DELETE")
export const PATCH = forward("PATCH")
