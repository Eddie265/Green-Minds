import { NextResponse, type NextRequest } from "next/server"
import { getAuth, isAuthConfigured } from "@/lib/auth/server"

// Sends signed-out visitors from /admin to the sign-in page and keeps admin
// sessions fresh. Every admin page, route and action also checks access itself.
export default function proxy(request: NextRequest) {
  if (!isAuthConfigured()) return NextResponse.redirect(new URL("/admin/sign-in", request.url))
  return getAuth().middleware({ loginUrl: "/admin/sign-in" })(request)
}

export const config = {
  matcher: ["/admin"],
}
